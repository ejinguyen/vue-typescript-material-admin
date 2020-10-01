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
      (this as any).$vuetify.goTo(0)
        (this as any).rightDrawer = !(this as any).rightDrawer
    }
  },
  mounted() {
    if (typeof window !== undefined && (window as any)._VMA === undefined) {
      (window as any)._VMA = this
    }
  },
  created() {
    (this as any).$on('SHOW_SNACKBAR', (e: { text: any; color: any }) => {
      (this as any).snackbar = {
        show: true,
        text: e.text,
        color: e.color
      }
    })
      (this as any).$on('AUTH_FAIELD', () => {
        (this as any).$router.push('/auth/login')
      })
      (this as any).$on('SERVER_ERROR', () => {
        (this as any).snackbar = {
          show: true,
          text: 'Server Error',
          color: 'error'
        }
      })
  }
}
