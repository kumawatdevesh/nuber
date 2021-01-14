import { Resolvers } from "../../../types/resolvers"
import authResolver from "../../../authResolver"
import Place from "../../../models/Place"
import { User, Place as PlaceTypes } from "../../../types/graph"

const resolvers: Resolvers = {
    Mutation: {
        DeletePlace: authResolver(async (_: any, args: any, context: any) => {

            const placeId = args.placeId
            const user: User = context.req.user

            try {
                const place: PlaceTypes = await Place.findOne({ _id: placeId }) as unknown as PlaceTypes

                if (place) {
                    if (place.user._id === user._id) {
                        await Place.deleteOne({ _id: placeId })
                        return {
                            ok: true,
                            error: null
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Not authorized"
                        }
                    }
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