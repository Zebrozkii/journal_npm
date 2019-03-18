/* eslint-disable no-console */

export function wordCount(sentence) {
  let count = 0;
  let splitSentence = sentence.split(" ");
  splitSentence.forEach(function(){
    count++;
  });
  return count;
}

export function countVowels(sentence) {
  let vowelCount = 0;
  let splitSentence = sentence.split("");
  splitSentence.forEach(function(i){
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      vowelCount++;
    }
  });
  return vowelCount;  
}

export function countConsonants(sentence) {
  let consonantCount = 0;
  let splitSentence = sentence.split("");
  splitSentence.forEach(function(i){
    if (i != " " && i != "a" && i != "e" && i != "i" && i != "o" && i != "u") {
      console.log(i);
      consonantCount++;
    }
  });
  return consonantCount;
}

export function getTeaser(sentence) {
  let splitSentence = sentence.split(" ");
  let firstEight = splitSentence.slice(0, 8);
  return firstEight.join(" ");
}
