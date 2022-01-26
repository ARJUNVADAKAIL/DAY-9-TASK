var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
       console.log(data);
     data.forEach((ele)=>{console.log(`NAME:${ele.name} \n CAPITAL: ${ele.capital} \n FLAG: ${ele.flag}`)})

}