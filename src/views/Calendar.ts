import Vue from 'vue'
import { mapGetters } from 'vuex'
import EventForm from '@/components/form/EventForm.vue'

export default Vue.extend({
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
    viewDay({ date }: any) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event: { color: any }) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      (this as any).$refs.calendar.prev()
    },
    next() {
      (this as any).$refs.calendar.next()
    },
    handleEditEvent({ nativeEvent, event }: any) {
      console.log(event)
      this.selectedEvent = event
      this.showEventDialog = true
      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }: any) { },
    rnd(a: number, b: number) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    handleDateClick(e: any) {
      console.log(e)
    },
    handleDayClick({ date }: any) {
      this.selectedEvent = {
        name: '',
        start: new Date(date),
        end: new Date(date),
        color: 'primary'
      }
      this.showEventDialog = true
    },
    handleTimeClick({ date }: any) {
      this.selectedEvent = {
        name: '',
        start: new Date(date),
        end: new Date(date),
        color: 'primary',
        timed: false
      }
      this.showEventDialog = true
    },
    handleIntervalClick(e: any) {
      console.log('interval click', e)
    },
    handleCloseDialog() {
      (this as any).showEventDialog = false;
      (this as any).selectedEvent = null
    }
  }
})
