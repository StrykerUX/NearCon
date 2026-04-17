export interface Speaker {
  id: string
  name: string
  organization: string
  title: string
  imageUrl: string
  accentColor: string // hex: "#65D56E" etc
}

export interface ScheduleEvent {
  id: string
  startTime: string // "10:55 AM"
  endTime: string // "11:00 AM"
  location: string
  title: string
  description?: string
  speakers: Speaker[]
  moderator?: Speaker
  day: 1 | 2
}

export interface Sponsor {
  name: string
  displayType: 'text' | 'box' | 'empty'
  className?: string
  iconText?: string
  bg?: string
  textColor?: string
}

export interface Partner {
  name: string
  category: 'community' | 'media'
  className?: string
  icon?: string
  extra?: string
}
