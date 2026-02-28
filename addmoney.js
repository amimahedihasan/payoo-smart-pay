document.getElementById('add-money-btn').addEventListener('click',function(){
   // 1- Get Bank Amount
   const bankAccount = getValueFromInput('add-money-bank')
   console.log(bankAccount)
   if(bankAccount == 'Select A Bank'){
      alert('Please select a bank')
      return;
   }
   
   // 2- Get Bank Account Number
   const acc = getValueFromInput('add-money-number')
   if(acc.length != 11){
      alert('Invalid Account Number')
      return
   }

  // get amount
  const amount =getValueFromInput('add-money-amount')
  const newBalance = getBalance() + Number(amount)
  console.log(newBalance)

  //pin validation
  const pin = getValueFromInput('add-money-pin')
  if(pin == '1234'){
   alert(`Add Money Succesfulley form 
      ${bankAccount} 
      at ${new Date()}`)
   //add money
   setBalance(newBalance);
   
   // 1. history  container ka neya asbo
   const history = document.getElementById('history-container')
   //2 new div create korbo
   const newHistory = document.createElement('div')
   // new div a innerHtml add krobo
   newHistory.innerHTML =
   `<div class="history-card p-5 bg-base-100 ">
    Add Money Succesfulley form 
      ${bankAccount} , 
      Account Number ${acc}
      at ${new Date()}
                
   </div>
   `
   //4 history container a newDiv append korbo
   history.append(newHistory)

  }
  else{
   alert('Invalid Pin')
  }



})