<template>
  <div>
    <el-tooltip effect="dark" content="疑问" placement="bottom">
      <el-button class=" btn-text can-hover" type="text" @click="dialogVisible = true">
        <nx-icon name="question-circle"/>
      </el-button>
    </el-tooltip>

  </div>
</template>

<script>
import nxIcon from '@/components/nx-icon'
export default {
  name: 'nx-help',
  components: {
    nxIcon
  },
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  &.qr {
    width: 100%;
  }
}
 .btn-text {
        color: #5a5e66;
        &.can-hover {
          &:hover {
            color: #FFEBA4;
            background-color:#5a5e66;
          }
        }
      }

</style>
