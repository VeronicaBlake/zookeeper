export default class Allicorn{ 
    constructor(
        //this part is pretty much just to declare the data type. You don't really 
        //need this, but it's good practice for C#. 
        name ='',
        color = '',
        maneColor = '',
        hornNumber = 0,
        magical = true,
    ){
        this.name = name;
        this.color = color;
        this.maneColor = maneColor; 
        this.hornNumber = hornNumber;
        this.magical = magical;
    }
    eat(food){
        console.log(`Chomp chomp all the ${food}s.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}!`)
    }
}