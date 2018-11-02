var add =  function(a, b, callback){
  callback(a+b);
};
var add1 = add(10, 20, function(res){
  console.log(res);
});
