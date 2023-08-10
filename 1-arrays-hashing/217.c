int compare(const void *a,const void *b) {
    return(*(int*)a - *(int*)b);
}

bool containsDuplicate(int* nums, int numsSize){
    qsort (nums, numsSize, sizeof(int), compare);
    for(int x = 1; x < numsSize; x++){
        if(nums[x] == nums[x-1]){
            return true;
        }
    }
    return false;
}