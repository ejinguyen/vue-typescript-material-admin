import ThemeSettings from '@/components/ThemeSettings.vue'
export default {
    components: {
        ThemeSettings
    },
    data() {
        return {
            rightDrawer: false,
            snackbar: {
                show: false,
                text: '',
                color: ''
            }
        }
    },
    methods: {
        openThemeSettings() {
            this.$vuetify.goTo(0)
            this.rightDrawer = !this.rightDrawer
        }
    },
    mounted() {
        if (typeof window !== undefined && window._VMA === undefined) {
            window._VMA = this
        }
    },
    created() {
        this.$on('SHOW_SNACKBAR', (e) => {
            this.snackbar = {
                show: true,
                text: e.text,
                color: e.color
            }
        })
        this.$on('AUTH_FAIELD', () => {
            this.$router.push('/auth/login')
        })
        this.$on('SERVER_ERROR', () => {
            this.snackbar = {
                show: true,
                text: 'Server Error',
                color: 'error'
            }
        })
    }
}