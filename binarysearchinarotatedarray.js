function search(nums, target) {
    let left = 0, right = nums.length - 1;
    let mid = -1, found = false;
    while (left <= right && !found) {
        mid = Math.floor((left + right) / 2);
        const midValue = nums[mid];
        const leftValue = nums[left];
        const rightValue = nums[right];
        if (midValue === target) {
            found = true;
            break;
        }
        let isLeftSorted = leftValue <= midValue;
        let isRightSorted = midValue <= rightValue;
        if (isLeftSorted) {
            if (leftValue <= target && target < midValue) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (isRightSorted) {
            if (midValue < target && target <= rightValue) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return found ? mid : -1;
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
