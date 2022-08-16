document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawString = withdrawInput.value;
    const newWithdraw = parseFloat(newWithdrawString);

    const withdrawAmount = document.getElementById('withdraw');
    const withdrawString = withdraw.innerText;
    const withdrawTotal = parseFloat(withdrawString);

    withdrawAmount.innerText = newWithdraw + withdrawTotal;

    const totalBalance = document.getElementById('balance');
    const totalBalanceString = totalBalance.innerText;
    const totalBalancenumber = parseFloat(totalBalanceString);

    const curentTotalBalance = totalBalancenumber - newWithdraw;
    totalBalance.innerText = curentTotalBalance;

    withdrawInput.value = '';

})