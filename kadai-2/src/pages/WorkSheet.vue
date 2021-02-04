<template>
  <div>
    <h2>以下にお答え下さい</h2>
    <div class="question-one-text">
      現在、生命保険に加入されていますか？
      <div>
      <input type="radio" value="はい" name="questionOne" v-model="questionOne">はい
      <input type="radio" value="いいえ" name="questionOne" v-model="questionOne">いいえ
      </div>
    </div>
    <div v-if="questionOne != '' ">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられ
      たことはありますか？
      <div class="question-two-text">
        <input type="radio" name="questionTwo" value="はい" v-model="questionTwo">はい
        <input type="radio" value="questionTwo" v-model="questionTwo">いいえ
      </div>
    </div>
    <div v-if="questionTwo != '' ">過去5年以内に、病気や怪我けがで、手術をうけたことまたは継続して7日以上の入院
    をしたことがありますか？
      <div class="question-three-text">
        <input type="radio" name="questionThree" value="はい" v-model="questionThree">はい
        <input type="radio" value="questionThree" v-model="questionThree">いいえ
      </div>
    </div>
    <router-link to="/" class="backButton">前へ戻る</router-link>
    <router-link to="/consultation"  @click.native="clickNextButton">次へ進む</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionOne: '',
      questionTwo: '',
      questionThree: ''
    }
  },
  methods: {
    clickNextButton() {
      const question = {
        questionOne: this.questionOne,
        questionTwo: this.questionTwo,
        questionThree: this.questionThree
      }
      this.$store.commit('saveQuestionData', question)
    }
  }

}
</script>
<style lang="scss">
.backButton{
  margin-right: 30px;
  margin-top: 30px;
  display: inline-block;
}

</style>
