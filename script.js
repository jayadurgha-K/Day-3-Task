
//  Day-3-Task-1

// ! How to compare two JSON have the same properties without order

let obj1={name:"person",age:5}
let obj2={age:5,name:"person"}
if (Object.keys(obj1).length===Object.keys(obj2).length){
    console.log("length is same")
 
for (let key in obj1)
if (obj1[key]===obj2[key]){
    console.log(key ," keys are same")
}else{
    console.log(key ," keys are different")

}
}

// ----------------------------------------------------------------------------------

// Day-3-Task-2

//! use rest contries API URL and display all the country flags in console

//! XMLHTTPRequest

//! step:1 create XHR Object

var request= new XMLHttpRequest();

//! step2: opening a connection to server

request.open ("GET","https://restcountries.com/v3.1/all", true )


//! step:3 intializing the bridge to server / sending request

request.send();

//! step4: server response

request.onload=function(){

    var data = request.response;
   // console.log(data);

    var result=JSON.parse(data)

    console.log(result);

    for ( var i=0; i<result.length;i++){
        console.log(result[i].flags.svg);
    
    }

}

//-------------------------------------------------------------------------------------------

// Day-3-Task-3

//! use rest contries API URL and display all the country name, region,subregionand population in console

//! XMLHTTPRequest

//! step:1 create XHR Object

var request1= new XMLHttpRequest();

//! step2: opening a connection to server

request1.open ("GET","https://restcountries.com/v3.1/all", true )


//! step:3 intializing the bridge to server / sending request

request1.send();

//! step4: server response

request1.onload=function(){

    var data1 = request1.response;
   // console.log(data1);

    var result1=JSON.parse(data1)

    //console.log(result1);

    for ( var i=0; i<result1.length;i++){
       console.log("countryname:"+" "+result1[i].capital,"region:"+" "+result1[i].region,"subregion:"+" "+result1[i].subregion,"Population:"+" "+result1[i].population);
    
    }

}




