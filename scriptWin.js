function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create money elements and animate them falling
function createMoney() {
    const container = document.body;
    const moneyCount = 10; // Number of money elements to create

    for (let i = 0; i < moneyCount; i++) {
        const money = document.createElement('div');
        money.classList.add('money');
        money.style.left = getRandom(0, window.innerWidth - 20) + 'px'; // Random horizontal position
        money.style.animationDuration = getRandom(3, 8) + 's'; // Random animation duration
        container.appendChild(money);
    }
}

// Call the function to create money elements when the window loads
window.onload = createMoney;