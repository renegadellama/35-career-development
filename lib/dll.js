'use strict';

const Node = function(val, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};

const DLL = module.exports = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DLL.prototype.append = function(val) {
  if(!val) throw new Error('must provide value');
  if(!this.tail) return this.tail = this.head = new Node(val);

  this.head.next = new Node(val);
  this.head.next.prev = this.head;
  this.head = this.head.next;
  this.length++;
  return this.head;
};

DLL.prototype.prepend = function(val){
  if(!val) throw new Error('must provide value');
  if(!this.tail) return this.tail = this.head = new Node(val);

  this.tail.prev = new Node(val);
  this.tail.prev.next = this.tail;
  this.tail = this.tail.prev;
  this.length++;
  return this.tail;
};

DLL.prototype.remove = function(val) {
  let current = this.head;
  while(current) {
    if(current.val === val) {
      if(current === this.head && current === this.tail){
        this.head = null;
        this.tail = null;
      } else if(current === this.head) {
        this.head = this.head.next;
        this.head.previous = null;
      } else if(current === this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      }else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }
      this.length--;
    }
    current = current.next;
  }
};
