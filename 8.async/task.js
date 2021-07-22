class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (timeString, callback, alarmId, once) {
        if(alarmId === undefined) {
            throw new Error("Не передан идентификатор звонка");
        }
        if(this.alarmCollection.findIndex(item => item.alarmId === alarmId) > -1) {
            console.error("Будильник с переданным идентификатором существует");
            return;
        }
        this.alarmCollection.push({"alarmId": alarmId, "time": timeString, "callback": callback, "once": once});
    }

    removeClock (alarmId) {
        const index = this.alarmCollection.findIndex(item => item.alarmId === alarmId);
        this.alarmCollection.splice(index, 1);
    }

    getCurrentFormattedTime () {
        let currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return (hours + ":" + minutes);
    }

    checkClock (alarmId) {
        const index = this.alarmCollection.findIndex(item => item.alarmId === alarmId);
        let alarm = this.alarmCollection[index];
        if(alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback.call();
            if(alarm.once !== undefined && alarm.once) {
                this.restartWithout(alarmId);
            }
        }

    }

    start () {
        if(this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => this.checkClock(item.alarmId))
            }, 1000);
        }
    }

    stop () {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    restartWithout(alarmId) {
        this.stop();
        this.removeClock(alarmId);
        this.start();
    }

    printAlarms() {
        console.log(`Список текущих звонков (${this.alarmCollection.length}):`)
        this.alarmCollection.forEach(item => console.log("id: " + item.alarmId + " time: " + item.time));
    }

    clearAlarms() {
        this.alarmCollection = [];
    }
 }