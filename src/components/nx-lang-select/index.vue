<template>
</template>

<script>
import nxSvgIcon from '@/components/nx-svg-icon/index'
export default {
  name: 'nx-lang-select',
  components: { nxSvgIcon },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.international-icon {
  font-size: 22px;
  cursor: pointer;
  vertical-align: -5px!important;
}
.el-dropdown{
  color:#5a5e66;
}
</style>


