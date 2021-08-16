//grab btn here
let btnwithdraw = document.getElementById("withdraw-btn")
let btndeposit = document.getElementById("deposit-btn")


function updateBalance(balance, Value, res) {
    if (res == false) {
        balance = balance - Value
        document.getElementById("balance").innerText = balance
        //clear the input value
        document.getElementById("withdraw").value = ""

    }
    else {
        balance = balance + Value
        document.getElementById("balance").innerText = balance

        //clear the input field
        document.getElementById("deposit").value = ""

    }

}

function inputToValue(inputId) {
    let value = document.getElementById(inputId).value
    //need to parseFloat this value 
    value = parseFloat(value)

    return value

}
function textToValue(textId) {

    let grabID = document.getElementById(textId)
    let current = grabID.innerText
    current = parseFloat(current)
    return current

}

btndeposit.addEventListener("click", function () {

    depositValue = inputToValue("deposit")

    //case handle 
    if (isNaN(depositValue)) {
        document.getElementById("deposit").value = ""
        return alert("please Enter correct amount")
    }
    if (depositValue < 0) {
        document.getElementById("deposit").value = ""
        return alert("please enter correct amount")
    }
    //now get the innerText value from the span tag
    currentDepositValue = textToValue("deposit-amount")
    //update the new deposit value 
    let newDepositValue = depositValue + currentDepositValue

     document.getElementById("deposit-amount").innerText = newDepositValue

    // let balance = document.getElementById("balance").innerText
    // balance = parseFloat(balance)
   let balance =textToValue("balance")
    //finally update the balance value
    updateBalance(balance, depositValue, true)

})

btnwithdraw.addEventListener("click", function () {

    withdrawValue = inputToValue("withdraw")

    // let balance = document.getElementById("balance").innerText
    // balance = parseFloat(balance)
   let  balance =textToValue("balance")
    if (isNaN(withdrawValue)) {
        document.getElementById("withdraw").value = ""
        return alert("please Enter correct amount")
    }
    if (withdrawValue < 0) {
        document.getElementById("withdraw").value = ""
        return alert("please enter correct amount")
    }
    if (withdrawValue > balance) {
        document.getElementById("withdraw").value = ""
        return alert("you can not withdraw this amount")

    }

    currentWithdraw = textToValue("withdraw-amount")

    currentWithdraw = currentWithdraw + withdrawValue
    document.getElementById("withdraw-amount").innerText = currentWithdraw
    //finally update the balance value 
    updateBalance(balance, withdrawValue, false)

})



