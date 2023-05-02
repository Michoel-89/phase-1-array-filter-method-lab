function findMatching(array, str) {
    let nArr = [];
    array.filter(function(i) {
        if (i.toLowerCase() === str.toLowerCase()) {
            nArr.push(i);
        }
    })
    return nArr;
}
function fuzzyMatch(array, str) {
    let nArr = [];
    array.filter(function(i) {
        if (i[0].toLowerCase() === str[0].toLowerCase()) {
            nArr.push(i);
        }
    })
    return nArr;
}
function matchName(array, str) {
    let nArr = [];
    array.filter(function(i) {
        if(i.name === str) {
          nArr.push(i)
        }
    })
    return nArr;
}
