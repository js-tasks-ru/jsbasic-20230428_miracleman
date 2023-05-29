function filterRange(arr, a, b) {
  let min = (a > b) ? b : a;
  let max = (a > b) ? a : b;
  return arr.filter(item => (item >= min && item <=max));
}
