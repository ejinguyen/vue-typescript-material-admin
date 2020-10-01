import { getPost } from '@/api/post'
import MessageList from '@/components/widgets/list/MessageList.vue'
import NotificationList from '@/components/widgets/list/NotificationList.vue'
import PlainTable from '@/components/widgets/list/PlainTable.vue'
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder.vue'
export default {
  components: {
    MessageList,
    NotificationList,
    PlainTable,
    PlainTableOrder
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return getPost()
    }
  },
  methods: {
    handleClick: (e) => {
      console.log(e)
    }
  }
}
