function getInputValue(inputId){
    // debugger;
    const inputField      = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue     = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    // debugger;
    const totalElement     = document.getElementById(totalFieldId);
    const totalText        = totalElement.innerText;
    const previousTotal    = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal          = document.getElementById('balance-total');
    const balanceTotalText      = balanceTotal.innerText;
    const previounsBalanceTotal = parseFloat(balanceTotalText);
    return previounsBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal          = document.getElementById('balance-total');
    const previounsBalanceTotal = getCurrentBalance();

    if(isAdd == true){
        balanceTotal.innerText  = previounsBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText  = previounsBalanceTotal - amount;
    }
}
document.getElementById('deposit-button').addEventListener('click', function(){

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})
// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You can not withdraw more than what you have in your account');
    }
});