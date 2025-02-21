import axios from '../axios'

export const getBitcoinCurrentPrice = async () => {
  const { data } = await axios.get(`/v1/bpi/currentprice.json`, {})
  return data
}
