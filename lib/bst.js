'use strict';

const Node = function(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
};

const BST = module.exports = function () {
  this.root = null;
};

BST.prototype.add = function(val) {
  let node = new Node(val);
  if (!val) throw new Error('please enter val');
  if(!this.root) {
    this.root = node;
  } else {
    let current = this.root;
    while(current) {
      if(node.data < current.data) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.data > current.data) {
        if(!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
};
