import { Resolvers } from "../../../types/resolvers";
import User from "../../../models/User";
import createJWT from "../../../utils/create.JWT";
import sendEmailClient from "../../../utils/sendEmail";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async (_, args) => {
            const { email } = args;

            try {
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    return {
                        ok: true,
                        error: "You should log in instead",
                        token: null
                    }
                } else {
                    const newUser = await new User({ ...args }).save();
                    await sendEmailClient()
                    return {
                        ok: true,
                        error: "No",
                        token: createJWT(newUser._id)
                    }
                }
            } catch (e) {
                return {
                    ok: false,
                    error: "Yes",
                    token: "No"
                }
            }
        }
    }
}

export default resolvers;