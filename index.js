// Code your solution here
function findMatching(list,name){
  return (list.filter(function(drivername){
    return drivername.toLowerCase()===name.toLowerCase()}));
}