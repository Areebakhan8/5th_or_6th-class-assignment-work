import { connected } from "process"

console.log("UNRARY OPRETORS")//unrary opretors

let a=5
let b=8

console.log("a=5")
console.log("b=8")
console.log("POST INCREMENT")
//post increment a++  '1' add krta h jab a ki value k bad plus k sing ate h tw tw us me phele a ki jo value hoti h wo print hoti hai or phr 1 increment hota h 
console.log("value of `a` apply post increment")
 console.log(a++)//yaha per a++ likha hai pr yaha pr increment nhi hoga q k ye post increment hai yaha pr phele a ki value print hogi phr action perform kre ga 
console.log(a)//yaha pr value increment ho k print hoga 1 add ho jaega


console.log("PRE INCREMENT")
//pre increment ++a "1" add krta h jb a ki value k phele plus a sing ata h tw us me phele hi 1 increment ho jata h

console.log("value of `b` apply pre increment")
console.log(++b)//yaha pr phele hi 1 increment  hojae ga

console.log("EXAMPLE")
console.log("a++ + a + b++ + b + ++a + ++b")
console.log("5  + 6 + 8   + 9 +   6 +   9" )
console.log(a++ + a + b++ + b + ++a + ++b)




