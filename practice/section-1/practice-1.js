'use strict';

function collectSameElements(collectionA, collectionB) {

  var collectionC = [];

  for(let i = 0; i < collectionA.length; i++)
  {
    if(collectionB.includes(collectionA[i]))
    {
        collectionC.push(collectionA[i]);
    }
  }

  return collectionC;
}
