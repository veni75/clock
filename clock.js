'use strict';

const clock = document.querySelector('.clock');

const timeToWrite = () => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('hu');
    setTimeout(function () {
        timeToWrite();
    }, 1000);
}
timeToWrite();