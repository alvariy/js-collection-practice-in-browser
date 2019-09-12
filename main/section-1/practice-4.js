'use strict';

function collectSameElements(collectionA, objectB) {

  var collectionC = [];

  for(let i = 0; i < collectionA.length; i++)
  {
    if(objectB["value"].includes(collectionA[i].key))
    {
        collectionC.push(collectionA[i].key);
    }
  }

  return collectionC;
}
