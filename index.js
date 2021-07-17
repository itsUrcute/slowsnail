function slowsnailize(string) {
    const arrayString = string.split('');
    arrayString.forEach((char, i) => {
        if (char !== '') arrayString[i] = '🐌';
    });
    return arrayString.toString();
}

console.log(slowsnailize('Hello world!'));