import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: ''
    },
    avatar: {
      type: Object,
      default: null
    },
    jobTitle: {
      type: String,
      default: ''
    },
    cardBgImage: {
      type: String
    },
    color: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    bottomNav: {
      type: Boolean,
      default: false
    },
    topNav: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),

  computed: {
    computeCardLayout() {
      return this.mini ? 'row' : 'column'
    },
    computeTextAlgin() {
      return this.mini ? 'text-sm-right' : 'text-sm-center'
    },
    computeAvatarSize() {
      return this.mini ? '48' : '96'
    },
    showAvatar() {
      return this.avatar !== null && (this as any).avatar.src;
    },

    showBottomNav() {
      return this.mini === false && this.bottomNav
    },

    showTopNav() {
      return this.mini === false && this.topNav
    }
  },

  methods: {}
})
