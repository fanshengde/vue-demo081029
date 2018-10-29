<template>
</template>

<script>
import nxIcon from '@/components/nx-icon'
export default {
  name: 'nx-github',
  components: { nxIcon },
  data() {
    return {
      url: 'https://github.com/mgbq/nxAdmin-template/'
    }
  },
  methods: {
    handleClick() {
      window.open(this.url)
    }
  }
}
</script>


<style lang="scss" scoped>
.link {
  color: #FFF;
  text-decoration: none;
}
</style>
