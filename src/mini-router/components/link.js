export default {
  props: {
    to: {
      type: String
    },
    tag: {
      type: String,
      default: () => 'a'
    }
  },
  computed: {
    active () {
      const matchPaths = this.$route.matched.map(route => route.path)
      const index = matchPaths.indexOf(this.$route.path)
      return matchPaths.slice(0, index + 1).includes(this.to)
    }
  },
  methods: {
    onClick () {
      this.$router.push(this.to)
    }
  },
  render () {
    return (
      <this.tag onCLick={this.onClick} href="javascript:;" class={{ 'router-link.active': this.active }} >
        {this.$slots.default}
      </this.tag>
    )
  },
}