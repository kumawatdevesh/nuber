import { Resolvers } from "../../../types/resolvers"
import authResolver from "../../../authResolver"
import Place from "../../../models/Place"
import { Place as PlaceTypes, User } from "../../../types/graph"

const resolvers: Resolvers = {
    Mutation: {
        EditPlace: authResolver(async (_: any, args: any, context: any) => {

            const placeId = args.placeId
            const user: User = context.req.user

            try {
                const place: PlaceTypes = await Place.findOne({ _id: placeId }) as unknown as PlaceTypes

                if (place) {
                    if (place.user._id === user._id) {
                        await Place.updateOne({ _id: placeId }, { ...args })
                        return {
                            ok: true,
                            error: null
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Not authroized"
                        }
                    }
                } else {
                    return {
                        ok: false,
                        error: "No place found"
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