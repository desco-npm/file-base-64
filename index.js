export default _e => {
    let files = Object.values(_e.target.files)

    let promises = []
    let base64 = []

    files.map(_file => {
        promises.push(
            convert(_file).then(_base64 => {
                base64.push(_base64)
            })
        )
    })

    return Promise.all(promises).then(() => base64)
}

const convert = _file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = _e => {
            resolve(_e.target.result)
        }

        reader.onerror = _error => {
            console.log(Error(_error))

            reject(_error)
        }

        reader.readAsDataURL(_file)
    })
}