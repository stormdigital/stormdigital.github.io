export default {
    createAssetUrl: path => {

        if(/^data/.test(path)){
            return path;
        }

        if(/^https?:\/\//.test(path)){
            return path
        }

        path = path.replace(/^\//, '')
        return `${process.env.ASSET_BASE_PATH}${path}`
    }
}
