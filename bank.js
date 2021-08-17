//grab btn here
let btnwithdraw = document.getElementById("withdraw-btn")
let btndeposit = document.getElementById("deposit-btn")

//add event withdraw 

btndeposit.addEventListener("click", function () {
    //input value from the deposit field
    let depositValue = document.getElementById("deposit").value
    //need to parseFloat this value 
    depositValue = parseFloat(depositValue)
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
    let currentDeposit = document.getElementById("deposit-amount")
    //to get value by innerText 
    let currentDepositValue = currentDeposit.innerText
    //need to parseFloat this value
    currentDepositValue = parseFloat(currentDepositValue)
    //new deposit value = prev deposit value + current deposit value 

   let  newdepositValue = depositValue + currentDepositValue
    //set the value by innerText

    currentDeposit.innerText = newdepositValue
    //update the balance amount 
    let balance = document.getElementById("balance").innerText
    balance = parseFloat(balance)
    balance = balance + depositValue
    document.getElementById("balance").innerText = balance

          // added tabble
          let tabble = document.getElementById("table")
          let tbody = document.createElement("tbody")
          tbody.innerHTML = `
          <tbody >
              <th class="px-5 py-2">Deposit</th>
              <th class="px-5 py-2">${depositValue}</th>
              <th class="px-5 py-2">${balance}</th>
          </tbody>
          
          `
          tabble.appendChild(tbody)

    //clear the input field
    document.getElementById("deposit").value = ""

 

})

btnwithdraw.addEventListener("click", function () {
    //input field value as withdraw
    let withdrawValue = document.getElementById("withdraw").value
    withdrawValue = parseFloat(withdrawValue)
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
    if (withdrawValue > balance) {
        document.getElementById("withdraw").value = ""
        return alert("you can not withdraw this amount")

    }

    //span field 
    let setwithdraw = document.getElementById("withdraw-amount")
    let currentWithdraw = setwithdraw.innerText
    currentWithdraw = parseFloat(currentWithdraw)

    currentWithdraw = currentWithdraw + withdrawValue
    setwithdraw.innerText = currentWithdraw


    balance = balance - withdrawValue
    document.getElementById("balance").innerText = balance

      // added tabble
      let tabble = document.getElementById("table")
      let tbody = document.createElement("tbody")
      tbody.innerHTML = `
      <tbody >
          <th class="px-5 py-2">withdraw</th>
          <th class="px-5 py-2">${currentWithdraw}</th>
          <th class="px-5 py-2">${balance}</th>
      </tbody>
      
      `
      tabble.appendChild(tbody)

    document.getElementById("withdraw").value = ""

  
})



