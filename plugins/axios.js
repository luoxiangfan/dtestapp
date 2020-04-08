
export default function ({ app: { $axios }}) {
  $axios.defaults.baseURL = 'http://47.241.6.230:8080/coupons-management/'
}
