/**
 * Time duration constants represented in milliseconds.
 */
export const MS_SECOND = 1000
export const MS_MINUTE = 60 * MS_SECOND
export const MS_HOUR = 60 * MS_MINUTE
export const MS_DAY = 24 * MS_HOUR
export const MS_WEEK = 7 * MS_DAY
export const MS_MONTH = 30 * MS_DAY
export const MS_YEAR = 365 * MS_DAY

/**
 * Predefined date format strings.
 */
export const DATE_FORMAT_ISO = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'
export const DATE_FORMAT_SHORT = 'YYYY-MM-DD'
export const DATE_FORMAT_LONG = 'dddd, MMMM Do YYYY'
export const DATE_FORMAT_TIME = 'HH:mm:ss'

/**
 * Common timezone identifiers.
 */
export const TIMEZONE_UTC = 'UTC'
export const TIMEZONE_EST = 'America/New_York'
export const TIMEZONE_PST = 'America/Los_Angeles'
export const TIMEZONE_AEST = 'Australia/Sydney'
export const TIMEZONE_ACST = 'Australia/Adelaide'
export const TIMEZONE_AWST = 'Australia/Perth'
export const TIMEZONE_ACT = 'Australia/Canberra'

/**
 * Abbreviated and full names of days of the week.
 */
export const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const DAYS_LONG = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

/**
 * Abbreviated and full names of months.
 */
export const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
export const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/**
 * Constants related to current time and date.
 */
export const EPOCH_TIME = new Date(0)
export const CURRENT_YEAR = new Date().getFullYear()
export const CURRENT_MONTH = new Date().getMonth() + 1
export const CURRENT_DAY = new Date().getDate()
export const CURRENT_HOUR = new Date().getHours()
export const CURRENT_MINUTE = new Date().getMinutes()
