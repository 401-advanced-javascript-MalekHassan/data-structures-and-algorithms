'use strict';

// maybe call this "left" and "right" tables?
const leftJoin = (hashTable1, hashtable2) => {
  const outputArray = [];

  for (let word in hashTable1.buckets) {
    const synonym = hashTable1.buckets[word];

    let antonym = 'NULL';

    if (word in hashtable2.buckets) {
      antonym = hashtable2.buckets[word];
    }

    const temp = [word, synonym, antonym];

    outputArray.push(temp);
  }

  return outputArray;
};

module.exports = leftJoin;
