document.getElementById('transfer-btn').addEventListener('click', function() {
    const number = getValueFromInput('transfer-number');
    const amount = getValueFromInput('transfer-amount');
    const pin = getValueFromInput('transfer-pin');
    const balance = getBalance('balance');

    if (number.length !== 11) {
        alert('Invalid Account Number');
        return;
    }
    if (amount <= 0 || isNaN(amount)) {
        alert('Invalid Amount');
        return;
    }
    if (amount > balance) {
        alert('Insufficient Balance');
        return;
    }

    if (pin === '1234') {
        const newBalance = balance - Number(amount);
        setBalance(newBalance);
        alert('Transfer Successful');

        // History Log
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="history-card p-5 bg-base-100">
                Transfer - ${amount} Taka to ${number} Successful at ${new Date().toLocaleString()}
            </div>
        `;
        history.append(div);
    } else {
        alert('Invalid Pin');
    }
});