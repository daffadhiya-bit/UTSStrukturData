function romanToInt(roman) {
    const romanMap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50],
        ['C', 100], ['D', 500], ['M', 1000]
    ]);
    let result = 0;
    let lastValue = 0;
    for (let i = roman.length - 1; i >= 0; i--) {
        const current = romanMap.get(roman[i]);
        if (!current) throw new Error(`Invalid Roman numeral: ${roman[i]}`);
        if (current >= lastValue) {
            result += current;
        } else {
            result -= current;
        }
        lastValue = current;
    }
    return result;
}
function binarySearch(arr, value, romanToIntFn) {
    let low = 0, high = arr.length - 1;
    let mid, midValue;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        midValue = romanToIntFn(arr[mid]);
        if (midValue === value) {
            return mid + 1;
        } else if (midValue < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}
function sortRomanNumerals(romanNumerals) {
    const sortedArray = [];
    romanNumerals.forEach((roman) => {
        const value = romanToInt(roman);
        const position = binarySearch(sortedArray, value, romanToInt);
        console.log(`Memproses "${roman}" dengan value ${value}. Tambah ke posisi ${position}.`);
        sortedArray.splice(position, 0, roman);
    });
    console.log("Akhir dari sorting :", sortedArray);
    return sortedArray;
}
const romanNumerals = ["X", "III", "IX", "IV", "V", "I", "VII", "II"];
const sortedRomanNumerals = sortRomanNumerals(romanNumerals);
console.log("Hasil sorting :", sortedRomanNumerals);
