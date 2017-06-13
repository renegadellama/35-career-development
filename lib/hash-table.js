'use strict';

const DLL = require('./dll');
const BST = require('./bst');

const HashTable = module.exports = function(size = 8192){
  this.values = {};
  this.size = size;
  this.buckets = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('key required');
  let hash = key.split('').reduce((acc, curr) => curr.charCodeAt(0), 0) % this.size;
  return hash;
};

//O(1), if DLL present O(n)
HashTable.prototype.add = function(key, val) {
  let hash = this.hashKey(key);

  if(!this.bucket[hash]) this.buckets[hash] = new DLL();
  if(this.buckets[hash]) this.buckets[hash].append(val);
};

//O(1), if BST Present O(log n)
HashTable.prototype.addBST = function(key, val) {
  let hash = this.hashKey(key);

  if(!this.bucket[hash]) this.buckets[hash] = new DLL();
  if(this.buckets[hash]) this.buckets[hash].add(val);
};

//O(1), if DLL present O(n)
HashTable.prototype.get = function(key) {
  if(!this.buckets[key]) {
    throw new Error ('bucket does not exist');
  }
  return this.buckets[this.hashKey(key)];

};

//O(1), if DLL present O(n)
HashTable.prototype.remove = function(key) {
  let myNode = this.hashKey(key);
  this.buckets[myNode] ? delete this.bucketes[myNode] : new Error('key does not exist');
};
