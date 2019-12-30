import NavItem from '@/components/NavItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    NavItem,
  },
  computed: {
    ...mapGetters(['navData']),
  },
  methods: {
    onClickRouter(title) {
      this.$emit('click:router', title);
    },
  },
}