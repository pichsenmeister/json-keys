
const obj = {
    key1: '',
    key2: '',
    obj1: {
        key1: '',
        key2: '',
        obj2: {
            key1: '',
            key2: ''
        }
    },
    arr: [{
        key1: '',
        key2: ''
    },
    {
        key1: '',
        key2: '',
        obj1: {
            key1: '',
            key2: ''
        }
    }]
}

const keys = [
    'key1', 'key2', 'obj1', 'obj1.key1', 'obj1.key2', 'obj1.obj2', 'obj1.obj2.key1', 'obj1.obj2.key2',
    'arr', 'arr.0', 'arr.0.key1', 'arr.0.key2',
    'arr.1', 'arr.1.key1', 'arr.1.key2', 'arr.1.obj1', 'arr.1.obj1.key1', 'arr.1.obj1.key2'
]

const arr = [obj, obj]

module.exports = {
    obj,
    arr,
    keys
}