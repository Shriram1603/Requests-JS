// "https://swapi.dev/api/people/1"

const req= new XMLHttpRequest();

req.onload= function(){
    console.log("IT Loaded !!");
    console.log(this.responseText);
    const data=JSON.parse(this.responseText);
    console.log(data,data.skin_color,data.birth_year)
}

req.onerror = function(){
    console.log("Error");
    console,log(this);
}


req.open("GET","https://swapi.dev/api/people/1");
req.send();