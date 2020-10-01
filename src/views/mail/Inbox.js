import { getMailByType } from '@/api/mail'
import Dateformat from '@/mixins/dateFormat'
export default {
  name: 'PageInbox',
  components: {},
  mixins: [Dateformat],
  props: {
    category: {
      type: String
    }
  },
  data() {
    return {
      mails: [],
      selectedMail: null,
      headers: [
        {
          text: 'uuid',
          value: 'uuid',
          width: '24'
        },
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Created At',
          value: 'created_at'
        }
      ],
      mailActions: [
        {
          title: 'Delete',
          icon: 'mdi-delete',
          click: (e) => {
            console.log(e)
          }
        },
        {
          title: 'Mark as read',
          icon: 'mdi-email-alert',
          click: (e) => {
            console.log(e)
          }
        },
        {
          title: 'Spam',
          icon: 'mdi-bug',
          click: (e) => {
            console.log(e)
          }
        }
      ]
    }
  },
  watch: {
    category: {
      handler(val) {
        this.fetchRecords(val)
      },
      immediate: true
    }
  },
  computed: {},
  methods: {
    fetchRecords(type) {
      this.mails = getMailByType(type)
    },
    handleStarEmail() {}
  },

  created() {}
}
