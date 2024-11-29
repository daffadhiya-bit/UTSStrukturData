function groupAnagrams(words) {
    const map = new Map();
    const normalizeWord = (word) => {
        return word.toLowerCase().split('').sort().join('');
    };
    for (let i = 0; i < words.length; i++) {
        const originalWord = words[i];
        const normalized = normalizeWord(originalWord);
        if (!map.has(normalized)) {
            map.set(normalized, []);
        }
        map.get(normalized).push(originalWord);
    }
    const result = [];
    for (let group of map.values()) {
        result.push(group);
    }
    return result;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
