function countWords() {
    const rowText = document.getElementById("text").value;
    const wordsList = rowText.replaceAll(/[.,!?]/g, "").split(/\s/).map(w => w.toLowerCase());

    const res = {};
    wordsList.forEach(word => res[word] ? res[word]++ : res[word] = 1)

    return res;
}

function handleResultButtonClick(e) {
    e.preventDefault();

    const resultArea = document.getElementById("result");
    resultArea.innerHTML = ''

    // ф-ция sort перебирает соседние элементы и ожидает на выходе число:
    // Положительное число -> первый элемент сдвигается вправо
    // Отрицательное число или 0 -> положение не меняется
    // a и b будут равны чему-то типа ["олень", 3] ["козел", 5]
    // При таком раскладе олень должен идти раньше, чем козел, но 3 - 5 = -2, левый элемент не сдвинется,
    // значит надо домножить на -1
    const res = Object.entries(countWords()).sort((a, b) => (a[1] - b[1]) * -1).slice(0, 3);
    for (let el in res) {
        const node = document.createElement('p');
        node.innerHTML = `Слово "<b>${res[el][0]}</b>" встречается <b>${res[el][1]}</b> раз/раза.`;

        resultArea.appendChild(node);
    }
}

const calc_button = document.getElementById('calc_button');
if (calc_button) {
    calc_button.addEventListener('click', handleResultButtonClick);
}

// предзаполнение для теста
document.getElementById("text").value = 'Привет как дела?\n' +
    'Я пишу практику. Все хорошо. У тебя как дела?'
