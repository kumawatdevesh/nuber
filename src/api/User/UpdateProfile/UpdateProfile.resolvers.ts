import { Resolvers } from "../../../types/resolvers"
import authResolver from "../../../authResolver"
import User from "../../../models/User"

const resolvers: Resolvers = {
    Mutation: {
        UpdateProfile: authResolver(async (_: any, args: any, context: any) => {
            try {
                const user = await context.req.user
                await User.findOneAndUpdate({ _id: user._id }, { ...args })
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