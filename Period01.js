/**
 * Created by Kristian Nielsen on 05-09-2016.
 */

var line = '---------------------------------'
var names = ['Bo', 'Jan', 'Mark', 'Frank', 'Mikkel', 'Mathias', 'Kristian']

// Function for printing out arrays:

var printArr = function (array) {
    array.forEach(function (element) {
        console.log(element)
    })
}

// HOISTING

console.log(line)
console.log('\tHoisting:\n')

console.log('hoisted function:')
hoistMe()

console.log('\nhoisted var:')
console.log(hoistMeVar)


// FILTER
console.log(line)
console.log('\tFilter: (set to keep names that are <= 3 in length)')

var namesThreeOrLess = names.filter(function (element, index, array) {
    return (element.length <= 3)
})


printArr(namesThreeOrLess)

// MAP
console.log(line)
console.log('\tMap: (set to uppercase names)')

var namesUpperCase = names.map(function (currentValue, index, array) {
    return currentValue.toUpperCase()
})

printArr(namesUpperCase)


// CUSTOM FILTER
console.log(line)
console.log('\tCustom Filter: (set to keep names that are <= 4 in length)')


var myFilter = function (array, callback) {
    var returnedArray = []

    array.forEach(function (element) {
        if (callback(element)) returnedArray.push(element)
    })

    return returnedArray

}

var customFilteredArray = myFilter(names, function (element) {
    return (element.length <= 4)
})

printArr(customFilteredArray)


//CUSTOM MAP
console.log(line)
console.log('\tCustom Map: (set to uppercase names)')

var myMap = function (array, callback) {
    var returnedArray = []

    array.forEach(function (element) {
        returnedArray.push(callback(element))
    })

    return returnedArray
}

var customMappedArray = myMap(names, function (element) {
    return element.toUpperCase()
})

printArr(customMappedArray)

//PROTOTYPING FILTER
console.log(line)
console.log('\tCustom Prototype Filter (set to return names with 5 as length)')

Array.prototype.myFilter = function (callback) {
    var returnedArray = []

    this.forEach(function (element) {
        if (callback(element)) returnedArray.push(element)
    })

    return returnedArray
}

var prototypeFilteredArray = names.myFilter(function (element) {
    return (element.length == 5)
})

printArr(prototypeFilteredArray)


// PROTOTYPING MAP
console.log(line)
console.log('\tCustom Prototype Map (set to return names lowercased)')

Array.prototype.myMap = function (callback) {
    var returnedArray = []

    this.forEach(function (element) {
        returnedArray.push(callback(element))
    })

    return returnedArray
}

var prototypeMappedArray = names.myMap(function (element) {
    return element.toLowerCase()
})

printArr(prototypeMappedArray)

//handleNumArrays
console.log(line)
console.log('\thandleNumArrays:')

var arrayA = [1, 6, 13, 87]
var arrayB = [6, 9, 23, 12]

var handleNumArrays = function (arrayA, arrayB, callback) {
    var newArray = []
    for (var i = 0; i < arrayA.length && i < arrayB.length; i++) {
        newArray[i] = (arrayA[i] + arrayB[i])
    }
    callback(newArray)
}

console.log('join:')
handleNumArrays(arrayA, arrayB, function (array) {
    console.log(array.join(","))
})


console.log('\nsum:')
handleNumArrays(arrayA, arrayB, function (array) {
    var sum = 0
    array.forEach(function (element) {
        sum += Number(element)
    })
    console.log(sum)
})


console.log('\n*10 and comma seperation:')
handleNumArrays(arrayA, arrayB, function (array) {
    array.forEach(function (element, index, array) {
        array[index] = Number(element * 10)
    })
    console.log(array.join(","))
})

// HOISTING

function hoistMe() {
    console.log('a (hoisted) message from the bottom of the code')
}


var hoistMeVar = 'another hoisted message'

//forskel på this i java og js:

//THIS I JS
// 'this' i js refererer til det object der 'ejer' den kaldte function eller det object
// functionen er en metode af. FX hvis man har et object der har en metode:
// var myObject = {}
// object.printStuff = function(){
//     console.log('stuff')
// }
// så kan man bruge 'this' til at referere det object der kaldte metoden (myObject)

//THIS I JAVA
//'this' i java refererer til den instans en metode bliver kaldt i (FX i en get metode,
// hvor fx this.name bruges til at referere name-variablen i instansen (og ikke den
// variabel get-metoden fik som input)

//Eksempler med bind():

console.log(line)
console.log('\tthis og bind:')

function getMontlhlyFee(fee) {
    var remaining = this.total - fee;
    this.total = remaining;
    return this.name + ' remaining balance:' + remaining
}

// Uden Bind() / this

function getMonthlyFeeNoBind(person, fee) {
    var remaining = person.total - fee
    person.total = remaining
    return person.name + ' remaining balance:' + remaining
}

var person = {name: 'George', total: 1000};

var getRachelFee = getMontlhlyFee.bind(person, 100);

console.log(getRachelFee())
console.log(getRachelFee())

console.log(getMonthlyFeeNoBind(person, 100))
console.log(getMonthlyFeeNoBind(person, 150))

// IIFE (Immediately Invoked Function Expressions)
console.log(line)
console.log('Immediately Invoked Function Expressions')
// Kan bruges til at lave et afgrænset 'scope', hvis variabler og functioner, resten af
// sciptet ikke har adgang til


var allNames = 'err';

(function (names) {
    var allNames = names.join('...')
    console.log(allNames)
})(names)

// printer 'err' selvom vi gav allNames en ny værdi i vores funktion.
console.log(allNames)

// OBJECTS
console.log(line)
console.log('Objects: ')

var myObject = {name: 'Mike', age: 25, hobby: 'Console Pleb', email: 'mike@gmail.com'}

Object.prototype.printObject = function () {
    for (var index in this) {
        if (this.hasOwnProperty(index)) console.log(this[index])
    }
}

console.log('\n\tprinting myObject:')

myObject.printObject()

delete myObject.name

console.log('\n\tprinting myObject with name deleted:')

myObject.printObject()


person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.printDetails = function () {
        console.log(this.firstName + " " + this.lastName + ", age: " + this.age)
    }
}

console.log('\n\tPerson from constructor:')

var p1 = new person('Bob', 'Ryan', 50)
p1.printDetails()

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}

console.log('\n\tprinting p1')

console.log(listAllProperties(p1))

delete p1.firstName

console.log('\n\tprinting p1 with firstName deleted')

console.log(listAllProperties(p1))

var privatePerson = (function () {
    var age = 0
    var name = ''

    return {
        setAge: function (ageIn) {
            age = ageIn
        },
        setName: function (nameIn) {
            name = nameIn
        },
        getInfo: function(){
            console.log(name + ', ' + age)
        }
    }
})()

privatePerson.setName('Rolf')
privatePerson.setAge(26)
privatePerson.getInfo()

// skulle meget gerne printe undefined
console.log(privatePerson.age)


