import { mapGetters } from 'vuex'
import EventForm from '@/components/form/EventForm.vue'
export default {
  name: 'PageCalendar',
  components: {
    EventForm
  },
  data() {
    return {
      showEventDialog: false,
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days'
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: [
        'blue',
        'indigo',
        'deep-purple',
        'cyan',
        'green',
        'orange',
        'grey darken-1'
      ],
      names: [
        'Meeting',
        'Holiday',
        'PTO',
        'Travel',
        'Event',
        'Birthday',
        'Conference',
        'Party'
      ]
    }
  },
  computed: {
    ...mapGetters(['getEvents'])
  },
  methods: {
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    handleEditEvent({ nativeEvent, event }) {
      console.log(event)
      this.selectedEvent = event
      this.showEventDialog = true
      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {},
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    handleDateClick(e) {
      console.log(e)
    },
    handleDayClick({ date }) {
      this.selectedEvent = {
        name: '',
        start: new Date(date),
        end: new Date(date),
        color: 'primary'
      }
      this.showEventDialog = true
    },
    handleTimeClick({ date }) {
      this.selectedEvent = {
        name: '',
        start: new Date(date),
        end: new Date(date),
        color: 'primary',
        timed: false
      }
      this.showEventDialog = true
    },
    handleIntervalClick(e) {
      console.log('interval click', e)
    },
    handleCloseDialog() {
      this.showEventDialog = false
      this.selectedEvent = null
    }
  }
}