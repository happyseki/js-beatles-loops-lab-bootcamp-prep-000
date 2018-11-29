// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    const array=[];
function theBeatlesPlay(musicians, instruments){
  for(var i=0;i<musicians.length;i++){
       for(var j =0; j<instruments.length; j++){
                     if(i===j){
                      
  var string=`${musicians[i]} plays ${instruments[i]}`;
  array.push(string);
  return array;
 
  
              }
           }
         }
   }
 
  