var answer;
alert('Return to homepage when finished.');
for (var i = 1; i < Infinity; i = i + 1) {
  answer = prompt('What is ' + i + ' squared?');
  if (answer == `${i ** 2}`) {
    alert('Correct!');
  } else {
    alert('Sorry, the answer is ' + i ** 2);
  }
}
