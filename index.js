// Write your solution here!

//cats is assigned an initial value of ["Milo", "Otis", "Garfield"]:
const cats = ["Milo", "Otis", "Garfield"];

// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

//removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return cats.concat([name]);
}
//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    if (cats.length === 0) {
        return[];
    }
    return cats.slice(0, cats.length - 1);
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    if (cats.length === 0) {
        return[];
    }
    return cats.slice(1); 
} 