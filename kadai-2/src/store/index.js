import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: '',
    birthDay: {
      year: 1,
      month: 1,
      date: 1
    },
    questionTwoBox: {
      questionOne: '',
      questionTwo: '',
      questionThree: ''

    },
    message: ''
  },
  getters: {
    gender: state => state.gender,
    birthDay: state => state.birthDay,
    questionTwoBox: state => state.questionTwoBox,
    message: state => state.message
  },
  mutations: {
    saveUserData(state, userData) {
      state.gender = userData.gender
      state.birthDay.year = userData.birthDay.year
      state.birthDay.month = userData.birthDay.month
      state.birthDay.date = userData.birthDay.date
    },
    saveQuestionData(state, question) {
      state.questionTwoBox.questionOne = question.questionOne
      state.questionTwoBox.questionTwo = question.questionTwo
      state.questionTwoBox.questionThree = question.questionThree
    },
    saveMessage(state, message) {
      state.message = message
    }
  },
  actions: {
  },
  modules: {
  }
})
