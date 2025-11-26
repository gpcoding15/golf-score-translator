const golfScore = (coursePar, strokesAmount) => {
    if(strokesAmount === 1) {
        return "Hole-in-one!"
    } else if(strokesAmount <= coursePar - 2) {
        return "Eagle!";
    } else if(strokesAmount === coursePar - 1) {
        return "Birdie"
    } else if(strokesAmount === coursePar) {
        return "Par"
    } else if(strokesAmount === coursePar + 1) {
       return "Bogey"
    } else if(strokesAmount === coursePar + 2) {
        return "Double Bogey"
    } else if(strokesAmount >= coursePar + 3) {
        return "Go Home!"
    }
};

module.exports = {
    golfScore
}