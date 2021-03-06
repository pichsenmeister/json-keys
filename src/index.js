
const _isValidJSON = (value) => {
    const obj = Object.prototype.toString.call(value)
    return obj === '[object Object]' || obj === '[object Array]'
}

const _traverse = (json, result) => {
    if (Array.isArray(json)) {
        json.forEach(item => _traverse(item, result))
        return
    }

    for (let k in json) {
        result.push(k)
        if (typeof json[k] === "object") {
            _traverse(json[k], result)
        }
    }
}

const _traverseWithPath = (json, result, path) => {
    if (Array.isArray(json)) {
        json.forEach((item, index) => {
            const currentPath = path.length === 0 ? index.toString() : `${path}.${index.toString()}`
            result.push(currentPath)
            _traverseWithPath(item, result, currentPath)
        })
        return
    }

    for (let k in json) {
        const currentPath = path.length === 0 ? k : `${path}.${k}`
        result.push(currentPath)
        if (typeof json[k] === "object") {
            _traverseWithPath(json[k], result, currentPath)
        }
    }
}

const keys = (json) => {
    if (!_isValidJSON(json)) throw new Error('invalid JSON')
    const result = []
    _traverse(json, result)
    return result
}

const uniqueKeys = (json) => {
    return [...(new Set(keys(json)))]
}

const paths = (json) => {
    if (!_isValidJSON(json)) throw new Error('invalid JSON')
    const result = []
    _traverseWithPath(json, result, '')
    return result
}

const hasKey = (json, key) => {
    const result = []
    _traverseWithPath(json, result, '')
    return result.some(item => item.toLowerCase().indexOf(key.toLowerCase()) >= 0)
}

module.exports = {
    keys,
    uniqueKeys,
    paths,
    hasKey
}