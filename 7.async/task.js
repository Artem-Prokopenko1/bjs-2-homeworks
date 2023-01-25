class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, paramCallback){
        if(!time || !paramCallback){
            throw new Error('Отсутствуют обязательные аргументы');
        }else if(!this.alarmCollection.indexOf(time) < 0){
            console.warn('Уже присутствует звонок на это же время');
        }else{
            this.alarmCollection.push({ time : time, canCall: true, callback: paramCallback});
        }
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
    getCurrentFormattedTime(){
        let newDate = new Date();
        let checkTime = (i) => (i < 10) ? i = "0" + i : i
        return `${checkTime(newDate.getHours())}:${checkTime(newDate.getMinutes())}`;
    }
    start(){
        if(!this.intervalId){
            function runAlarm(){
                this.alarmCollection.forEach(element => {
                    if(element.time === this.getCurrentFormattedTime()){
                        element.canCall = false;
                        element.callback();
                    }
                });
            }
            const bindedRunAlarm = runAlarm.bind(this);
            let timerId = setInterval(bindedRunAlarm, 1000);
            this.intervalId = timerId;
        }

    }
    stop(){
        clearInterval(this.timerId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(element =>{
            element.canCall = true;
        })
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}