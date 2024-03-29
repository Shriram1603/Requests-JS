
const cleaner = async()=>{
    try{
    const data=await fetch("https://swapi.dev/api/people/1");
    const actual_data= await data.json();
    console.log("data =",actual_data);
    //secomd request

    const data1=await fetch("https://swapi.dev/api/people/2");
    const actual_data1= await data1.json();
    console.log("data1 =",actual_data1);
    }catch(e){
        console.log("Error")
    }


};

cleaner();