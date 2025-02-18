
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats;
}

function appendCat() {
    const newCats = [...cats];
    newCats.push('Broom');
    return newCats;
}

function prependCat() {
    const newCats = [...cats];
    newCats.unshift('Arnold')
    return newCats;
}

function removeLastCat() {
    const newCats = [...cats]
    newCats.pop();
    return newCats;
}

function removeFirstCat() {
    const newCats = [...cats]
    newCats.shift();
    return newCats;
}