'use strict';

const clock = document.querySelector('.clock');

const timeToWrite = () => {
    setInterval(function () {        
        clock.textContent = new Date().toLocaleTimeString('hu');
    }, 1000);
}
timeToWrite();