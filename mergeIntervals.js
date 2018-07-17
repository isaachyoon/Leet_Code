var merge = function(intervals) {
intervals = intervals.sort((x,y) => x.start - y.start);
  let res = [];
  if (intervals.length > 0) {
    res.push(intervals[0]);
  }
  for (let i = 1; i < intervals.length; i++) {
    let firstInterval = res[res.length - 1];
    let secondInterval = intervals[i];

    if (firstInterval.end >= secondInterval.start) {
      if(firstInterval.end >= secondInterval.end) {
        continue;
      } else {
        firstInterval.end = secondInterval.end; 
      }
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};

let input = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(input));

// console.log(merge([[1,4],[2,6],[8,10],[15,18]]));