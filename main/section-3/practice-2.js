    'use strict';

    function createUpdatedCollection(collectionA, objectB) {
      var collectionC = [];

      for(let i = 0; i < collectionA.length; i++)
      {
        for(let j = 0; j < objectB["value"].length; j++)
        {
          if(objectB["value"][j]==(collectionA[i].key))
          {
            if(j < 2)
                {
                collectionA[i].count = collectionA[i].count - 1;
                  if(collectionC.includes(collectionA[i]))
                  {
                  }
                  else
                  {
                  collectionC.push(collectionA[i]);
                  }
                }
                else if( j == 2)
                {
                  collectionA[i].count = collectionA[i].count - 2;
                  if(collectionC.includes(collectionA[i]))
                  {
                  }
                  else
                  {
                  collectionC.push(collectionA[i]);
                  }
                }
                else
                {
                  collectionA[i].count = collectionA[i].count - 3;
                  if(collectionC.includes(collectionA[i]))
                  {
                  }
                  else
                  {
                  collectionC.push(collectionA[i]);
                  }
                }
            }
            else
            {
              if(collectionC.includes(collectionA[i]))
              {
              
              }
              else
              {
              collectionC.push(collectionA[i]);
              }
            }
        }

      }


      // for(let i = 0; i < collectionA.length; i++)
      // {
      //   if(objectB["value"].includes(collectionA[i].key))
      //   {
      //     if(i < 2)
      //     {
      //     collectionA[i].count = collectionA[i].count - 1;
      //       collectionC.push(collectionA[i]);
      //     }
      //     else if( i == 2)
      //     {
      //       collectionA[i].count = collectionA[i].count - 2;
      //       collectionC.push(collectionA[i]);
      //     }
      //     else
      //     {
      //       collectionA[i].count = collectionA[i].count - 3;
      //       collectionC.push(collectionA[i]);
      //     }
      //   }
      //   else
      //   {
      //     collectionC.push(collectionA[i]);
      //   }
      // }

      return collectionC;
    }
