var answer;
alert('Return to homepage when finished.');
for (var i = 1; i < Infinity; i = i + 1) {
  answer = prompt('What is ' + i + ' squared?');
  answer = answer * 1
  if (answer.value === i ** 2) {
    alert('Correct!');
  } else {
    alert('Sorry, the answer is ' + i ** 2);
  }
}
