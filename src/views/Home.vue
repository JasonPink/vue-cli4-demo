<template>
  <div class="home">
    <img alt="Vue logo" v-lazy="img" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      img: require('@/assets/images/logo.png')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
