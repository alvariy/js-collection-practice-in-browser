'use strict';

function countSameElements(collection) {
  var collectionC = [];
  var collectionLetters = [];
  var collectionCountOfLetters = [];
  var letter = "";


 
  

  for(let i = 0; i < collection.length; i++)
  {

    var output = collection[i].split('');


    if(output.length < 2)
    {

      if(collectionLetters.includes(collection[i]))
      {
       
      }
      else
      {
        collectionLetters.push(collection[i]);
      }
       
    }
    else
    {
      for(let y = 0; y < output.length; y++)
      {

        if(output[y] == "-" || output[y] == "[" || output[y] == "]")
        {

        }
        if(output[y] == "0" || output[y] == "1" || output[y] == "2"|| output[y] == "3" || output[y] == "4" || output[y] == "5"
        || output[y] == "6" || output[y] == "7" || output[y] == "8" || output[y] == "9"
        )
        {
          
        }
        if(collectionLetters.includes(output[0]))
        {
         
        }
        else
        {
          collectionLetters.push(output[0]);
          
        }

      }

    }


  }

  var counter = 0;
  var toAdd = "";

  for(let o = 0; o < collectionLetters.length; o++)
  {

  for(let i = 0; i < collection.length; i++)
  {
    var output = collection[i].split('');
    if(output.length < 2)
    {
      if(collectionLetters[o] == collection[i])
      {
    counter = counter + 1;
      }
    }
    else
    {
      if(collectionLetters[o] == output[0])
      {
      for(let y = 0; y < output.length; y++)
      {
       if(output[y] == "-" || output[y] == "[" || output[y] == "]"|| output[y] == ":")
       {

       }
        if(output[y] == "0" || output[y] == "1" || output[y] == "2"|| output[y] == "3" || output[y] == "4" || output[y] == "5"|| output[y] == "6" || output[y] == "7" || output[y] == "8" || output[y] == "9")
       {
        toAdd = toAdd.concat(output[y]);
       }
        
     }
     counter = counter + parseInt(toAdd);
     toAdd = "";
    }
    }
  }
  parseInt(counter);
  collectionCountOfLetters.push(counter);
  counter = 0;
}


  for(let c = 0; c < collectionLetters.length ; c++)
  {
  var newObject = {name: collectionLetters[c], summary: parseInt(collectionCountOfLetters[c])};
  collectionC.push(newObject);
  }


  // return collectionC;
  return collectionC;
}
