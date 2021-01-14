import { Resolvers } from "../../../types/resolvers";
import User from '../../../models/User';
import { User as UserType } from "../../../types/graph";
import createJWT from "../../../utils/create.JWT";

const resolvers: Resolvers = {
    Mutation: {
        FacebookConnect: async (_, args) => {
            try {
                const exisitingUser = await User.findOne({ fbId: args.fbId });
                if (exisitingUser) {
                    return {
                        ok: true,
                        error: null,
                        token: createJWT(exisitingUser._id)
                    }
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e,
                    token: null
                }
            }

            try {
                const newUser = await new User({
                    ...args,
                    profilePhoto: `http://graph.facebook.com/${args.fbId}/picture?type=square`
                })
                    .save();
                if (newUser) {
                    return {
                        ok: true,
                        error: null,
                        token: createJWT(newUser._id)
                    }
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e,
                    token: null
                }
            }
        }
    }
}

export default resolvers;

