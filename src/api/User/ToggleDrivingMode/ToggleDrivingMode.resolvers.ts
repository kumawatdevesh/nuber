import authResolver from "../../../authResolver";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
    Mutation: {
        ToggleDrivingMode: authResolver(async (_: any, args: any, context: any) => {
            const user = await context.req.user
            try {
                user.isDriving = !user.isDriving
                await user.save()
                return {
                    ok: true,
                    error: null
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e.message
                }
            }
        })
    }
}

export default resolvers