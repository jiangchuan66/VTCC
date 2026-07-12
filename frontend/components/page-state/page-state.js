Component({
  properties: {
    state: {
      type: String,
      value: 'normal'
    }
  },
  methods: {
    onAction() {
      this.triggerEvent('action', { state: this.data.state })
    }
  }
})
