export function reduceArray(array) {
    return array.reduce(function (a, b) {
      return a + b / 5;
    }, 0);
}
  
  
  export function ModeValue(list) {
    let mostFrequent = null,
      mostFrequentItem;
    list.sort();
  
    for (let i = 0; i < list.length; i++) {
      let single = list[i];
      let total = list.lastIndexOf(single) - list.indexOf(single) + 1;
  
      if (total > mostFrequent) {
        mostFrequentItem = list[i];
        mostFrequent = total;
        i = list.lastIndexOf(single) + 1;
      }
    }
    return mostFrequentItem;
  }