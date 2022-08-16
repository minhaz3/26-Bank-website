// 1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {

    // 2: get the diposit amount from the deposit infut field 
    const depositinput = document.getElementById('deposit-input');
    const newDepositAmountString = depositinput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // 3: get the current deposit total
    const totalDeposit = document.getElementById('deposit');
    let previousDepositTotalString = totalDeposit.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // 4: add number to set total deposit 
    totalDeposit.innerText = newDepositAmount + previousDepositTotal;

    // 5: get ballance current total
    const totalBalance = document.getElementById('balance');
    const previosBalanceString = totalBalance.innerText;
    const previosBalance = parseFloat(previosBalanceString);

    // 6: calculate current total balance
    const curentTotalBalance = previosBalance + newDepositAmount;
    totalBalance.innerText = curentTotalBalance;

    // 7: clear the deposit field
    depositinput.value = '';
})