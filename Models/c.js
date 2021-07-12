export default class Cat{
    constructor(
        name = '',
        color = '',
        miceCaught = 0,
        demon = Boolean, 
        toeBeans = true,
    ){
        this.name = name;
        this.color = color;
        this.miceCaught = miceCaught;
        this.demon = demon;
        this.toeBeans = toeBeans
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}