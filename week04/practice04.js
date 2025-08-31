// week04

const words = ['apple', 'Mango', "orange", "Banana"]

words.reverse()
console.log(words);  // output : [ 'Banana', 'orange', 'Mango', 'apple' ]

// use forEach()
const startAWord = []
const startAWords = words.forEach( word => {
    if (word.startsWith('a')) {
        startAWord.push(word)
    }
});
console.log(startAWord); // output : [ 'apple' ]


const Person = [
    {
        id: "k1001",
        firstname: "kanthadanast",
        lastname: "rojrachchayanont"
    },
    {
        id: "k1002",
        firstname: "kanthada",
        lastname: "rojrachchaya" 
    },
    {
        id: "k1003",
        firstname: "kant",
        lastname: "rojrach" 
    }
]
const fullname = Person
    .map( Person => Person.firstname.toUpperCase() + " " + Person.lastname.toUpperCase())
console.log(fullname); 

const namename = Person
    .map(p => (  p.firstname + ' ' + p.lastname).toUpperCase())
    .filter(Person => Person.includes('DA'))
console.log(namename);

//use reduce
const carts = [ 
    {productId: 1002, price: 10, amount: 5}, 
    {productId: 2005, price: 100, amount: 2}, 
    {productId: 5001, price: 5, amount: 4}
]
const netprice = carts.reduce( (total, cart) => total + (cart.price * cart.amount ),0 )  * 1.07
console.log(netprice.toFixed(2)); //output : 288.90


const nums = [2, 4, 6]
nums[nums.length] = 8 // output : [ 2, 4, 6, 8 ]
nums.push(10) // output : [ 2, 4, 6, 8, 10 ]
console.log(nums);

// add in the beginning of array
nums.unshift(12) // output : [ 12, 2, 4, 6, 8, 10 ]
console.log(nums);

// remove in the end of array
nums.pop() // output : [ 12, 2, 4, 6, 8 ]
console.log(nums);

// remove in the beginning of array
nums.shift() // output : [ 2, 4, 6, 8 ]
console.log(nums);

// use splice()
const wordss = ['apple', "orange", "Banana"] 
// add 'cherry' after 'orange'
wordss.splice(2, 0, "cherry", "berry")
console.log(wordss); // output : [ 'apple', 'orange', 'cherry', 'berry', 'Banana' ]

// delete 'cherry'
wordss.splice(2, 1) // 2 is ตำแหน่งที่จะลบ and 1 is จำนวนตัวที่จะลบ
console.log(wordss); // output : [ 'apple', 'orange', 'berry', 'Banana' ]

// replace 'berry'
wordss.splice(2, 1, "mango")
console.log(wordss); // output : [ 'apple', 'orange', 'mango', 'Banana' ]
