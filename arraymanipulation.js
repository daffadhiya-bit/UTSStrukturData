function longestConsecutiveSequence(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 111, 222, 333]));
