var Trie = function () {
	this.curr = '';
	this.next = {};
	this.complete = false;
}

Trie.prototype.insert = function(word, i) {
	i = i || 0;
	if (i >= word.length) {
		return;
	}
	// console.log('12', this.next, word[i])
	if(this.next.curr !== word[i]) {
		// console.log(word, word[i])
		this.next = new Trie();
		this.next.curr = word[i];
	}
	if (i === word.length - 1) {
		this.next.complete = true;
	}
	this.next.insert(word, i+1);
}

Trie.prototype.search = function(word) {
	let wordLen = word.length;
	let node = this.next;
	for (let i = 0; i < word.length; i++) {
		if(node.curr !== word[i]) {	
			console.log(false);
			return false;
		} else if (i === word.length - 1 && node.complete) {
			console.log(true);
			return true;
		} else {
			node = node.next;
		}
	}
	console.log(false);
	return false;
}

Trie.prototype.startsWith = function(word) {
 	let wordLen = word.length;
	let node = this.next;
	for (let i = 0; i < word.length; i++) {
		if(node.curr !== word[i]) {
			console.log(false);
			return false;
		} else {
			node = node.next;
		}
	}
	console.log(true);
	return true;
}

function createNode() {
	this.curr = null;
	this.next = null;
	this.acc = null;
}

let trie = new Trie();
trie.insert('app');
trie.insert('apple');
trie.insert('beer');
trie.insert('add');
trie.insert('jam');
trie.insert('rental');

// trie.search('apps')
// trie.search('app')
// trie.search('ad')
// trie.search('applepie')
// trie.search('rest')
// trie.search('jan')
// trie.search('rent')
// trie.search('beer')
// trie.search('jam')


// trie.searchWith('apps')
// trie.searchWith('app')
// trie.searchWith('ad')
// trie.searchWith('applepie')
// trie.searchWith('rest')
// trie.searchWith('jan')
// trie.searchWith('rent')
// trie.searchWith('beer')
// trie.searchWith('jam')


console.log(trie)

/*
["Trie","insert","insert","insert","insert","insert","insert","search","search","search","search","search","search","search","search","search","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith"]
[[],     ["app"],["apple"],["beer"],["add"],["jam"],["rental"],["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"],   ["apps"],["app"],      ["ad"],     ["applepie"],  ["rest"],    ["jan"],       ["rent"],      ["beer"],["jam"]]
*/

// trie.insert('app');