export default {
  methods: {
    goHome() {
      (this as any).$router.push({ path: '/' })
    }
  }
}
