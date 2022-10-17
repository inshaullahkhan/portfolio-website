

let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-search");

searchBtn.addEventListener("click" ,()=>{
    const App_key= `e423fbc9def295274a209b52cc94d24d`;

  let countryName = countryInput.value;
    // let countryName= countryInput.value;

    
    let finalUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${App_key}&units=metric`;
    
    fetch(finalUrl) .then((response )=> response.json()).then((data)=>{
    
    console.log(data);
    console.log(data.main.temp)
    console.log(data.main.feels_like)

    // console.log(data[0].provinces[0])
    // console.log(data[0].flags.svg);
    // console.log(data[0].name.official)
    // console.log(data[0].area);
    // console.log(data[0].continents[0]);
    // console.log(Object.keys(data[0].currencies)[0]);
    // console.log(data[0].population);
    // console.log(Object.keys(data[0].currencies)[0]); 
    // console.log(Object.values(data[0].languages).toString());
    result.innerHTML =
    
   ` <h1>  ${data.name} <h1>
    <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <h2> Termperature ${data.main.temp} <h2>
     <h2> Feels_Like ${data.main.feels_like} <h2>
     
     
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
})

// function  sendEmail(){
// Email.send({
//   Host : "smtp.gmail.com",
//   Username : "insha kundi",
//   Password : "password",
//   To : 'inshaullah733@gmail.com',
//   From : document.getElementById("email").value,
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
// message => alert(message)
// )};