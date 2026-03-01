document.getElementById('login-btn').addEventListener('click',function(){
 // console.log('Login Button Clicked')

     // 1 get the mobile number
    const numberInput = document.getElementById('input-number')
    const contactNumber = numberInput.value
    console.log(contactNumber);
   
    // 2 get the pin number
    const pinInput = document.getElementById('input-pin')
    const pin = pinInput.value
    // console.log(pinNumber)

    // 3 match the pin
    if(contactNumber == '01313928111' && pin == '1234'){
        // 3-1 ::: true alert >homepage
        alert('Login Sussefully')
        // window.location.replace('/home.html')
        window.location.assign('/home.html')

    }
    else{
        // 3-2::: false ::> alert > return
        alert('Login Failed')
        return;

    }
})