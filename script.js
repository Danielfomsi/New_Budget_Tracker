// Get elements from the DOM
const inflowDescription = document.getElementById('inflowDescription');
const receivedAmount = document.getElementById('receivedAmount');
const addInflowButton = document.getElementById('addReceived'); // Button for adding inflow

const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const addExpenseButton = document.getElementById('addExpense'); // Button for adding expense

const totalReceivedDisplay = document.getElementById('totalReceived');
const totalExpensesDisplay = document.getElementById('totalExpenses');
const totalBalanceDisplay = document.getElementById('totalBalance');

const inflowList = document.getElementById('inflowList');
const expenseList = document.getElementById('expenseList');

const resetButton = document.getElementById('resetButton');

// Track totals
let totalReceived = 0;
let totalExpenses = 0;

// Add inflow
addInflowButton.addEventListener('click', () => {
    const inflowDesc = inflowDescription.value;
    const inflowAmt = parseFloat(receivedAmount.value);
    
    if (inflowDesc && inflowAmt) {
        // Update total received
        totalReceived += inflowAmt;
        totalReceivedDisplay.textContent = totalReceived;
        
        // Add inflow to list
        const inflowItem = document.createElement('li');
        inflowItem.textContent = `${inflowDesc}: #${inflowAmt}`;
        inflowList.appendChild(inflowItem);
        
        // Update balance
        updateBalance();
    }
});

// Add expense
addExpenseButton.addEventListener('click', () => {
    const expenseDesc = expenseName.value;
    const expenseAmt = parseFloat(expenseAmount.value);
    
    if (expenseDesc && expenseAmt) {
        // Update total expenses
        totalExpenses += expenseAmt;
        totalExpensesDisplay.textContent = totalExpenses;
        
        // Add expense to list
        const expenseItem = document.createElement('li');
        expenseItem.textContent = `${expenseDesc}: #${expenseAmt}`;
        expenseList.appendChild(expenseItem);
        
        // Update balance
        updateBalance();
    }
});

// Update balance
function updateBalance() {
    const balance = totalReceived - totalExpenses;
    totalBalanceDisplay.textContent = balance;
}

// Reset everything
resetButton.addEventListener('click', () => {
    // Reset totals
    totalReceived = 0;
    totalExpenses = 0;
    totalReceivedDisplay.textContent = totalReceived;
    totalExpensesDisplay.textContent = totalExpenses;
    totalBalanceDisplay.textContent = 0;
    
    // Clear lists
    inflowList.innerHTML = '';
    expenseList.innerHTML = '';
    
    // Clear input fields
    inflowDescription.value = '';
    receivedAmount.value = '';
    expenseName.value = '';
    expenseAmount.value = '';
});
function resetInputs() {
    // Get all input fields except the balance field
    let inputs = document.querySelectorAll('input:not([id="balance"])');
    
    // Loop through and clear their values
    inputs.forEach(input => input.value = '');
  }