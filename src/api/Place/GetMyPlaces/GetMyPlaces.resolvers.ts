import { Resolvers } from "../../../types/resolvers";
import authResolver from "../../../authResolver";
import Place from "../../../models/Place"
import { User } from "../../../types/graph";

const resolvers: Resolvers = {
    Query: {
        GetMyPlaces: authResolver(async (_: any, args: any, context: any) => {

            const user: User = context.req.user

            try {
                const places = await Place.find({ user: user._id })

                return {
                    ok: true,
                    error: null,
                    places: places
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