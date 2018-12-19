
    function ucFirst() {
        let str = prompt('Введите слово в нижнем регистре: ', 'вася');
        let firstLetter = str.charAt(0);
        let upperChar = firstLetter.toUpperCase();
        return upperChar;
    }

    alert(ucFirst());
