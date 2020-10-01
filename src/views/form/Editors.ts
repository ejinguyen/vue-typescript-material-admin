import Vue from 'vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
const quillEditor = require('vue-quill-editor')

export default Vue.extend({
  components: {
    quillEditor
  },
  data() {
    return {
      content: 'Compose Epic Story...',
      editorOption: {}
    }
  },
  computed: {},

  methods: {}
})
