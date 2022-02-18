function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueText  = inputField.value;
    const value      = parseFloat(valueText);
    inputField.value = '';
    return value;
}
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const vlue = parseFloat(fieldValueInText);
    return vlue;
}
function updateTotal(field, amount){
    const totalTag = document.getElementById(field, amount);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}

function updateBalance(amount, isading){
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if(isading == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    
    balanceTag.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function (){
    const amount  = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amount > 0 && amount <= balance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})