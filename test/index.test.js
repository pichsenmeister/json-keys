const JsonKeys = require("../dist/index")
const payload = require("./payload")

test("it should throw an `invalid JSON` error if payload is not valid JSON", () => {

    expect(() => {
        JsonKeys.keys("string")
    }).toThrow("invalid JSON")

    expect(() => {
        JsonKeys.keys(undefined)
    }).toThrow("invalid JSON")

    expect(() => {
        JsonKeys.keys(null)
    }).toThrow("invalid JSON")

    expect(() => {
        JsonKeys.keys(3)
    }).toThrow("invalid JSON")

    expect(() => {
        JsonKeys.keys(true)
    }).toThrow("invalid JSON")

    expect(() => {
        JsonKeys.keys(() => { })
    }).toThrow("invalid JSON")

    expect(() => {
        JsonKeys.keys((new Date()))
    }).toThrow("invalid JSON")
})

test("it should return all keys in a JSON obj", () => {
    const result = JsonKeys.keys(payload.obj)
    expect(result.length).toBe(16)
})

test("it should return all unique keys in a JSON obj", () => {
    const result = JsonKeys.uniqueKeys(payload.obj)
    expect(result.length).toBe(5)
})

test("it should return all keys with path in a JSON obj", () => {
    const result = JsonKeys.paths(payload.obj)
    expect(result.length).toBe(18)
    expect(JSON.stringify(result)).toBe(JSON.stringify(payload.keys))
})

test("it should check if a keys path exists in a JSON obj", () => {
    expect(JsonKeys.hasKey(payload.obj, 'obj2.key1')).toBe(true)
    expect(JsonKeys.hasKey(payload.obj, 'arr.1.key2')).toBe(true)
    expect(JsonKeys.hasKey(payload.obj, 'arr.1.obj1.key1')).toBe(true)
    expect(JsonKeys.hasKey(payload.obj, 'doesNotExist')).toBe(false)
})

test("it should return all keys in a JSON array", () => {
    const result = JsonKeys.keys(payload.arr)
    expect(result.length).toBe(32)
})

test("it should return all unique keys in a JSON array", () => {
    const result = JsonKeys.uniqueKeys(payload.arr)
    expect(result.length).toBe(5)
})

test("it should return all keys with path in a JSON array", () => {
    const result = JsonKeys.paths(payload.arr)
    // 2x 18 items plus 2 indexes = 38
    expect(result.length).toBe(38)

    const keys1 = payload.keys.map(item => '0.' + item)
    const keys2 = payload.keys.map(item => '1.' + item)
    const expected = ['0', ...keys1, '1', ...keys2]

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
})

test("it should check if a keys path exists in a JSON array", () => {
    expect(JsonKeys.hasKey(payload.arr, 'obj2.key1')).toBe(true)
    expect(JsonKeys.hasKey(payload.arr, 'arr.1.key2')).toBe(true)
    expect(JsonKeys.hasKey(payload.arr, 'arr.1.obj1.key1')).toBe(true)
    expect(JsonKeys.hasKey(payload.oarrbj, 'doesNotExist')).toBe(false)
})

