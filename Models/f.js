export default class Flamingo{
    constructor(){
        this.name = 'name',
        this.color = 'pink',
        this.shrimpsEaten = 0,
        this.jPopSong = true
    }
    eat(food){
        console.log(`Gobble gobble all the ${food}ies.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}