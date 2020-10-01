export default {
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
                    (v) =>
                        !!v || this.$vuetify.lang.t('$vuetify.rule.required', ['username'])
                ],
                password: [
                    (v) =>
                        !!v || this.$vuetify.lang.t('$vuetify.rule.required', ['password'])
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
            if (this.$refs.form.validate()) {
                this.loading = true
                this.$store
                    .dispatch('login', this.formModel)
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
}
