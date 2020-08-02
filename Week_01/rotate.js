//旋转数组
var rotate = function(nums, k) {
    while(k > 0){
        let i = nums.pop()
        nums.unshift(i)
        k--
    }
};