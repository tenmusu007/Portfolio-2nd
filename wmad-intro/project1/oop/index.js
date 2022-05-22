// let itemBox = [
//     {
//         name: "apple",
//         number: 3,
//         price: 1
//     },
//     {
//         name: "banana",
//         number: 5,
//         price: 3
//     },
//     {
//         name: "lemon",
//         number: 2,
//         price: 2
//     },
// ];
// const tax = 1.05;
// let sum = 0;
// const cashRegister = (...item) => {
//     for (let i of itemBox) {
//         sum += i.price * i.number;
//     }
//     let taxtotal = 0;
//     taxtotal = sum * tax
//     console.log(taxtotal)
// }
// cashRegister()


// let pasta = [
//     {
//         name: carbonara,
//         price: 50,
//         time:2
        
//     },
//     {
//         name: tomato,
//         price: 40,
//         time:2.5
//     },
//     {
//         name: "pepron",
//         price: 2,
//         time: 1.5
//     },
// ];
const tax = 2
// class Source{ constructor(taste) {
//         this.taste = taste
// }
class Pasta{ constructor(price, time, name, country){
        this.price = price
        this.time = time
        this.name = name
        this.country = country
    }

    tellCooktime(){
        console.log(`You will be waiting ${this.time}`)
    }
    tellPrice(tax){
        let sum =0
        this.sum = this.price* tax
        console.log(`This's is your bill's ${this.sum}`)
    }
    tellCountry(){
        console.log(`This is from ${this.country}`)
    }

}
const atsu = new Pasta(100, 5, "atsu", "Japan")
const tomo = new Pasta(200,10, "tomo", "Canada")
const tomonao = new Pasta(350,10,"tomonao","US")
atsu.tellCooktime()
atsu.tellPrice(tax)
atsu.tellCountry()
tomo.tellCooktime()