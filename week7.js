class kioskCalc{
    constructor(item,quantity,price){
        this.item=item
        this.quantity=quantity
        this.price=price
        
    
    }
    getTotalAmount(){
        return `I will buy ${this.quantity} ${this.item} for KES ${this.quantity*this.price}`;
    }
    
}
var kioskCalc2 = new kioskCalc("Mangoes",6,15);
console.log(kioskCalc2.getTotalAmount());