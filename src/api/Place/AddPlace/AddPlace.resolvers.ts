import { Resolvers } from "../../../types/resolvers"
import authResolver from "../../../authResolver"
import Place from "../../../models/Place"

const resolvers: Resolvers = {
    Mutation: {
        AddPlace: authResolver(async (_: any, args: any, context: any) => {
            try {
                const place = await new Place({ ...args })
                await place.save()
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