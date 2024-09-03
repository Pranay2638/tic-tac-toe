//const BASE_URL = "https://woxy-sensei.github.io/currency-api";
//const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
//const BASE_URL = "https://open.er-api.com/v6/latest/USD";
//const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
//const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_Dr16KvediGlJBL2p5yPLqatHQYFWLpDTDauuDbvv"
const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/"
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
for(let select of dropdowns){
    for(currCode in countryList){
       let newOption = document.createElement("option");
       newOption.innerText= currCode;
       newOption.value= currCode;
       select.append(newOption);
    }
      select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
      });
}

const updateFlag =(element)=>{
    console.log(element);
     let currCode = element.value;
     let countryCode = countryList[currCode];
     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = newSrc; 
};
 
    btn.addEventListener("click" , async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal=="" || amtVal<1 ){
          amtVal = 1;
          amount.value = "1";
    }
    let URL = `${BASE_URL}/${fromCurr.value}_${toCurr.value}.json`;
    const response = await fetch(URL); 
    let data = await response.json();
    let toRate  = data.rate;
    console.log(toRate);
    console.log(data);
    let exchange = 1/data.rate;
    //console.log(data(toCurr.value)); 
    let final = amtVal * exchange ; 
    /*let fromRate = data.fromCurr.value.rate;
    console.log(fromRate);
    let toRate = data.rate[toCurr.value];
    let conversionRate = toRate/fromRate;
    let final = amtVal * conversionRate ; */
    msg.innerText = `${amtVal} ${fromCurr.value}  = ${final} ${toCurr.value}`;
    
} );





