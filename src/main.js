import './styles.css';
import { wordCount, countVowels, countConsonants, getTeaser } from './entry';

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    let title = $('#title').val();
    let body = $('#body').val();
    let countedWords = wordCount(body);
    let countedVowels = countVowels(body);
    let countedConsonants = countConsonants(body);
    let teaser = getTeaser(body);
    $('#journalTitle').text("Title: " + title);
    $('#numberOfWords').text("Number of words: " + countedWords);
    $('#numberOfVowels').text("Number of vowels: " + countedVowels);
    $('#numberOfConsonants').text("Number of consonants: " + countedConsonants);
    $('#teaserSentence').text("Teaser sentence: " + teaser + " ...");
  });
});