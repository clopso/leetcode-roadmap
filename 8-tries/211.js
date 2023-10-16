var Node = function() {
    this.children = {}
    this.end = false
}


var WordDictionary = function() {
    this.root = new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root
    for(const c of word){
        if(!node.children[c]){
            node.children[c] = new Node()
        }
        node = node.children[c]
    }
    node.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    var recursiveSearch = function(index, node) {
        for (let i = index; i < word.length; i++){
            const c = word[i]
            if(c === '.'){
                return Object.keys(node.children).some(k => recursiveSearch(i+1, node.children[k]))
            }
            if(!node.children[c]){
                return false
            }
            node = node.children[c]
        }
        return node.end
    }
    return recursiveSearch(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */