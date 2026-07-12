const todayMatches = [
  {
    id: 'match-gen-prx',
    tournament: 'VCT 太平洋赛区',
    time: '18:00',
    format: 'BO3',
    status: '直播中',
    statusType: 'live',
    homeTeam: { name: 'Gen.G', shortName: 'GEN', logoTone: 'gold' },
    awayTeam: { name: 'PRX', shortName: 'PRX', logoTone: 'dark' },
    homeScore: '1',
    awayScore: '0',
    leadingSide: 'home'
  },
  {
    id: 'match-fnc-th',
    tournament: 'VCT EMEA',
    time: '20:30',
    format: 'BO3',
    status: '未开始',
    statusType: 'upcoming',
    homeTeam: { name: 'FNC', shortName: 'FNC', logoTone: 'orange' },
    awayTeam: { name: 'TH', shortName: 'TH', logoTone: 'dark' },
    homeScore: null,
    awayScore: null,
    leadingSide: ''
  },
  {
    id: 'match-sen-100t',
    tournament: 'VCT 美洲赛区',
    time: '23:00',
    format: 'BO5',
    status: '未开始',
    statusType: 'upcoming',
    homeTeam: { name: 'SEN', shortName: 'SEN', logoTone: 'red' },
    awayTeam: { name: '100T', shortName: '100', logoTone: 'blue' },
    homeScore: null,
    awayScore: null,
    leadingSide: ''
  }
]

const upcomingMatches = [
  {
    id: 'schedule-edg-fpx',
    tournament: 'VCT CN',
    time: '16:00',
    homeTeam: { name: 'EDG', shortName: 'E', logoTone: 'dark' },
    awayTeam: { name: 'FPX', shortName: 'F', logoTone: 'red' }
  },
  {
    id: 'schedule-drx-t1',
    tournament: 'VCT Pacific',
    time: '18:00',
    homeTeam: { name: 'DRX', shortName: 'D', logoTone: 'dark' },
    awayTeam: { name: 'T1', shortName: 'T1', logoTone: 'gold' }
  }
]

module.exports = {
  todayMatches,
  upcomingMatches
}
