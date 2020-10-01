import Vue from 'vue'

export default Vue.extend({
  methods: {
    goHome() {
      (this as any).$router.push({ path: '/' })
    }
  }
})
