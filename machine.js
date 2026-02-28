
//machine id --- > input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value
    console.log(id,value)
    return value;
}

//machine --> balalnce
function getBalance(){
   const balanceElement =document.getElementById('balance')
   const balance = balanceElement.innerText
   console.log('currenet balance ',Number(balance)
)
   return Number(balance)

}

//machine --> Set Balance
function setBalance(value){
    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = value
    // return value
}

//machine id -->hide all > show id
function showOnly(id){
    const addMoney = document.getElementById('add-money')
    const cashout = document.getElementById('Cash Out')
    
    console.log(`add money- ${addMoney} , Cash Out -${cashout}`)
    
    //hide all
    addMoney.classList.add('hidden')
    cashout.classList.add('hidden')

    //show id wala element
    const seleced = document.getElementById(id)
    seleced.classList.remove('hidden')

}

