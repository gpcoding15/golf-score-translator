const { golfScore } = require('./golf-score-translator');

describe('golf-score-translator', () => {
    test("it should return 'Hole-in-one' when stroukeAmount is 1 no matter the coursePar value", () => {
        let coursePar = 3;
        const stroukeAmount = 1;

        const result = golfScore(coursePar, stroukeAmount);

        expect(result).toBe("Hole-in-one!");
    });

    test("it should return 'Eagle' when coursePar is 4  minus 2 and is equal to stroukAmount ", () => {
        const coursePar = 4;
        const strokeAmount = 2;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Eagle!");
    });

    test("should return 'Eagle' when stroukeAmout is 2 and coursePar is 5 minus 2", () => {
        const coursePar = 5;
        const strokeAmount = 2;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Eagle!");
    })

    test("should return 'Birdie' when strokesAmount is 2 and coursePar is 3 minus 1", () => {
        const coursePar = 3;
        const strokeAmount = 2;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Birdie");
    });

    test("should return 'Birdie' when strokesAmount is 3 and coursePar is 4 minus 1", () => {
        const coursePar = 4;
        const strokeAmount = 3;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Birdie");
    });

    test("should return 'Par' when strokesAmount is 3 and coursePar is 3", () => {
        const coursePar = 3;
        const strokeAmount = 3;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Par");
    });

    test("should return 'Par' when strokesAmount is 4 and coursePar is 4", () => {
        const coursePar = 4;
        const strokeAmount = 4;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Par");
    });

    test("should return 'Bogey' when strokesAmount is 4 and coursePar is 3 plus 1", () => {
        const coursePar = 3;
        const strokeAmount = 4;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Bogey");
    });

    test("should return 'Bogey' when strokesAmount is 5 and coursePar is 4 plus 1", () => {
        const coursePar = 4;
        const strokeAmount = 5;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Bogey");
    });

    test("should return 'Double Bogey' when strokesAmount is 5 and coursePar is 3 plus 2", () => {
        const coursePar = 3;
        const strokeAmount = 5;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Double Bogey");
    });

    test("should return 'Double Bogey' when strokesAmount is 6 and coursePar is 4 plus 2", () => {
        const coursePar = 4;
        const strokeAmount = 6;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Double Bogey");
    });

    test("should return 'Go Home' when strokesAmount is 9 and coursePar is 3 plus 2", () => {
        const coursePar = 3;
        const strokeAmount = 9;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Go Home!");
    });

    test("should return 'Go Home' when strokesAmount is 9 and coursePar is 5 plus 2", () => {
        const coursePar = 5;
        const strokeAmount = 9;

        const result = golfScore(coursePar, strokeAmount);

        expect(result).toBe("Go Home!");
    });
});