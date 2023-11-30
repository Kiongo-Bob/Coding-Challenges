import { calcScore }  from "../src/app";

describe('Calculates correct scores based on input',()=>{

    it("Should pass if the score evaluates to 300", async()=>{
        const perfectGame = calcScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

        expect(perfectGame).toStrictEqual(300);
    });

    it("Should pass if a all frames are spares ie 21 rolls and totals to 150", async()=>{
        const allspares = calcScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);

        expect(allspares).toBe(150);
    });

    it("Should pass if none of the frames has neither a spare nor a strike e.g 9 - and equals 90", async()=>{
        const noBonus = calcScore([9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]);

        expect(noBonus).toEqual(90);
    });

    it("Should pass if rolls are misses and equal to 0", async()=>{
        const allmises = calcScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

        expect(allmises).toBe(0);
    })

    it("Should pass if all misses but the tenth, where frame 10 is a strike and bonus strikes equalling 0", async()=>{
        const lastIsStrike = calcScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);

        expect(lastIsStrike).toBe(30);
    })
    
    it("Custom scores alternating between spare and strike with a total o 205", ()=>{
        const lastIsStrike = calcScore([6, 4, 10, 5, 5, 10, 7, 3, 10, 2, 8, 10, 5, 5, 10, 10, 5]);

        expect(lastIsStrike).toStrictEqual(205);
    })
})
