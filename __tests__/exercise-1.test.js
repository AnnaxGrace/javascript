const exerciseOne = require('../exercise-1');

// test("test", () => {
//     expect(true).toBe(true);
// } );

// Add testing code for all the remaining functions you wrote in the exercise-1.js file

describe("tekCamp()", () => {

    test("existence of tekcamp()", () => {
        expect(exerciseOne.tekCamp()).toBe(undefined);        
    });

    test("tekCamp() console.logs with TEK at least once", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        // expect(console.log).toBeCalledTimes(10);
        expect(console.log).toHaveBeenCalledWith("TEK");
    });

    test("tekCamp() last console.log() is camp", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenLastCalledWith("camp");
    })

    test("tekCamp() on 3, console.log() TEK", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(3,"TEK");
    });

    test("tekCamp() on 4 console.logs 4", () => {
        console.log= jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(4,4);
    });

    test("tekCamp() on 1 console.logs 1 ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(1,1);
    });

    test.skip("tekCamp() on 2 console.logs 2", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(2,"2");
    });

    test("tekCamp() on 15 console.logs 'TEKcamp' ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(15,"TEKcamp");
    })

});


describe("canVote()", () => {

    test("canVote() returns false", () => {
        expect(exerciseOne.canVote(18)).toBe(false);
    })

    test("canVote(age = 21) returns true", () => {
        expect(exerciseOne.canVote(21)).toBe(true);
    } )

    test("canVote() without an age argument returns false", () => {
        expect(exerciseOne.canVote()).toBe(false);
    })


});


// YOUR CODE HERE.  follow the template below to flush out your tests.
describe("farenheitCelsius()", () => {

    test("farenheitCelsius() returns converted number from Farenheit to celsius", () => {
        expect(exerciseOne.farenheitCelsius(212)).toBe(100);
    });

    test("farenheitCelsius returns converted number from Farenheit to celsius", () => {
        expect(exerciseOne.farenheitCelsius(32)).toBe(0);
    });

})


describe("celsiusFarenheit()", () => {

    test("celsiusFarenheit() returns converted number from celsius to farenheit", () => {
        expect(exerciseOne.celsiusFarenheit(100)).toBe(212);
    });

    test("celsiusFarenheit() returns converted number from celsius to farenheit", () => {
        expect(exerciseOne.celsiusFarenheit(0)).toBe(32);
    });

})


describe("strToArr()", () => {

    test("strToArr() returns converted array from string", () => {
        const string = "Party";
        const array = ["P", "a", "r", "t", "y"]
        expect(exerciseOne.strToArr(string)).toEqual(array);
    });

    test("strToArr() returns converted array from string", () => {
        expect(exerciseOne.strToArr("yay")).toEqual(["y", "a", "y"]);
    });

})

describe("reversePhone()", () => {

    test("reversePhone() returns reversed number", () => {
        expect(exerciseOne.reversePhone(7897)).toBe(7987);
    });

    test("reversePhone() returns reversed number", () => {
        expect(exerciseOne.reversePhone(8323306225)).toBe(5226033238);
    });

})

describe("yourCar()", () => {

    test("yourCar() returns constructed object from given values", () => {
        const object = {
            make: "Hyundai",
            model: "Elantra",
            year: "2013",
            color: "red",
        }
        expect(exerciseOne.yourCar("Hyundai", "Elantra", "2013", "red")).toEqual(object);
    });

})

describe("oddOrEvenObject()", () => {

    test("oddOrEvenObject() returns constructed object from given numbers, with their values stating if the key is 'even' or 'odd' ", () => {
        const object = {
            3: "odd",
            4: "even",
            10: "even",
            23: "odd",
        }
        expect(exerciseOne.oddOrEvenObject(10, 23, 3, 4)).toEqual(object);
    });

})


describe("firstProduct()", () => {

    test("firstProduct() returns computation of (30 + 2) * 20", () => {
        expect(exerciseOne.firstProduct()).toBe(640);
    });

})


describe("secondProduct()", () => {

    test("secondProduct() returns computation of (parameter/10) to the power of 2", () => {
        expect(exerciseOne.secondProduct(640)).toBe(4096);
    });

})

describe("chessCalc()", () => {

    test("chessCalc() returns the sum of the point values of the array elements passed in", () => {
        expect(exerciseOne.chessCalc(["king", "queen", "pawn", "pawn", "pawn", "bishop"])).toBe(15);
    });

})

describe("ageSort()", () => {

    test("ageSort() returns a sorted array by the age key in descending order", () => {
        const objectArray = [
            {
              name: "Chris",
              age: 102,
              gender: "m",
              tech_stack: ["react", "express", "python"],
            },
            {
              name: "Rashid",
              age: 27,
              gender: "m",
              tech_stack: ["thymeleaf", "postgres", "js", "Angular"],
            },
            {
              name: "Mariam",
              age: 32,
              gender: "f",
              tech_stack: null,
            },
        ]

        const returnedObjectArray = [
            {
                name: "Chris",
                age: 102,
                gender: "m",
                tech_stack: ["react", "express", "python"],
              },
              {
                name: "Mariam",
                age: 32,
                gender: "f",
                tech_stack: null,
              },
              {
                name: "Rashid",
                age: 27,
                gender: "m",
                tech_stack: ["thymeleaf", "postgres", "js", "Angular"],
              },
        ]
        expect(exerciseOne.ageSort(objectArray)).toEqual(returnedObjectArray);
    });

})


