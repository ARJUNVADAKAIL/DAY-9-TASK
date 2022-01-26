var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
       console.log(data);
       let result=data.filter((ele)=>ele.currencies[0].code==="USD").map((ele)=>ele.name);
       console.log(result);
}