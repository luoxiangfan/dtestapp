<template>
  <div class="container">
    <div>
      <h1 class="title">
        dtestapp
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub homepage hx
        </a>
      </div>
    </div>
    <div>test branch hh aazs
      <div>sdcz</div>
    </div>
    <div>
      <p>cscxz</p>
    </div>
  </div>
</template>

<script>

export default {
  // async asyncData (context) {
  //   const { data } = await context.$axios.get('http://47.241.6.230:8080/coupons-management/green/index')
  //   // console.log(context)
  //   return { resData: data }
  // },
  data () {
    return {
      resData: {}
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
