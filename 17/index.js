function getPlainNumbers(n) {
    // создаем массива из n элементов, которые по умолчанию true
    const sieve = new Array(n).fill(true)

    // первый шаг алгоритма – число 2
    for (let i = 2; i <= n; i++) {
        // проверяем, что текущее число – простое
        if (sieve[i - 1]) {
            for (let j = i * 2; j <= n; j += i) {
                // отмечаем все последующие произведения i * j, как не простые числа
                sieve[j - 1] = false;
            }
        }
    }
    // заменяем все true на соответствующие номера элементов, после чего отфильтровываем все false-значения
    return sieve.map((isPlain, index) => isPlain && index + 1).filter(d => d);
}

// чтобы увидеть результат, открой консоль разработчика в браузере
console.log(getPlainNumbers(100))
