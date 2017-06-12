'use strict';

const DLL = require('./dll');

const HashTable = function(size = 8192){
  this.values = {};
  this.size = size;
  this.buckets = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('key required');
  let hash = key.split('').reduce((acc, curr) => curr.charCodeAt(0), 0) % this.size;
  return hash;
};

HashTable.prototype.add = function(key, value) {
  let hash = this.hashKey(key);

}
