export default class Badger{
    constructor(
        name = '',
        color = '',
        stripeColor = '',
        victimsClaimed = 0,
        badgerLord = Boolean,
    ){
        this.name = name;
        this.color = color;
        this.stripeColor = stripeColor;
        this. victimsClaimed = victimsClaimed;
        this.badgerLord = badgerLord
    }
    eat(food){
        console.log(`Munch munch all the ${food}ies.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}

export default Badger;