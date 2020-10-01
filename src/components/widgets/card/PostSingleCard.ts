import Vue from 'vue'

export default Vue.extend({  props: {
    featuredImage: { type: String },
    imageHeight: { type: [String, Number], default: '350' },
    author: { type: String },
    title: { type: String },
    desc: { type: String },
    createdAt: { type: String }
  },

  methods: {
    handleThumb() {
      // implement your own method here
    },
    handleComment() {
      // implement your own method here
    },
    handleFavorite() {
      // implement your own method here
    }
  }
})
