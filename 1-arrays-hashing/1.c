int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    for(int x = 0; x < numsSize; ++x){
        for(int y = x+1; y < numsSize; ++y){
            if((nums[x] + nums[y]) == target){
                int *returnValue = (int*)malloc(2*(sizeof(int)));
                returnValue[0] = x;
                returnValue[1] = y;
                *returnSize = 2;
                return returnValue;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}