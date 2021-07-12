export default class Doggo{
    constructor(
        name = '',
        color = '',
        bork = true,
        tail = '',
        legs = ''
    ){
        this.name = name; 
        this.color = color;
        this.bork = bork;
        this.tail = tail;
        this.legs = legs
    }
    eat(food){
        console.log(`bork bork at all the ${food}ies.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}! ${noise} ${noise} ${noise}! ${noise}${noise}${noise}${noise}${noise}${noise}${noise}!`)
    }
}