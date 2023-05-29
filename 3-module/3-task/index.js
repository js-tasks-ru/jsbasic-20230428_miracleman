function camelize(str) {
  let arr=str.split("-");
  const arrLength = arr.length;
  const result = [];
  for(let i = 0; i < arrLength ; i++) {
    const item = arr[i];
    if(i === 0 ) {
      result.push(item);
    } else {
      result.push( item.charAt(0).toUpperCase() + item.slice(1) );
    }     
  }
  return result.join("");
}
