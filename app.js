window.onload = () => {
    const buttons = document.querySelectorAll('button');
    const input = document.getElementById('input');
    const history = document.getElementById('history');
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');

    buttons.forEach(button => {
        button.onclick = () => input.value += button.value;
    });

    clear.onclick = () => {
        history.value = "";
        input.value = "";
    }
    equals.onclick = () => {
        history.value = `${input.value} =`;
        input.value = calculate();
    }

    const calculate = () => {
        try {
            return eval(input.value);
        } catch {
            return "Chill out, mate.";
        }
    }
}