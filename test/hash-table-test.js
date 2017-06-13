'use strict';

const expect = require('chai').expect;
const faker = require('faker');
const HashTable = require('../lib/hash-table');
const DLL = require('../lib/dll');

// describe('Hash table module', () => {
//   beforeEach(done => {
//     let hashTable = new HashTable();
//     done();
//   });
//   afterEach(done => {
//   let hashTable = null;
//     done();
//   });
// });

describe('creates a hash table', () => {
  let hashTable = new HashTable();
  it('should have an object for values', done => {
    expect(hashTable.values).to.be.instanceOf(Object);
    done();
  });
  it('should have a size set to 8192', done => {
    expect(hashTable.size).to.equal(8192);
    done();
  });
  it('should have arrays assigned to the buckets property', done => {
    expect(hashTable.buckets).to.be.instanceOf(Array);
    done();
  });
});

describe('creates a hash', () => {
  let hashTable = new HashTable();
  it('should create a hash key', done => {
    let myHash = hashTable.hashKey('larry');
    let realHash = 121;
    expect(myHash).to.equal(realHash);
    done();
  });
  it('should be less than 8192', done => {
    let myHash = hashTable.hashKey('My heart goes out to all parents that have lost children. And so, if children were lost in Sandy Hook, my heart goes out to each and everyone of those parents, and the people that say they parents that I see on the news. -Alex Jones');
    expect(myHash).to.be.lessThan(8192);
    done();
  });
  it('should be a number', done => {
    let myHash = hashTable.hashKey('larry');
    expect(myHash).to.be.instanceOf(Number);

    done();
  });
});

describe('adds a value to bucket', () => {
it('should create a DLL for a new key', done => {
  let hashTable = new HashTable();
  let myKey = hashTable.hashKey('larry');
  let newHash = hashTable.add('larry', 50)
  console.log('heeeeeee', newHash.buckets[myKey]);
  expect(newHash.buckets[myKey]).to.be.instanceOf(DLL);
  done();
})
  // let hashTable
})
