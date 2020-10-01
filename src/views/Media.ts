import Vue from 'vue'
import { getFileMenu, getFile } from '@/api/file'
const VuePerfectScrollbar = require('vue-perfect-scrollbar')
const Bytes = require('bytes')

export default Vue.extend({
  components: {
    VuePerfectScrollbar
  },

  props: {
    type: {
      type: String,

      default: 'image'
    }
  },

  data() {
    return {
      size: 'lg',

      view: 'grid',

      selectedFile: {
        path: '/static/icon/empty_file.svg'
      },

      imageMime: ['image/jpeg', 'image/png', 'image/svg+xml'],

      folders: [
        {
          name: 'bg',

          lastModified: '2018-03-03'
        },

        {
          name: 'cards',

          lastModified: '2018-03-03'
        },

        {
          name: 'avatar',

          lastModified: '2018-03-03'
        }
      ]
    }
  },

  computed: {
    mediaMenu() {
      return getFileMenu
    },

    files() {
      return getFile()
    }
  },

  methods: {
    isImage(file: any): any {
      return this.imageMime.includes(file.fileType)
    },

    mimeIcons(file: any): any {
      return this.imageMime.includes(file.fileType)
        ? 'image'
        : 'insert_drive_file'
    },

    showDetail(file: any): any {
      this.selectedFile = file
    },

    fileSize(number: any): any {
      return Bytes.format(number)
    },

    formateDate(string: any): any {
      return string ? new Date(string).toLocaleDateString() : ''
    },

    computeFileImage(file: any): any {
      return this.isImage(file) ? file.path : '/static/icon/file_empty.svg'
    }
  }
})
