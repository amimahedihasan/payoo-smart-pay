document.getElementById('pay-bill-btn').addEventListener('click', function() {
    const bank = getValueFromInput('bill-bank');
    const acc = getValueFromInput('bill-account');
    const amount = getValueFromInput('bill-amount');
    const pin = getValueFromInput('bill-pin');
    const balance = getBalance('balance');

    if (bank === 'Select back') {
        alert('Please select a biller');
        return;
    }
    if (pin === '1234') {
        if (Number(amount) > balance) {
            alert('Insufficient Balance');
            return;
        }
        setBalance(balance - Number(amount));
        alert('Bill Paid Successfully');

        // History Log
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="history-card p-5 bg-base-100">Pay Bill: Taka:${amount} to ${bank} (${acc}) Successful at ${new Date().toLocaleString()}</div>`;
        history.append(div);
    } else {
        alert('Invalid Pin');
    }
});