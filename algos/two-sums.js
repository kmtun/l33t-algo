var twoSum = function(nums, target) {
  let storage = {}, result = [];
  storage[nums[0]] = 0;
  for(let i = 1; i < nums.length; i++) {
    let value = target - nums[i];
    if(value in storage) {
      return result = [storage[value], i];
    }
    else {
      storage[nums[i]] = i;
    }
  }
  return result;
};
twoSum([3,2,4], 9);