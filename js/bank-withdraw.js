// 1: add event listener to the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // 2: get the diposit amount from the withdraw infut field 

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawString = withdrawInput.value;
    const newWithdraw = parseFloat(newWithdrawString);
    // 3: get the current withdraw total

    const withdrawAmount = document.getElementById('withdraw');
    const withdrawString = withdraw.innerText;
    const withdrawTotal = parseFloat(withdrawString);



    // 5: get ballance current total
    const totalBalance = document.getElementById('balance');
    const totalBalanceString = totalBalance.innerText;
    const totalBalancenumber = parseFloat(totalBalanceString);

    // 7: clear the withdraw field
    withdrawInput.value = '';

    if (newWithdraw > totalBalancenumber) {
        alert('Ho tor abba bank eda bahir ho sala')
        return;
    }

    // 4: add number to set total withdraw 
    withdrawAmount.innerText = newWithdraw + withdrawTotal;

    // 6: calculate current total balance
    const curentTotalBalance = totalBalancenumber - newWithdraw;
    totalBalance.innerText = curentTotalBalance;



})