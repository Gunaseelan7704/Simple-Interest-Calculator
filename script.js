function calculate(){
    const totalamnt = document.getElementById("total-amnt");
    const principalAmnt = document.getElementById("principal");
    const rateInp = document.getElementById("rate");
    const yearsInp = document.getElementById("years"); 
    
    let principal = Number(principalAmnt.value);
    let rate = Number(rateInp.value / 100) ;
    let years = Number(yearsInp.value);

    const interest = (principal * 12*years * rate) / 100 * 100;
    const result = principal + interest;

    totalamnt.textContent = result.toLocaleString(undefined,{style : "currency", currency: "INR"});
}