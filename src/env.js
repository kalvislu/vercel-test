export const getEnv = (name) => {
  let value = null
  if (import.meta.env.NODE_ENV === 'development' || import.meta.env.VITE_APP_FRONTEND_ENVIRONMENT === 'development') {
    value = import.meta.env[name]
  } else {
    value = (window.globalJSConfig || {})[name] || import.meta.env[name]
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
