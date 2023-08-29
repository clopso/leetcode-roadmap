var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!(this.map.has(key))){
        this.map.set(key, [])
    }
    this.map.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const value = this.map.get(key) || []
    if(!value){
        return ""
    }

    let left = 0
    let right = value.length - 1
    let result = ""

    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        const [v, t] = value[mid]
        if(timestamp >= t){
            if(timestamp === t){
                return v
            }
            left = mid + 1
            result = v
        }else{
            right = mid - 1
        }
    }
    return result
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */