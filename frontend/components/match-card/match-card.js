Component({
  properties: {
    match: {
      type: Object,
      value: null
    }
  },
  methods: {
    onTap() {
      this.triggerEvent('select', { id: this.data.match.id })
    }
  }
})
