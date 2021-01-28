const exerciseOne = require("../exercise-1");

describe("tekCamp()", () => {
  test("existence of tekcamp()", () => {
    const expected = undefined;
    const actual = exerciseOne.tekCamp();
    expect(actual).toBe(expected);
  });

  test("tekCamp() console.logs with TEK at least once", () => {
    console.log = jest.fn();
    exerciseOne.tekCamp();
    // expect(console.log).toBeCalledTimes(10);
    const expected = "TEK";
    const actual = console.log;
    expect(actual).toHaveBeenCalledWith(expected);
  });

  test("tekCamp() last console.log() is camp", () => {
    console.log = jest.fn();
    exerciseOne.tekCamp();
    expect(console.log).toHaveBeenLastCalledWith("camp");
  });

  test("tekCamp() on 3, console.log() TEK", () => {
    console.log = jest.fn();
    exerciseOne.tekCamp();
    expect(console.log).toHaveBeenNthCalledWith(3, "TEK");
  });

  test("tekCamp() on 4 console.logs 4", () => {
    console.log = jest.fn();
    exerciseOne.tekCamp();
    expect(console.log).toHaveBeenNthCalledWith(4, 4);
  });

  test("tekCamp() on 1 console.logs 1 ", () => {
    console.log = jest.fn();
    exerciseOne.tekCamp();
    expect(console.log).toHaveBeenNthCalledWith(1, 1);
  });

  test.skip("tekCamp() on 2 console.logs 2", () => {
    console.log = jest.fn();
    exerciseOne.tekCamp();
    expect(console.log).toHaveBeenNthCalledWith(2, "2");
  });

  test("tekCamp() on 15 console.logs 'TEKcamp' ", () => {
    console.log = jest.fn();
    exerciseOne.tekCamp();
    expect(console.log).toHaveBeenNthCalledWith(15, "TEKcamp");
  });
});

describe("canVote()", () => {
  test("canVote() returns false", () => {
    expect(exerciseOne.canVote(18)).toBe(false);
  });

  test("canVote(age = 21) returns true", () => {
    expect(exerciseOne.canVote(21)).toBe(true);
  });

  test("canVote() without an age argument returns false", () => {
    expect(exerciseOne.canVote()).toBe(false);
  });
});

describe("farenheitCelsius()", () => {
  test("farenheitCelsius() returns converted number from Farenheit to celsius", () => {
    const testData = 212;
    const expected = 100;
    const actual = exerciseOne.farenheitCelsius(testData);
    expect(actual).toBe(expected);
  });
});

describe("celsiusFarenheit()", () => {
  test("celsiusFarenheit() returns converted number from celsius to farenheit", () => {
    const testData = 100;
    const expected = 212;
    const actual = exerciseOne.celsiusFarenheit(testData);
    expect(actual).toBe(expected);
  });
});

describe("strToArr()", () => {
  test("strToArr() returns converted array from string", () => {
    const testData = "Party";
    const expected = ["P", "a", "r", "t", "y"];
    const actual = exerciseOne.strToArr(testData);
    expect(actual).toEqual(expected);
  });
});

describe("reversePhone()", () => {
  test("reversePhone() returns reversed number", () => {
    const testData = 8323306225;
    const expected = 5226033238;
    const actual = exerciseOne.reversePhone(testData);
    expect(actual).toBe(expected);
  });
});

describe("yourCar()", () => {
  test("yourCar() returns constructed object from given values", () => {
    const expected = {
      make: "Hyundai",
      model: "Elantra",
      year: "2013",
      color: "red",
    };
    const actual = exerciseOne.yourCar("Hyundai", "Elantra", "2013", "red");
    expect(actual).toEqual(expected);
  });
});

describe("oddOrEvenObject()", () => {
  test("oddOrEvenObject() returns constructed object from given numbers, with their values stating if the key is 'even' or 'odd' ", () => {
    const expected = {
      3: "odd",
      4: "even",
      10: "even",
      23: "odd",
    };
    const actual = exerciseOne.oddOrEvenObject(10, 23, 3, 4);
    expect(actual).toEqual(expected);
  });
});

describe("firstProduct()", () => {
  test("firstProduct() returns computation of (30 + 2) * 20", () => {
    const expected = 640;
    const actual = exerciseOne.firstProduct();
    expect(actual).toBe(expected);
  });
});

describe("secondProduct()", () => {
  test("secondProduct() returns computation of (parameter/10) to the power of 2", () => {
    const testData = 640;
    const expected = 4096;
    const actual = exerciseOne.secondProduct(testData);
    expect(actual).toBe(expected);
  });
});

describe("chessCalc()", () => {
  test("chessCalc() returns the sum of the point values of the array elements passed in", () => {
    const testData = ["king", "queen", "pawn", "pawn", "pawn", "bishop"];
    const expected = 15;
    const actual = exerciseOne.chessCalc(testData);
    expect(actual).toBe(expected);
  });
});

describe("ageSort()", () => {
  test("ageSort() returns a sorted array by the age key in descending order", () => {
    const testData = [
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
    ];

    const expected = [
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
    ];
    const actual = exerciseOne.ageSort(testData);
    expect(actual).toEqual(expected);
  });
});

describe("maxNumber()", () => {
  test("maxNumber() returns the highest number of an array after all NANs have either been translated into a number or taken out", () => {
    const testData = [
      2,
      23,
      1,
      2,
      1,
      1,
      1,
      2,
      2.5,
      20,
      200,
      2000,
      ,
      { k: "val" },
      20000,
      19999,
      1878,
      140,
      23,
      4,
      "sk",
      true,
      true,
      "true-dat",
      "nice",
      "one",
      "two",
      "three",
      "3",
      "tea",
      [],
    ];

    const expected = 20000;
    const actual = exerciseOne.maxNumber(testData);
    expect(actual).toBe(expected);
  });
});



//next is sortNums