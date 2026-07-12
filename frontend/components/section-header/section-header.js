Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    actionText: {
      type: String,
      value: '全部 ›'
    }
  },
  methods: {
    onAction() {
      this.triggerEvent('action')
    }
  }
})
