import { Resolvers } from "../../../types/resolvers";
import Verification from "../../../models/Verification";
import sendVerificationSMS from '../../../utils/sendSMS';
import { Verification as VerificatioTypes } from "../../../types/graph";
// 19014400980

const resolvers: Resolvers = {
    Mutation: {
        StartPhoneVerification: async (_, args): Promise<{ ok: boolean, error: string | null }> => {
            const { phoneNumber } = args;

            try {
                const exisitingVerification = await Verification.findOne({ payload: `+91${phoneNumber}` });

                if (exisitingVerification) {
                    exisitingVerification.deleteOne();
                }
                const newVerification: any = await new Verification({
                    payload: `+91${phoneNumber}`,
                    target: "PHONE",
                    key: Math.floor(100000 + Math.random() * 900000)
                }).save();

                console.log(newVerification);
                await sendVerificationSMS(newVerification.payload, newVerification.key);

                return {
                    ok: newVerification.key,
                    error: 'No'
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e.message
                }
            }
        }
    }
}

export default resolvers;