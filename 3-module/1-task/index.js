function namify(users) {
  let results = [];
  for (const user of users) {
    results.push(user.name);
  }
  return results;
}
