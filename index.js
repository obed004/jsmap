//map is said to be key a key and value pair
let map = new Map();

map.set("benjamin","male");
map.set("cherish","female");
map.set("cow","animal");
map.set("fungi","bacteria");

console.log(map.keys());//keys() method
console.log(map.has("fungi"))//has()method
console.log(map.get("cow"));//get() method
map.forEach((v,k) =>{
    console.log( k,":",v);
});

