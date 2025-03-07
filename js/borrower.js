document.getElementById("current-year").textContent = new Date().getFullYear();

function validateNumberInput(input) {
    // Remove any non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
}

function calculateLoan() 
{
    let principal = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let months = parseInt(document.getElementById("loanTerm").value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(months) || principal <= 0 || months <= 0 || interestRate < 0) {
        document.getElementById("monthlyPayment").innerText = "Invalid input. Please enter valid values.";
        return;
    }

    let monthlyInterestRate = interestRate / 100 / 12;
    let monthlyPayment;

    if (interestRate === 0) 
    {
        monthlyPayment = principal / months;
    } 
    else 
    {
        monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    }

    document.getElementById("monthlyPayment").innerText = `Ksh ${monthlyPayment.toFixed(2)}`;
}

function clearFields() {
    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
    document.getElementById("monthlyPayment").innerText = "Ksh 0";
}
