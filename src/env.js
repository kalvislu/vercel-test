export const getEnv = (name) => {
  let value = null
  if (process.env.NODE_ENV === 'development' || process.env.VUE_APP_FRONTEND_ENVIRONMENT === 'development') {
    value = process.env[name]
  } else {
    value = (window.globalJSConfig || {})[name] || process.env[name]
  }
  if (value === 'true') {
    return true
  } else if (value === 'false') {
    return false
  } else if (!isNaN(Number(value))) {
    return Number(value)
  } else {
    return value
  }
}
