// const calculateButton = document.getElementById("donate-btn");
// calculateButton.addEventListener("click",function () {

//     const income = parseFloat(document.getElementById("income").value);
//     const noakhali = parseFloat(document.getElementById("noakhali").value);
//     const feni = parseFloat(document.getElementById("feni").value);
//     const quota = parseFloat(document.getElementById("quota").value);
    
//     console.log({income,noakhali,feni});

    

    
// });




document.getElementById('donate-btn')
.addEventListener('click',function() {
    
    const donateMony= getInputFieldIdValueById('noakhali')
    const zeroBalance =getInputFieldIdValueById('zero-button')
    const taka= getInputFieldIdValueById('taka-noakhali')
    

    if(donateMony >= 0 ){
       const balance = getTextFieldIdValueById('total-money');
       const newBalance = balance - donateMony;

       document.getElementById('total-money').innerText = newBalance;



       const zBal = getTextFieldIdValueById('zero-button');
       const newzBal = donateMony;

       document.getElementById('zero-button').innerText = newzBal;


       const takaNoakhali= document.getElementById('taka-noakhali');
       const takaN=donateMony;
       document.getElementById('taka-noakhali').innerText =takaN;

       




    //    console.log('donate money for noakhali',balance,donateMony )
       

    }
    else{
        alert('failed')
    }



})


// *******feni************



document.getElementById('donate-btn2')
.addEventListener('click',function() {
    
    const donateMony= getInputFieldIdValueById('feni')
    const zeroBalance2 =getInputFieldIdValueById('zero-button2')

    const takaf= getInputFieldIdValueById('taka-feni')
    

    if(donateMony >= 0 ){
       const balance = getTextFieldIdValueById('total-money');
       const newBalance = balance - donateMony;

       document.getElementById('total-money').innerText = newBalance;


       const zBal2 = getTextFieldIdValueById('zero-button2');
       const newzBal2 = donateMony;

       document.getElementById('zero-button2').innerText = newzBal2;


       const takaFeni= document.getElementById('taka-feni');
       const takaFn=donateMony;
       document.getElementById('taka-feni').innerText =takaFn;




    //    console.log('donate money for noakhali',balance,donateMony )
       

    }
    else{
        alert('failed')
    }



})

// ********quota**********

document.getElementById('donate-btn3')
.addEventListener('click',function() {
    
    const donateMony= getInputFieldIdValueById('quota')
    const zeroBalance3 =getInputFieldIdValueById('zero-button3')
    const takaQ= getInputFieldIdValueById('taka-quota')
    

    if(donateMony >= 0 ){
       const balance = getTextFieldIdValueById('total-money');
       const newBalance = balance - donateMony;

       document.getElementById('total-money').innerText = newBalance;

       const zBal3 = getTextFieldIdValueById('zero-button3');
       const newzBal3 = donateMony;

       document.getElementById('zero-button3').innerText = newzBal3;


       const takaquota= document.getElementById('taka-quota');
       const takaQm=donateMony;
       document.getElementById('taka-quota').innerText =takaQm;



    //    console.log('donate money for noakhali',balance,donateMony )
       

    }
    else{
        alert('failed')
    }



})



const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click",function(){

    historyTab.classList.add(
        "bg-lime-400"
    );

    donationTab.classList.remove("bg-lime-400")

    document.getElementById('card-section').classList.add("hidden");
    document.getElementById('his1').classList.remove("hidden");
    document.getElementById('his2').classList.remove("hidden");
    document.getElementById('his3').classList.remove("hidden");

});

donationTab.addEventListener('click',function(){
    donationTab.classList.add("bg-lime-400");

    historyTab.classList.remove("bg-lime-400");
    document.getElementById('card-section').classList.remove("hidden");
    document.getElementById('his1').classList.add("hidden");
    document.getElementById('his2').classList.add("hidden");
    document.getElementById('his3').classList.add("hidden");


});




    
