# json-keys

<a href="https://david-dm.org/pichsenmeister/json-keys">
    <img src="https://david-dm.org/pichsenmeister/json-keys.svg" alt="Dependency Status" />
</a>
<a href="https://david-dm.org/pichsenmeister/json-keys#info=devDependencies">
    <img src="https://david-dm.org/pichsenmeister/json-keys/dev-status.svg" alt="devDependency Status" />
</a>

Small libary to retrieve keys of a JSON object or array.

* [Installation](#installation)
* [Getting started](#getting-started)
* [License](#license)

## Installation

Install via npm

```
npm install @barreljs/json-keys
```

or yarn

```
yarn add @barreljs/json-keys
```

## Getting started

```
const JsonKeys = require('@barreljs/json-keys')


```

### `.keys(json)`

Returns all keys as an array of strings

#### Example

```
const keys = JsonKeys.keys({
    key: 'value',
    obj: {
        key: 'value'
    }
})
```

returns

```
['key', 'obj', 'key']
```

### `.uniqueKeys(json)`

Returns all unique keys as an array of strings

#### Example

```
const keys = JsonKeys.uniqueKeys({
    key: 'value',
    obj: {
        key: 'value'
    }
})
```

returns

```
['key', 'obj']
```

### `.paths(json)`

Returns all keys including their path in dot notation as an array of strings

#### Example

```
const paths = JsonKeys.paths({
    key: 'value',
    obj: {
        key: 'value'
    },
    arr: [
        {
            key: 'value'
        }
    ]
})
```

returns

```
['key', 'obj', 'obj.key', 'arr', 'arr.0', 'arr.0.key']
```

### `.hasKey(json, key)`

checks if a path (or sub-path) in dot notation is part of a JSON object.

#### Example

```
// returns true
JsonKeys.hasKey({
    key: 'value',
    obj: {
        key: 'value'
    },
    arr: [
        {
            key: 'value'
        }
    ]
}, '0.key') 

// returns false
JsonKeys.hasKey({
    key: 'value',
    obj: {
        key: 'value'
    },
    arr: [
        {
            key: 'value'
        }
    ]
}, 'tree.doesNotExist') 
```

## License

This project is licensed under the MIT license, Copyright (c) 2020 David Pichsenmeister | [pichsenmeister.com](https://pichsenmeister.com). For more information see [LICENSE](LICENSE).
