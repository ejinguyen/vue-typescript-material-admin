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
    handleConfirm() { },
    handleContinue() {
      if ((this as any).step <= (this as any).steps.length) {
        switch ((this as any).step) {
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
      if ((this as any).step > 1) (this as any).step--
    },
    validateAccount() {
      const step = (this as any).steps.find((item: { step: number }) => item.step === 1)
      const formAccount = (this as any).$refs.formAccount
      console.log(formAccount.$refs.form.validate())
      if (formAccount.$refs.form.validate()) {
        step.complete = true
        step.rules = [] as any[]
        (this as any).step++
        (this as any).formValue = [...formAccount.formValue]
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
      const step = (this as any).steps.find((item: { step: number }) => item.step === 2)
      const roomForm = (this as any).$refs.formRoom
      if (roomForm.$refs.form.validate()) {
        step.complete = true
        step.rules = [] as any[]
        (this as any).step++
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
