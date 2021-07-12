export default class Eagle{
    constructor(){
        this.name = 'name';
        this.color = 'color';
        this.bald = true;
        this.wingspan = 0;
        this.patriotic = Boolean
    }
    eat(food){
        console.log(`Gobble gobble all the ${food}s.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}