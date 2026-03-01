document.getElementById('bonus-btn').addEventListener('click', function() {
    const coupon = getValueFromInput('coupon-code');
    const balance = getBalance('balance');

    if (coupon === 'PAYOO') {
        const bonusAmount = 100; // Fixed bonus amount
        setBalance(balance + bonusAmount);
        alert('Congratulations! You got Taka 100 bonus.');

        // History Log
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="history-card p-5 bg-base-100">Bonus Received: $${bonusAmount} (Coupon: ${coupon}) at ${new Date().toLocaleString()}</div>`;
        history.append(div);
    } else {
        alert('Invalid Coupon Code');
    }
});