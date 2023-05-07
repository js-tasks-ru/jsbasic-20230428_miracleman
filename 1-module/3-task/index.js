function ucFirst(str) {
   if (!str){
    console.log("ucFirst(str) no symbols in the string");
    return ''
  }
  return str[0].toUpperCase() + str.slice(1);
}
