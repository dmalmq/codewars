 function letterValue(letter) {
    const asciiCode = letter.charCodeAt(0);
    const letterPosition = asciiCode - 97 + 1
    return letterPosition;
 }

 function wordScore(word) {
   let sum = 0
   let letters = word.split("")
   
   for(let i = 0; i < letters.length; i++) {
      sum += letterValue(letters[i])
   }

   return sum
 }

function high(str) {
   let words = str.split(" ")

   highScore = 0
   highScoreWord = ""

   for(let i = 0; i < words.length; i++) {
      let score = wordScore(words[i])
      if (score > highScore) {
         highScore = score
         highScoreWord = words[i]
      }
   }
   return highScoreWord
}

    

 console.log(high('man i need a taxi up to ubud'));

