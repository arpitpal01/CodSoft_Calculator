document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".number, .operator, #btnDecimal, #btnEquals, #btnClear, #btnBackspace");

    let currentExpression = "";

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;

            if (value === "C") {
                currentExpression = "";
            } else if (value === "=") {
                try {
                    const result = eval(currentExpression);
                    currentExpression = result.toString();
                } catch (error) {
                    currentExpression = "Error";
                }
            } else if (value === "⌫") {
                currentExpression = currentExpression.slice(0, -1);
            } else {
                currentExpression += value;
            }

            display.textContent = currentExpression;
        });
    });
});
