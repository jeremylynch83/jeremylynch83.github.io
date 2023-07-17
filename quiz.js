new Vue({
  el: '#app',
  data: {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    startTime: null,
    breakTime: false,
    quizOver: false,
    startQuiz: false,
    fields: [
        { key: 'questionImage', label: 'Question Image' },
        //{ key: 'question', label: 'Question' },
        //{ key: 'selectedAnswer', label: 'Selected Answer' },
        { key: 'timeSpent', label: 'Time' },
        { key: 'correct', label: 'Correct?' },
    ]
  },
  methods: {
    startQuestion() {
      this.startTime = Date.now();
      this.startQuiz = true;
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    },
    answerQuestion(answer) {
      let timeSpent = Date.now() - this.startTime;
      this.userAnswers.push({
        questionImage: this.questions[this.currentQuestionIndex].image,
        question: this.questions[this.currentQuestionIndex].question,
        selectedAnswer: answer,
        timeSpent: timeSpent,
        correct: answer === this.questions[this.currentQuestionIndex].answer ? 'Yes' : 'No'
      });
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex === 5) {
        this.breakTime = true;
      } else if (this.currentQuestionIndex === 10) {
        this.quizOver = true;
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
  }
});
