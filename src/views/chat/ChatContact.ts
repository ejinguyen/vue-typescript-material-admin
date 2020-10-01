import ChatContactList from '@/components/chat/ChatContactList.vue'
import ChatContactProfile from '@/components/chat/ChatContactProfile.vue'

export default {
  components: {
    ChatContactList,

    ChatContactProfile
  },

  data() {
    return {
      chat: null,

      selectedTab: null
    }
  },

  computed: {
    showSidebar() {
      return (this as any).$route.params.uuid === undefined
    },

    showWindow() {
      return (this as any).$route.params.uuid !== undefined
    }
  }
}
