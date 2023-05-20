function showSalary(users, age) {
  let result = "";
  for ( user of users ) {
    if( user.age <= age ){
      result += (user.name + ", " + user.balance + "\n");
    }
  }
  return result.trim();
}
