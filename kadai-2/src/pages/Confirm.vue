<template>
  <div>
    <h2>以下の内容をご確認下さい</h2>
    <div>
      <p>-性別-</p>
      <p>{{ this.gender }}</p>
      <p>生年月日</p>
      <p>{{ this.birthDay}}</p>
      <p>現在、生命保険に加入されていますか？</p>
      <p>{{ this.questionOne }}</p>
      <p>- 現在入院中ですか。または、最近3ヶ月以内に医師の診療・検査の結果,入院・手術を進められた
        ことはありますか？
      </p>
      <p>{{ this.questionTwo }}</p>
      <p>- 過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
      <p>{{ this.questionThree }}</p>
      <p>- ご相談内容 -</p>
      <p>{{ this.$store.getters.message }}</p>
      <router-link to="/consultation">前へ戻る</router-link>
      <router-link to="">送信</router-link>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.gender = this.$store.getters.gender
    const year = `${this.$store.getters.birthDay.year}年`
    const month = `${this.$store.getters.birthDay.month}月`
    const day = `${this.$store.getters.birthDay.date}日`
    this.birthDay = year + month + day
    this.questionOne = this.$store.getters.questionTwoBox.questionOne
    this.questionTwo = this.$store.getters.questionTwoBox.questionTwo
    this.questionThree = this.$store.getters.questionTwoBox.questionThree
  },
  data() {
    return {
      gender: '',
      birthDay: '',
      questionOne: '',
      questionTwo: '',
      questionThree: ''
    }
  }
}
</script>
<style lang="scss">
  a{
    margin:2rem
  }
</style>
