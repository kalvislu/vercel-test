import fakeResponse from './fake-response'

export default {
  get(url, { isError = false, timeout = 1000 } = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isError) reject(new Error('FAKE ERROR'))
        else resolve(fakeResponse[url])
      }, timeout)
    })
  },
}
