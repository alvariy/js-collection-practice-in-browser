'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var collectionC = [];

  for(let i = 0; i < collectionA.length; i++)
  {
    if(objectB["value"].includes(collectionA[i].key))
    {
      collectionA[i].count = collectionA[i].count - 1;
        collectionC.push(collectionA[i]);
    }
    else
    {
      collectionC.push(collectionA[i]);
    }
  }

  return collectionC;
}
