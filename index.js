// Code your solution here
function findMatching(list,name){
  return (list.filter(function(drivername){
    return drivername.toLowerCase()===name.toLowerCase()}));
}

function fuzzyMatch(list, name){
  let l=name.length;
  return list.filter(function(drivername){
    return drivername.slice(0,l)===name;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}