import FormAccount from '@/components/form/step/FormAccount.vue'
import FormRoom from '@/components/form/step/FormRoom.vue'
export default {
  name: 'PageSteppers',
  components: {
    FormAccount,
    FormRoom
  },
  data() {
    return {
      step: 1, // current step
      steps: [
        {
          step: 1,
          complete: false,
          text: 'Account',
          rules: []
        },
        {
          step: 2,
          complete: false,
          text: 'Choose Room',
          rules: []
        },
        {
          step: 3,
          complete: false,
          text: 'Remark & Confim',
          rules: []
        }
      ],
      formValue: []
    }
  },
  computed: {},
  methods: {
    handleConfirm() {},
    handleContinue() {
      if (this.step <= this.steps.length) {
        switch (this.step) {
          case 1:
            this.validateAccount()
            break
          case 2:
            this.validateRoom()
            break
          case 3:
            this.handleConfirm()
            break
          default:
            break
        }
      }
    },
    handleBack() {
      if (this.step > 1) this.step--
    },
    validateAccount() {
      const step = this.steps.find((item) => item.step === 1)
      const formAccount = this.$refs.formAccount
      console.log(formAccount.$refs.form.validate())
      if (formAccount.$refs.form.validate()) {
        step.complete = true
        step.rules = []
        this.step++
        this.formValue = [...formAccount.formValue]
        return true
      } else {
        //
        step.complete = false
        step.rules = [
          () => {
            'erro'
          }
        ]
        return false
      }
    },
    validateRoom() {
      const step = this.steps.find((item) => item.step === 2)
      const roomForm = this.$refs.formRoom
      if (roomForm.$refs.form.validate()) {
        step.complete = true
        step.rules = []
        this.step++
        // this.formValue = [...roomForm.formValue]
        return true
      } else {
        step.complete = false
        step.rules = [
          () => {
            'erro'
          }
        ]
        return false
      }
    }
  }
}
