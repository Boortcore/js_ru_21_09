import {OrderedMap} from 'immutable'

export function arrToMap(arr, ItemRecord) {
    return arr.length ?
        arr.reduce((acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item), new OrderedMap({}))
            : new OrderedMap({})
}

export function mapToArr(obj) {
    return Object.values(obj)
}