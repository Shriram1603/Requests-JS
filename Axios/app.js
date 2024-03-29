// axios.get("https://swapi.dev/api/people/1")
// .then((res)=>{
//     console.log("Resolved :",res);
// })

const getStarWars = async (id) =>{
    try{

        const res= await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    }
    catch(e){
        console.log("erroe !!",e)
    }
};

// getStarWars(6);
// getStarWars(10);
// getStarWars(100);

const button =document.querySelector('button');

const addNewJoke = async () =>{
    
    const joketext = await getDadJoke();
    const newLi=document.createElement('li');
    newLi.append(joketext);
    jokes.append(newLi);
    
}

const jokes=document.querySelector("#jokes")
const getDadJoke = async () =>{
    try{

        const config = {headers :{Accept : "application/json"}}
        const res= await axios.get("https://icanhazdadjoke.com/",config);
        // console.log(res.data.joke);
        return res.data.joke;
    }
    catch(e){
        return"Sorry no jokes available !! :(";
    }
    
}

button.addEventListener('click',addNewJoke);
