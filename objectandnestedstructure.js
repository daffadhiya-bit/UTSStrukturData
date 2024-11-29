function flattenObject(obj) {
    const stack = [{ parentKey: '', currentObject: obj }];
    const result = {};
    while (stack.length > 0) {
        const { parentKey, currentObject } = stack.pop();
        if (typeof currentObject !== 'object' || currentObject === null) {
            throw new Error('Input harus berupa object valid');
        }
        const keys = Object.keys(currentObject);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            const value = currentObject[key];
            if (typeof value === 'object' && value !== null) {
                stack.push({ parentKey: newKey, currentObject: value });
            } else {
                result[newKey] = value;
            }
        }
    }
    return result;
}
const nestedObject = { a: 1, b: { c: 2, d: { e: 3 } } };
const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
