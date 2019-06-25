let API_HOST_NAME = window.location.hostname
API_HOST_NAME = (API_HOST_NAME === 'localhost') ? 'localhost' : API_HOST_NAME.replace('app', 'proxy')
API_HOST_NAME = 'https://core.appdev.sandbox3000.com'
export const API_URL = `${API_HOST_NAME}/api/v1/`
export const API_BASE_URL = `//${API_HOST_NAME}`
export const STORAGE_KEY = 'QBOOTSTRAP'
export const APP_NAME = 'Quasar Bootstrap'

export const MONTHS = [
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
  'December'
]
