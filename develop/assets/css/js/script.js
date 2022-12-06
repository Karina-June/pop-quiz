// have the start button move to the next slide
var startButton = document.
  getElementById('start-button')
  // console.log(startButton)
  startButton.addEventListener('click', function() {
    moveToNextSlide();
  })

// Have the right answers move to the next slide
var questionRight = document.
  getElementsByClassName('question-right')
    console.log(questionRight)

for (let i = 0; i < questionRight.length; i++) {
    questionRight[i].addEventListener('click', function() {
      moveToNextSlide();
 
    })
      // console.log(questionRight[i])
  }


// Have the wrong answers move to the next slide
var questionWrong = document.
getElementsByClassName('question-wrong')
  console.log(questionWrong)

for (let i = 0; i < questionWrong.length; i++) {
  questionWrong[i].addEventListener('click', function() {
    moveToNextSlide();
    
  })
  // console.log(questionWrong[i])

}
//The delaying of sliding to the next question
  function delay() {
   var bananas = document.getElementById('right-one').transitionDelay = "3s";

   bananas.style.remove('right-one')
  }

  function moveToNextSlide() {
    var currentSlide = document.getElementsByClassName('active')[0]
    var nextSlide = currentSlide.nextElementSibling;

    currentSlide.classList.remove('active')
    nextSlide.classList.add('active')
  }
    // console.log(nextSlide);
  


  //delayed message
  var timeoutID;

  function setOutput(outputContent) {
    document.querySelector('#output').textContent = outputContent;
  }
  
  function delayedMessage() {
    setOutput('');
    timeoutID = setTimeout(setOutput, 1000, 'Right!');
  }
  console.log('Right!')
  

