const { todayMatches, upcomingMatches } = require('./matches')
const { popularTournaments } = require('./tournaments')

const homeData = {
  dateText: '6月10日',
  weekday: '星期二',
  tagline: '不错过每一场精彩对决',
  upcomingDate: '6月11日 · 星期三',
  todayMatches,
  popularTournaments,
  upcomingMatches
}

module.exports = homeData
