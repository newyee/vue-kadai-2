<template>
  <div>
    <h2>ご相談内容をご記入下さい</h2>
    <div>ご相談内容</div>
    <textarea v-model="message" class="text"></textarea>
    <div>
    <router-link class="back-button" to="/work-sheet">前へ戻る</router-link>
    <router-link to="/Confirm" @click.native="clickNextButton">次へ進む</router-link>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    clickNextButton() {
      this.$store.commit('saveMessage', this.message)
    }
  }
}
</script>
<style lang="scss">
.text{
  width: 50%;
  padding-bottom: 8%;
}
.back-button{
  margin-right: 10px;
}
</style>
