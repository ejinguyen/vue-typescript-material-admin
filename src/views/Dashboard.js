import API from '@/api'
import EChart from '@/components/chart/echart'
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic'
import ProfileCard from '@/components/widgets/card/ProfileCard'
import PlainTable from '@/components/widgets/list/PlainTable'
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder'
import VWidget from '@/components/VWidget'
import Material from 'vuetify/es5/util/colors'
import BoxChart from '@/components/widgets/chart/BoxChart'
import ChatWindow from '@/components/chat/ChatWindow'
import CircleStatistic from '@/components/widgets/statistic/CircleStatistic'
import LinearStatistic from '@/components/widgets/statistic/LinearStatistic'
export default {
  name: 'PageDashboard',
  components: {
    VWidget,
    MiniStatistic,
    ChatWindow,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    linearTrending: [
      {
        subheading: 'Sales',
        headline: '2,55',
        caption: 'increase',
        percent: 15,
        icon: {
          label: 'mdi-trending-up',
          color: 'success'
        },
        linear: {
          value: 15,
          color: 'success'
        }
      },
      {
        subheading: 'Revenue',
        headline: '6,553',
        caption: 'increase',
        percent: 10,
        icon: {
          label: 'mdi-trending-down',
          color: 'error'
        },
        linear: {
          value: 15,
          color: 'error'
        }
      },
      {
        subheading: 'Orders',
        headline: '5,00',
        caption: 'increase',
        percent: 50,
        icon: {
          label: 'mdi-arrow-up',
          color: 'info'
        },
        linear: {
          value: 50,
          color: 'info'
        }
      }
    ],
    trending: [
      {
        subheading: 'Email',
        headline: '15+',
        caption: 'email opens',
        percent: 15,
        icon: {
          label: 'mdi-email-open',
          color: 'info'
        },
        linear: {
          value: 15,
          color: 'info'
        }
      },
      {
        subheading: 'Tasks',
        headline: '90%',
        caption: 'tasks completed.',
        percent: 90,
        icon: {
          label: 'mdi-view-list',
          color: 'primary'
        },
        linear: {
          value: 90,
          color: 'success'
        }
      },
      {
        subheading: 'Issues',
        headline: '100%',
        caption: 'issues fixed.',
        percent: 100,
        icon: {
          label: 'mdi-bug',
          color: 'primary'
        },
        linear: {
          value: 100,
          color: 'error'
        }
      }
    ]
  }),
  computed: {
    activity() {
      return API.getActivity()
    },
    posts() {
      return API.getPost(3)
    },
    siteTrafficData() {
      return API.getMonthVisit
    },
    locationData() {
      return API.getLocation
    }
  }
}