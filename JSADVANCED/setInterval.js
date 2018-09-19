let current = 0;
let timer = setInterval(() => {
    if (current < 5) {
        current++;
        alert("текст выводится 5 раз каждые 2 секунды");
    } else {
        clearInverval(timer);
    }
}, 2000);

/////////////////////////////////

let startTimer = time => {
    let timer = setTimeout(() => {
        if (time < 10) {
            time += 2;
            startTimer(time);
            alert("текст выводится каждые 1/3/5/7/9 секунд");
        }
    }, time * 1000);
};
startTimer(1);
