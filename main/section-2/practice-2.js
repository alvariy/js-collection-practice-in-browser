'use strict';

function countSameElements(collection) {

  var collectionC = [];
  var counter = 0;
  var counter1 = "";
  var checker = false;
  var letter = "";

  for(let i = 0; i < collection.length; i++)
  {

    var output = collection[i].split('');

    if(output.length < 2)
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

    else 
    {
      for(let y = 0; y < output.length; y++)
      {
        if(output[y] == "-")
        {
          counter = 0;
          checker = true;
        }
        else
        {
        if(checker == true)
        {
          counter1 = counter1 + output[y];
        }

        else{
        letter = letter + output[y];
            }
        
        }
    }
      var newObject = {key: letter, count: parseInt(counter1)};
      collectionC.push(newObject);
      counter = 0;
    }
    
  }




  return collectionC;
}
