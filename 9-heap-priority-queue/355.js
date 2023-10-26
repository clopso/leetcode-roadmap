
var Twitter = function() {
    this.userMap = new Map()
    this.followMap = new Map()
    this.timestamp = 0 
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.timestamp++
    if(!this.userMap.has(userId)){
        this.userMap.set(userId, [])
    }
    this.userMap.get(userId).push([tweetId, this.timestamp])
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let res = this.userMap.get(userId)  || []
    let fe = this.followMap.get(userId) || new Set()

    for(const e of fe){
        res = res.concat(this.userMap.get(e) || [])
    }

    res.sort((a,b) => b[1] - a[1])
    return res.slice(0, 10).map(x => x[0])
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.followMap.has(followerId)){
        this.followMap.set(followerId, new Set())
    }
    this.followMap.get(followerId).add(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followMap.has(followerId)){
        this.followMap.get(followerId).delete(followeeId)
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */