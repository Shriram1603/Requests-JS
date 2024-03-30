const form=document.querySelector("#Searchform")

form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log("submitted !!");
    const search = form.elements.query.value;
    searching(search);
})

const searching = async(s) =>{
    try{

        const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${s}`);
        console.log(result.data);
        const shows=result.data;
        for(let sh of shows){

            const image = sh.show.image.medium;
            const img=document.createElement("img");
            img.src=image;
            document.body.append(img);
        }
    }
    catch(e){
        console.log("Not Found !!")
    }

}

