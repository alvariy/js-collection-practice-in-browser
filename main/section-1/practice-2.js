'use strict';

function collectSameElements(collectionA, collectionB) {

  // var collectionC = [];

  // for(let i = 0; i < collectionA.length; i++)
  // {
  //   if(collectionB[0].includes(collectionA[i]))
  //   {
  //       collectionC.push(collectionA[i]);
  //   }
  // }

  return collectionA.filter(n => collectionB[0].includes(n));
}
