import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';
import { Response, Request, NextFunction } from 'express';
import decodeToken from './utils/decode.JWT';

class App {
    public app: GraphQLServer

    constructor() {
        this.app = new GraphQLServer({
            schema,
            context: req => {
                return {
                    req: req.request
                }
            }
        })
        this.middlewares()
    }

    private middlewares = (): void => {
        this.app.express.use(cors())
        this.app.express.use(logger('dev'))
        this.app.express.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }))
        this.app.express.use(this.jwt)
    }

    private jwt = async (req: any, res: Response, next: NextFunction): Promise<void> => {
        const token = req.headers.authorization?.split(' ')[1];

        if (token) {
            const user = await decodeToken(token)
            if (user) {
                req.user = user
            } else {
                req.user = undefined
            }
        }
        next()
    }
}

export default new App().app;