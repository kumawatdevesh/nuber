import UserModel from '../../models/User';
import { User } from '../../types/graph';

const resolvers = {
    Query: {
        User(_: any, args: { id: Number }) {
            return
        }
    }
}

export default resolvers;