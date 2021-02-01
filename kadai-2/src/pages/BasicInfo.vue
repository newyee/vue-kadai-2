<template>
  <div>
    <h2>お客様の情報を入力して下さい</h2>
      <p>性別</p>
      <input type="radio" value="男性" id="man" name="gender" v-model="gender">
      <label for="man">男性</label>
      <input type="radio" value="女性" name="gender" id="woman" v-model="gender">
      <label for="woman">女性</label>
      <p>生年月日</p>
      <select id="year" v-model="year">
        <option v-for="nengo in nengoes" :key="nengo.year" :value="nengo.year">{{ nengo.label }}</option>
      </select>
      <label>年</label>
      <select v-model="month" @change="get_days">
      <option v-for="n in 12" :key="n" :value="n">
        {{ n }}
      </option>
      </select>
      <label>月</label>
      <select v-model="date">
        <option v-for="n in days_max" :key="n" :value="n">
          {{ n }}
        </option>
      </select>
      <label>日</label>
      <div class="next_button">
        <router-link to="work-sheet" @click.native="clickNextButton">次へ</router-link>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gender: '',
      year: 1990,
      month: 1,
      date: 1,
      days_max: '',
      nengoes: []
    }
  },
  created: function () {
    this.get_days()
  },
  mounted() {
    this.nengoes = this.genereate()
  },
  methods: {
    clickNextButton() {
      const birthDay = {
        year: this.year,
        month: this.month,
        date: this.date
      }
      const gender = this.gender
      const userData = { gender, birthDay }
      this.$store.commit('saveUserData', userData)
    },
    genereate() {
      const nengoes = []
      for (let y = 2021; y > 1920; y--) {
        if (y > 2018) {
          nengoes.push({ year: y, label: `${y} (令和${y - 2018}年)` })
        } else if (y > 1988) {
          nengoes.push({ year: y, label: `${y} (平成${y - 1988}年)` })
        } else if (y > 1925) {
          nengoes.push({ year: y, label: `${y} (昭和${y - 1925}年)` })
        } else if (y > 1911) {
          nengoes.push({ year: y, label: `${y} (大正${y - 1911}年)` })
        }
      }
      return nengoes
    },
    // 日の最大数を取得
    get_days: function () {
      this.days_max = new Date(this.year, this.month, 0).getDate()
    }
  }
}
</script>
<style lang="scss" scoped>
  .next_button{
    margin-top: 30px;
  }
</style>
