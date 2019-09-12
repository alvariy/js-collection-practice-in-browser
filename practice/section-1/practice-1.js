'use strict';

function collectSameElements(collectionA, collectionB) {

  var collectionC = [];

  //For loop for the collection of Identical items in collection A and collection B
  for(let i = 0; i < collectionA.length; i++)
  {
    if(collectionB.includes(collectionA[i]))
    {
        collectionC.push(collectionA[i]);
    }
  }

  return collectionC;
}
