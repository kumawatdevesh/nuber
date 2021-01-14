import { Resolvers } from "../../../types/resolvers";
import Verification from "../../../models/Verification";
import User from "../../../models/User";
import { User as UserType, Verification as VerificationType } from "../../../types/graph";
import createJWT from "../../../utils/create.JWT";

const resolvers: Resolvers = {
    Mutation: {
        CompletePhoneVerification: async (_, args) => {

            const { phoneNumber, key } = args;

            try {
                const verification: any = await Verification.findOne({ payload: `+91${phoneNumber}`, key: key })

                if (!verification) {
                    return {
                        ok: false,
                        error: "Verification key is not valid",
                        token: "Token"
                    }
                } else {
                    verification.verified = true;
                    await verification.save();
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e.message,
                    token: "No token"
                }
            }

            try {
                const user: any = await User.findOne({ phoneNumber });
                if (user) {
                    user.verifiedPhoneNumber = true;
                    await user.save();
                    return {
                        ok: false,
                        error: "No Error",
                        token: createJWT(user._id)
                    }
                } else {
                    return {
                        ok: true,
                        error: "No",
                        token: "No Token"
                    }
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e.message,
                    token: "No token"
                }
            }
        }
    }
}

export default resolvers;