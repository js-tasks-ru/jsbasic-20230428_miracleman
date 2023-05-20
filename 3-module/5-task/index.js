function getMinMax(str) {
 result = {};
  
 let stringArr = str.split(" ");
  
 let numberArr = [];
 for ( word of stringArr ) {
   const guessNumber = parseFloat( word, 10 );
   
   if ( !isNaN( guessNumber ) ) {
     numberArr.push( guessNumber );
   }
 }
  
 result.min = Math.min.apply(Math, numberArr);
 result.max = Math.max.apply(Math, numberArr);
  
 return result;
}