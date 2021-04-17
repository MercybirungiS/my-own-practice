/*let  shirt={
    color:"blue",
    material:"shiffon",
    get description(){                                // accesses the property of an object
        return `${this.color} ${this.material}`
    },
    set description(value){                               //changes the property of an object
        [this.color,this.material]=value.split(" ");
  }
};
console.log(shirt.description="Purple Cotton");
let kiosk={
    fruit1:"banana",
    fruit2:"oranges",
    fruit3:"apple",

    set newFruits(mango){
    [this.fruit1]=mango.split(" ");
    
    },
    get newFruits(){
        return `${this.fruit1} ${this.fruit2} ${this.fruit3}`
    }
    
};
//console.log(kiosk.newFruits="mango");
console.log(kiosk.newFruits ());*/
const kiosk={
    Fruit:"mango",
    Fruit2:"orange",
    Fruit3:"apple",
    get newFruit(){
        return  `${this.Fruit}, ${this.Fruit2} , ${this.Fruit3}` ;
    },
    set changeFruit(value){
        this.Fruit=value.split(" ");

    }

    };
    console.log(kiosk.newFruit);
    kiosk.changeFruit="banana pineapple watermelon";
    console.log(kiosk.Fruit)
      
    


