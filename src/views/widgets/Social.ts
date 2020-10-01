import NameCard from '@/components/widgets/card/NameCard.vue'
export default {
  components: {
    NameCard
  },
  data() {
    return {
      users: [
        {
          jobTitle: 'Web Developer',
          name: 'Michael Wang',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          }
        },
        {
          jobTitle: 'Web Designer',
          name: 'Jessie J',
          color: 'pink',
          dark: true,
          avatar: {
            src: 'https://randomuser.me/api/portraits/women/1.jpg',
            size: '36'
          }
        },
        {
          jobTitle: 'Web Developer',
          name: 'Jim J',
          color: 'teal',
          dark: true,
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/10.jpg',
            size: '36'
          }
        },
        {
          jobTitle: 'Product Manager',
          name: 'John Doe',
          dark: true,
          cardBgImage: '/static/bg/15.jpg',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/5.jpg',
            size: '36'
          }
        }
      ]
    }
  }
}
