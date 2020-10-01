import EChart from '@/components/chart/echart'
import {
  StackData,
  SinData,
  monthVisitData,
  campaignData,
  locationData
} from '@/api/chart'
import Material from 'vuetify/es5/util/colors'
import MiniChart from '@/components/widgets/chart/MiniChart.vue'
import BoxChart from '@/components/widgets/chart/BoxChart.vue'
import VWidget from '@/components/VWidget.vue'
export default {
  components: {
    BoxChart,
    MiniChart,
    EChart,
    VWidget
  },
  data() {
    return {
      selectedTab: 'tab-1',
      option: null,
      dataset: {
        sinData: SinData,
        monthVisit: monthVisitData,
        campaign: campaignData,
        location: locationData,
        stackData: StackData
      },
      color: Material
    }
  },
  created() {
    console.log((this as any).$refs.chart)
  },
  methods: {
    /* eslint-disable-line no-unused-vars */
    handleTabChange() {
      // make sure the chart resized while parent from hidden to show
      window.dispatchEvent(new Event('resize'))
    }
  }
}
