'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var collectionC = [];
  var collectionD = [];
  var counter = 0;
  var counter1 = "";
  var checker = false;
  var letter = "";

  for(let i = 0; i < collectionA.length; i++)
  {

    var output = collectionA[i].split('');

    if(output.length < 2)
    {
      for(let j = 0; j < collectionA.length; j++)
      {
          if(collectionA[i] == collectionA[j])
          {
            counter = counter + 1;
          }
      }
    
      var newObject = {key: collectionA[i], count: counter};



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

  for(let i = 0; i < collectionC.length; i++)
  {
    for(let j = 0; j < objectB["value"].length; j++)
    {
      if(objectB["value"][j]==(collectionC[i].key))
      {
        if(j < 2)
            {
              collectionC[i].count = collectionC[i].count - 1;
              if(collectionD.includes(collectionC[i]))
              {
              }
              else
              {
              collectionD.push(collectionC[i]);
              }
            }
            else if( j == 2)
            {
              collectionC[i].count = collectionC[i].count - 2;
              if(collectionD.includes(collectionC[i]))
              {
              }
              else
              {
              collectionD.push(collectionC[i]);
              }
            }
            else
            {
              collectionC[i].count = collectionC[i].count - 3;
              if(collectionD.includes(collectionC[i]))
              {
              }
              else
              {
              collectionD.push(collectionC[i]);
              }
            }
        }
        else
        {
          if(collectionD.includes(collectionC[i]))
          {
          
          }
          else
          {
          collectionD.push(collectionC[i]);
          }
        }
    }

  }
  
  return collectionD;
}
