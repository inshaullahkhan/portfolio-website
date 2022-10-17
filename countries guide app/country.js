
let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-search");

searchBtn.addEventListener("click" ,()=>{

  let countryName = countryInput.value;
    // let countryName= countryInput.value;

    
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    
    fetch(finalUrl) .then((response )=> response.json()).then((data)=>{
    
    console.log(data[0]);
    // console.log(data[0].capital[0]);
    // console.log(data[0].provinces[0])
    // console.log(data[0].flags.svg);
    // console.log(data[0].name.official)
    // console.log(data[0].area);
    // console.log(data[0].continents[0]);
    // console.log(Object.keys(data[0].currencies)[0]);
    // console.log(data[0].population);
    // console.log(Object.keys(data[0].currencies)[0]); 
    // console.log(Object.values(data[0].languages).toString());
    






    result.innerHTML =`<img src = "${data[0].flags.svg}" class = "flags">
    
     <h2> ${data[0].name.official} <h2>

     <div class =" data-wrapper ">

     <h5>  Capital :    <span class="font-size: 16px"> ${data[0].capital[0]} <span>
     <h5>
    
        


       </div>
       <div class =" data-wrapper ">

     <h5>  Continents : ${data[0].continents[0]} 
     <h5>
     </div>

     <div class =" data-wrapper ">

     <h5>  Area : ${data[0].area} 
     <h5>
     </div>


       <div class =" data-wrapper ">

     <h5>  population: ${data[0].population}
     <h5>
    
        


       </div>


       <div class =" data-wrapper ">

       <h5> Currency : ${Object.keys(data[0].currencies)[0]} 
       <h5>
       </div>
  
         <div class =" data-wrapper ">
  
       <h5>  Languages: ${Object.values(data[0].languages).toString()}
       <h5>
      
          
  
  
         </div>

        
  
         <div class =" data-wrapper ">
  
       <h5>  Borders: ${Object.values(data[0].borders).toString()}
       <h5>
      </div>
    `;

  })

  .catch(()=>{

    if(countryName.length==0){

      result.innerHTML =` <h4> The input field cannot be empty <h4/>`

    }
    else{

      result.innerHTML =`<h4> Please enter valid country name. <h4/>`

    }

  })


});