var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
       console.log(data);
var result=data.reduce((acc,cv)=>acc+cv.population,0)
console.log(result);
}