export function isConsecutive(arr: Array<number>) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.length === 1) return false;
    // 检查数组是否包含非数值元素
    if (!arr.every(Number.isInteger)) return false;
    const set = new Set(arr);
    if (set.size !== arr.length) return false;
    const sortedArr = Array.from(set).sort((a, b) => a - b);
    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] - sortedArr[i - 1] !== 1) {
            return false;
        }
    }
    return true;
}

