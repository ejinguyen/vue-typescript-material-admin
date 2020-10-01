import Vue from 'vue'


export default Vue.extend({
  name: 'PageLogin',
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: null,
        password: null
      },
      formRule: {
        username: [
          (v: any) =>
            !!v || (this as any).$vuetify.lang.t('$vuetify.rule.required', ['username'])
        ],
        password: [
          (v: any) =>
            !!v || (this as any).$vuetify.lang.t('$vuetify.rule.required', ['password'])
        ]
      },
      socialIcons: [
        {
          text: 'Google',
          icon: 'mdi-google'
        },
        {
          text: 'Facebook',
          icon: 'mdi-facebook'
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter'
        }
      ]
    }
  },
  computed: {
    prefix() {
      return ''
    }
  },
  methods: {
    login() {
      console.log(this.formModel);
      if ((this as any).$refs.form.validate()) {
        this.loading = true
        console.log(this.$store);
        this.$store
          .dispatch('login', this.formModel, { root: true })
          .then(() => {
            this.loading = false
            this.$router.push('/dashboard')
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
    handleSocialLogin() { }
  }
})