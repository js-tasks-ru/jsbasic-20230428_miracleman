function sumSalary(salaries) {
  result = 0;
  
  for(key in salaries){
    let currentValue = salaries[key];
    if(typeof(currentValue) === 'number' 
       && isFinite(currentValue)
        && !isNaN(currentValue)){
      result += salaries[key];
    }
  }
  
  return result
}
