//grab btn here
let btnwithdraw = document.getElementById("withdraw-btn")
let btndeposit = document.getElementById("deposit-btn")

//add event withdraw 
function updateBalance(balance , Value, res){
    if(res==false){
        balance = balance - Value
        document.getElementById("balance").innerText = balance
    
        document.getElementById("withdraw").value = ""

    }
    else{
        balance = balance + Value
        document.getElementById("balance").innerText = balance
    
        //clear the input field
        document.getElementById("deposit").value = ""

    }
  
}

function inputToValue(inputId){
    let value = document.getElementById(inputId).value
    //need to parseFloat this value 
    value = parseFloat(value)
    // if (isNaN(value)) {
    //     document.getElementById(inputId).value = ""
    //      alert("please Enter correct amount")
    //      return false
    // }
    // if (value < 0) {
    //     document.getElementById(inputId).value = ""
    //      alert("please enter correct amount")
    //      return false
    // }
    return value

}
function textToValue(textId ){
    // if(result==false){
    //     return alert("enter the correct amount")
    // }
    let grabID = document.getElementById(textId)
    let current = grabID.innerText
    current = parseFloat(current)
    return current 

}

btndeposit.addEventListener("click", function () {
    //input value from the deposit field
    // let depositValue = document.getElementById("deposit").value
    //need to parseFloat this value 
    depositValue = inputToValue("deposit")
   
    //add some breakpoints 
    if (isNaN(depositValue)) {
        document.getElementById("deposit").value = ""
        return alert("please Enter correct amount")
    }
    if (depositValue < 0) {
        document.getElementById("deposit").value = ""
        return alert("please enter correct amount")
    }

    //grab the deposit amount show span tag
    // let currentDeposit = document.getElementById("deposit-amount")
    //to get value by innerText 
    // let currentDepositValue = currentDeposit.innerText
    //need to parseFloat this value
    // currentDepositValue = parseFloat(currentDepositValue)
    //new deposit value = prev deposit value + current deposit value 
    currentDepositValue = textToValue("deposit-amount")
    // if(currentDepositValue==undefined){
    //     return 
    // }
   
  let   newDepositValue = depositValue + currentDepositValue
    debugger ;
    //set the value by innerText

    document.getElementById("deposit-amount").innerText = newDepositValue
    //update the balance amount 
    let balance = document.getElementById("balance").innerText
    balance = parseFloat(balance)
   

    updateBalance(balance ,depositValue,true)

    // balance = balance + depositValue
    // document.getElementById("balance").innerText = balance

    // //clear the input field
    // document.getElementById("deposit").value = ""

})

btnwithdraw.addEventListener("click", function () {
    //input field value as withdraw
    // let withdrawValue = document.getElementById("withdraw").value
    withdrawValue = inputToValue("withdraw")
    //need to get the current balance
    let balance = document.getElementById("balance").innerText
    balance = parseFloat(balance)
    if (isNaN(withdrawValue)) {
        document.getElementById("withdraw").value = ""
        return alert("please Enter correct amount")
    }
    if (withdrawValue < 0) {
        document.getElementById("withdraw").value = ""
        return alert("please enter correct amount")
    }
    if(withdrawValue>balance){
        document.getElementById("withdraw").value = ""
        return alert("you can not withdraw this amount")

    }

    //span field 
    // let setwithdraw = document.getElementById("withdraw-amount")
    // let currentWithdraw = setwithdraw.innerText
    // currentWithdraw = parseFloat(currentWithdraw)
   
    currentWithdraw = textToValue("withdraw-amount" )
    
    // if(currentWithdraw==undefined){
    //     return 
    // }
   

    currentWithdraw = currentWithdraw + withdrawValue
    document.getElementById("withdraw-amount").innerText = currentWithdraw

    updateBalance(balance , withdrawValue,  false)
    
    // balance = balance - withdrawValue
    // document.getElementById("balance").innerText = balance

    // document.getElementById("withdraw").value = ""
})



