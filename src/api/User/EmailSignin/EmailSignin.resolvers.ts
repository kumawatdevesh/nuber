import User from '../../../models/User';
import createJWT from "../../../utils/create.JWT";
import Verification from '../../../models/Verification'
import { Resolvers } from "../../../types/resolvers";
import { User as UserTypes } from "../../../types/graph";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignin: async (_, args) => {
            const { email, password } = args;

            try {
                const user: UserTypes = await User.findOne({ email }) as unknown as UserTypes
                if (!user) {
                    return {
                        ok: false,
                        error: "No user found with email!",
                        token: null
                    }
                } else {
                    if (user.password === password) {
                        return {
                            ok: true,
                            error: "No error!",
                            token: createJWT(user._id)
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Password is wrong!",
                            token: null
                        }
                    }
                }
            } catch (e) {
                return {
                    ok: false,
                    error: "Some error ocurred!",
                    token: null
                }
            }
        }
    }
};

export default resolvers;