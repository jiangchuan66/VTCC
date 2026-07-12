const homeMock = require('../../mock/home')

const HOME_STATES = ['normal', 'loading', 'empty', 'error']
const SEARCH_DELAY = 250
const BLUR_DELAY = 180
const RETRY_DELAY = 700
const TOAST_DURATION = 1500

Page({
  data: {
    statusBarHeight: 24,
    home: homeMock,
    todayState: 'normal',
    searchValue: '',
    searchFeedback: '输入关键词后，将匹配赛事、战队或选手。',
    showSearchFeedback: false,
    toastText: '',
    toastVisible: false
  },

  onLoad(options) {
    const windowInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync()
    const requestedState = HOME_STATES.includes(options.state) ? options.state : 'normal'

    this.setData({
      statusBarHeight: windowInfo.statusBarHeight || 24,
      todayState: requestedState
    })
  },

  onUnload() {
    clearTimeout(this.searchTimer)
    clearTimeout(this.blurTimer)
    clearTimeout(this.retryTimer)
    clearTimeout(this.toastTimer)
  },

  onSearchFocus() {
    clearTimeout(this.blurTimer)
    this.setData({ showSearchFeedback: true })
  },

  onSearchInput(event) {
    const searchValue = event.detail.value.trim()
    clearTimeout(this.searchTimer)
    this.setData({ searchValue })

    this.searchTimer = setTimeout(() => {
      const searchFeedback = searchValue
        ? `正在搜索“${searchValue}”`
        : '输入关键词后，将匹配赛事、战队或选手。'
      this.setData({ searchFeedback })
    }, SEARCH_DELAY)
  },

  onSearchBlur() {
    this.blurTimer = setTimeout(() => {
      this.setData({ showSearchFeedback: false })
    }, BLUR_DELAY)
  },

  onStateAction(event) {
    if (event.detail.state === 'empty') {
      this.scrollToSchedule()
      return
    }

    this.setData({ todayState: 'loading' })
    this.retryTimer = setTimeout(() => {
      this.setData({ todayState: 'normal' })
      this.showToast('赛事数据已更新')
    }, RETRY_DELAY)
  },

  scrollToSchedule() {
    const query = wx.createSelectorQuery()
    query.select('#upcoming-schedule').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(results => {
      const sectionRect = results[0]
      const viewport = results[1]
      if (!sectionRect || !viewport) return

      wx.pageScrollTo({
        scrollTop: sectionRect.top + viewport.scrollTop - 12,
        duration: 300
      })
    })
  },

  onMatchSelect() {
    this.showToast('比赛详情将在后续页面提供')
  },

  onTournamentSelect() {
    wx.switchTab({ url: '/pages/tournaments/tournaments' })
  },

  onViewAll() {
    wx.switchTab({ url: '/pages/tournaments/tournaments' })
  },

  onMoreTap() {
    this.showToast('更多操作')
  },

  onCalendarTap() {
    this.showToast('日期选择器将在后续提供')
  },

  showToast(toastText) {
    clearTimeout(this.toastTimer)
    this.setData({ toastText, toastVisible: true })
    this.toastTimer = setTimeout(() => {
      this.setData({ toastVisible: false })
    }, TOAST_DURATION)
  }
})
