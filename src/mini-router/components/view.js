export default {
  name: 'RouterView',
  render (h) {
    let depth = 0
    let parent = this.$parent
    const route = parent.$route

    while (parent) {
      if (parent.$options.name === "RouterView") {
        depth++
      }
      parent = parent.$parent
    }

    const record = route.matched[depth]
    if (record) {
      return h(record.component)
    } else {
      return h()
    }
  },
}