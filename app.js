let allQuestionEls = document.querySelectorAll('.accordion__question');

allQuestionEls.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');

    let answer = question.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// “The Element.scrollHeight read-only property is a measurement
// of the height of an element’s content, including content not
// visible on the screen due to overflow.”
