function findShort(s) {
  let shortest = 0

  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (shortest === 0) {
        shortest = words[i].length;
    }
    if (words[i].length < shortest) {
      shortest = words[i].length;
    }
  }
  return shortest;
}



console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

