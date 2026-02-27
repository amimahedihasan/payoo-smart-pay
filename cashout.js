document.getElementById('cashout-btn').addEventListener('click',function(){
    // 1 get the agent number & validated

        //  Get the Agent Number
    const cashoutNumberInput = document.getElementById('agent-number')
    const cashoutNumber = cashoutNumberInput.value
    console.log(cashoutNumber)

    if(cashoutNumber.length != 11){
        alert('Invalid Agent Number')
        return;
    }

    //  Get the Amount
    const cashoutAmountInput = document.getElementById('cashout-amount')
    const cashoutAmount = cashoutAmountInput.value
   
    
    //  Get Current Balance
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText
  
    
    // Calculate Balance
    const newBalance = Number(balance) - Number(cashoutAmount)
    
    if(newBalance <0){
        alert('Invalid Amount')
        return;
    }
   

      //5 get the pin and verify
      const cashoutPinInput = document.getElementById('cashout-pin')
      const cashoutPin = cashoutPinInput.value
        // / 5-1 true :: shoe an alert > set Balance
      if(cashoutPin === '1234'){
        alert("Cashout Successfully")
        // console.log('New balace:' ,newBalance)
        balanceElement.innerText = newBalance;

      }
      else{
        alert('Invalid Pin')
        return;
      }
      



    // 1 get the agent number
    // 1-1 take value from input field
    // 1-2 validate agent number length (must be 11 digit)
    // 1-3 if invalid show error and stop function (return)


    // 2 get the amount
    // 2-1 take value from amount input
    // 2-2 convert string to number using Number() or parseFloat()
    // 2-3 validate amount (must be positive number)


    // 3 get the current balance
    // 3-1 get balance text using innerText
    // 3-2 convert balance string to number
    // 3-3 validate balance value


    // 4 calculate new balance
    // 4-1 subtract amount from current balance
    // 4-2 check if new balance is less than 0
    // 4-3 if negative show error and stop function


    // 5 get the pin and verify
    // 5-1 take pin value from input
    // 5-2 check if pin is correct (compare with original pin)


    // 6 if pin is correct
    // 6-1 show success alert
    // 6-2 update balance in UI (set innerText with new balance)


    // 7 if pin is wrong
    // 7-1 show error message
    // 7-2 stop function using return

})

