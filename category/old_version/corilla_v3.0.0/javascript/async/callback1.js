'use strict';

// class Counter {
//     constructor(){
//         this.counter=0;
//     }
//     increase(runIf5Times){
//         this.counter++;
//         console.log(this.counter);
//         if(this.counter % 5 ===0){
//             runIf5Times(this.counter);
//         }
//     }
// }

// const coolCounter = new Counter();
// function printSomething(num){
//     console.log(`Yes! number:${num}`);
// }
// function alertNum(num){
//     alert(`Yes! number:${num}`);
// }

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);
// coolCounter.increase(alertNum);

class Counter {
    constructor(runEveryFiveTimes){
        this.counter=0;
        this.callback = runEveryFiveTimes;
    }
    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 ===0){
            this.callback && this.callback(this.counter);
            // if(this.callback){ // callback에 값이 잇을때만 출력한다
            //     this.callback(this.counter);
            }
        }
    }
// }
function printSomething(num){
    console.log(`Yes! number:${num}`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();