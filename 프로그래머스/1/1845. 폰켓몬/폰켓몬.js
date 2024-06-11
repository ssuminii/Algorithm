function solution(nums) {
    const set = new Set(nums);
    return set.size > nums.length/2 ? [...set].slice(0, nums.length/2).length : set.size;
}