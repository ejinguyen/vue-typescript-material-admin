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
  methods: {
    handleClick: (e: any): any => {
      console.log(e)
    }
  }
}
