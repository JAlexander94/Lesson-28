function Algo() {}

Algo.prototype.reverse = function(str) {
    const characters = str.split('')
    characters.reverse()
    const result = characters.join('')
    return result
};

Algo.prototype.isPalindrome = function(str) {
    const reversedstr = new Algo().reverse(str)
    if(str === reversedstr){
        return true
    }
    return false
};

Algo.prototype.capitalize = function(str) {
    const words = str.split(' ')
    for (let i=0;i<words.length;i++){
        const firstletter = words[i].charAt(0)
        const firstlettercap = firstletter.toUpperCase()
        const letters = words[i].slice(1)
        words[i] = firstlettercap + letters
    }
    const result = words.join(' ')
    return result
};

module.exports = Algo;
