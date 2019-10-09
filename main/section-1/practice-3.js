'use strict';

function collectSameElements(collectionA, objectB) {

  // var collectionC = [];

  // for(let i = 0; i < collectionA.length; i++)
  // {
  //   if(objectB["value"].includes(collectionA[i]))
  //   {
  //       collectionC.push(collectionA[i]);
  //   }
  // }

  return collectionA.filter(n => objectB.value.includes(n));
}
