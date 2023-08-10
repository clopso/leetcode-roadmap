/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var sortAlphabets = function (text) {
    return text.split('').sort().join('');
};

var groupAnagrams = function(strs) {
    let map = {};
    for(let str of strs){
        let s = sortAlphabets(str)
        if(!map[s]){
            map[s] = [str]
        }else{
            map[s].push(str)
        }
    }
    return Object.values(map)
};