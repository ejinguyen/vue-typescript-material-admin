import Bytes from 'bytes'
import { getFileMenu, getFile } from '@/api/file'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
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
    isImage(file) {
      return this.imageMime.includes(file.fileType)
    },

    mimeIcons(file) {
      return this.imageMime.includes(file.fileType)
        ? 'image'
        : 'insert_drive_file'
    },

    showDetail(file) {
      this.selectedFile = file
    },

    fileSize(number) {
      return Bytes.format(number)
    },

    formateDate(string) {
      return string ? new Date(string).toLocaleDateString() : ''
    },

    computeFileImage(file) {
      return this.isImage(file) ? file.path : '/static/icon/file_empty.svg'
    }
  }
}