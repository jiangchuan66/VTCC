Component({
  properties: {
    tournament: {
      type: Object,
      value: null
    }
  },
  methods: {
    onTap() {
      this.triggerEvent('select', { id: this.data.tournament.id })
    }
  }
})
