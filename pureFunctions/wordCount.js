const R = require('ramda')

const sentence = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quibusdam rerum quasi dolore iure ad reprehenderit aspernatur temporibus ratione nisi itaque ullam voluptates possimus, nam adipisci porro quos non incidunt.'

const wordList = R.split(' ', sentence);
console.log(wordList)

const wordCount = wordList.length;
console.log(wordCount)

const countWords = R.compose(R.length, R.split)
console.log(countWords(' ', sentence))

const countWords2 = R.compose(R.length, R.split(' '))
console.log(countWords2(sentence))

const countWords3 = R.pipe(R.split(' '), R.length)
console.log(countWords3(sentence))