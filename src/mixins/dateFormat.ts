// import { formatDate } from '@/util/index'

export default {
  methods: {
    formatDate(val: string | number | Date) {
      return new Date(val).toDateString()
    }
  }
}
