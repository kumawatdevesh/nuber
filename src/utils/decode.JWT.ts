import jwt from "jsonwebtoken"
import User from "../models/User"

const decodeToken = async (token: string) => {

    try {
        const decoded: any = await jwt.verify(token, process.env.JWT_TOKEN!)
        const { id } = decoded
        const user = await User.findOne({ _id: id })
        return user
    } catch (e) {
        return {
            ok: false,
            error: null,
            user: null
        }
    }

}

export default decodeToken