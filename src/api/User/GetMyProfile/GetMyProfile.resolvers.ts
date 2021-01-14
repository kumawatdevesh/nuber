import { Resolvers } from "../../../types/resolvers"
import authResolver from "../../../authResolver"

const resolvers: Resolvers = {
    Query: {
        GetMyProfile: authResolver(async (_: any, args: any, context: any, info: any) => {

            const user = await context.req.user
            if (user) {
                return {
                    ok: true,
                    error: null,
                    user: user
                }
            }
        })
    }
}

export default resolvers