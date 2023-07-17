new Vue({
  el: '#app',
  data: {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    startTime: null,
    breakTime: false,
    timer: null,
    quizOver: false,
    startQuiz: false,
    fields: [
        { key: 'questionImage', label: 'Question Image' },
        { key: 'timeSpent', label: 'Time' },
        { key: 'correct', label: 'Correct?' },
    ],
    timer: null
  },

  methods: {
    startQuestion() {
      this.startTime = Date.now();
      this.startQuiz = true;
      this.timer.value = 0;
      console.log(this.timer)



    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    },
    answerQuestion(answer) {
      clearInterval(this.timer);
      let timeSpent = (Date.now() - this.startTime) / 1000;
      this.userAnswers.push({
        questionImage: this.questions[this.currentQuestionIndex].image,
        question: this.questions[this.currentQuestionIndex].question,
        selectedAnswer: answer,
        timeSpent: timeSpent.toFixed(2),
        correct: answer === this.questions[this.currentQuestionIndex].answer ? 'Yes' : 'No'
      });
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex === 5) {
        this.breakTime = true;
      } else if (this.currentQuestionIndex === 10) {
        this.quizOver = true;
      } else {
        this.startQuestion();
      }
    },
    openImageInNewTab() {
      let imageUrl = 'quizimg/' + this.questions[this.currentQuestionIndex].image;
      window.open(imageUrl, '_blank');
    }
  },

  created() {
    this.questions = [...questions];
    this.shuffleArray(this.questions);
    this.timer = {value:0};
    setInterval(setTime, 1000, this.timer);
      function setTime(timer) {
        timer.value = timer.value+1
        console.log(timer.value)
    }
  }
});
