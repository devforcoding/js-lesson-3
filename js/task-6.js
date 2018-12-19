    function showNumber() {
        let number = prompt("Введите число больше 1: ", '');

        step:
            for (let i = 2; i < number; i++) {

                for (let j = 2; j < i; j++) {
                    if (i % j == 0) continue step;
                }

                alert(i);
            }
    }
    showNumber();
