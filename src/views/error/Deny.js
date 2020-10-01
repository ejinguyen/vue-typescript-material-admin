export default {
    methods: {
        goHome() {
            this.$router.push({ path: '/' })
        },
    },
    created() {
        console.log('here')
    },
}
