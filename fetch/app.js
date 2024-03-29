fetch("https://swapi.dev/api/people/1")
.then((res)=>{
    console.log("Resolved",res);
    res.json().then((data)=>{console.log("Json done !!",data)});
    return(fetch("https://swapi.dev/api/people/2"));
})
.then((data)=>{
    console.log("second request resolved");
    data.json().then((hel)=>{console.log("person 2 =",hel)});
})
.catch((e)=>{
    console.log("erre !!",e);
})

