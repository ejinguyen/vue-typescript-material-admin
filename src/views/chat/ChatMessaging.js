import ChatHistory from '@/components/chat/ChatHistory.vue'
import ChatWindow from '@/components/chat/ChatWindow.vue'
export default {
    components: {
        ChatHistory,
        ChatWindow,
    },
    data() {
        return {}
    },
    computed: {
        showSidebar() {
            return this.$route.params.uuid === undefined
        },
        showWindow() {
            return this.$route.params.uuid !== undefined
        },
    },
}