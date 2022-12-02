
const data = require('./data');

module.exports = {
  partOne: () => {
    const parsed = data.split(/\n\s*\n/);

    let highest = 0;
  
    for (let i = 0; i < parsed.length; i++) {
      const sum = parsed[i].split(/\r?\n/).reduce((total, current) => {
        total += parseInt(current);
        return total;
      }, 0);
      if (sum > highest) {
        highest = sum;
      }
    }
    console.log(highest);
    return highest;
  },
  partTwo: () => {
    const parsed = data.split(/\n\s*\n/);
  
    const results = []
  
    for (let i = 0; i < parsed.length; i++) {
      const sum = parsed[i].split(/\r?\n/).reduce((total, current) => {
        total += parseInt(current);
        return total;
      }, 0);
      results.push(sum);
    }
    const sorted = results.sort((a, b) => b - a);
    console.log(sorted[0] + sorted[1] + sorted[2]);
    return sorted[0] + sorted[1] + sorted[2];
  }
}



