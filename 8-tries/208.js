var TrieNode = function(){
    this.children = new Map()
    this.isEnd = false
}

var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for(let char of word){
        if(!node.children.has(char)){
            node.children.set(char, new TrieNode())
        }
        node = node.children.get(char)
    }
    node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for(let char of word) {
        if(!node.children.has(char)) {
            return false
        }
        node = node.children.get(char)
    }
    return node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    node = this.root
    for(let char of prefix) {
        if(!node.children.has(char)) {
            return false
        }
        node = node.children.get(char)
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */