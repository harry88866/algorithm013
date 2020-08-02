//两数和
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let targetNum = target- nums[i]
        if(map[targetNum] == undefined){
            map[nums[i]] = i
        }
        else{
            return [map[targetNum],i]
        }
    }
};