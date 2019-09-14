'use strict';

function countSameElements(collection) {

  var collectionC = [];
  var counter = 0;

  for(let i = 0; i < collection.length; i++)
  {

      for(let j = 0; j < collection.length; j++)
      {
          if(collection[i] == collection[j])
          {
            counter = counter + 1;
          }
      }

      var newObject = {key: collection[i], count: counter};



      if (JSON.stringify(collectionC).includes(JSON.stringify(newObject))) 
      {
      }
      else
      {
         collectionC.push(newObject);
      }
      counter = 0;
    
  }




  return collectionC;
}
