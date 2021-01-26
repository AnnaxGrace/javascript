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







