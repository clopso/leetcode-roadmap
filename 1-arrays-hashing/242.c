int compareStr(const void * a, const void * b){
    return (*(char*)a - *(char*)b);
}

bool isAnagram(char * s, char * t){
    qsort (s, strlen(s), sizeof(char), compareStr);
    qsort (t, strlen(t), sizeof(char), compareStr);

    printf("s = %s, t = %s", s, t);

    if(strcmp(s, t) == 0){
        return true;
    }
    return false;
}