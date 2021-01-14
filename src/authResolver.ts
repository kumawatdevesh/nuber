const authResolver = (resolverFunc: any) => async (
    _: any,
    args: any,
    context: any,
    info: any
) => {
    if (!context.req.user) {
        return {
            ok: false,
            error: 'Cannot reach!',
            places: []
        }
    } else {
        const resolved = await resolverFunc(_, args, context, info)
        return resolved
    }
}

export default authResolver