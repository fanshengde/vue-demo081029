<template>
  <div class="app-container">
   <nx-github-corner></nx-github-corner>
     <!-- <a target="_blank" href="https://github.com/mgbq/vue-permission"><img
        style="position: absolute; top: 48px; right: 0; border: 0;"
        src="../../../static/img/report/forkme.png"
        alt="Fork me on GitHub"></a> -->
    <div class="item">
      <h4>异常统计</h4>
      <nx-data-display :option="option"></nx-data-display>
    </div>
    <div class="item">
      <h4>资源统计</h4>
      <nx-data-tabs :option="easyDataOption"></nx-data-tabs>
    </div>
    <div class="item">
      <h4>运维统计</h4>
      <nx-data-icons :option="easyDataOption1"></nx-data-icons>
    </div>
  </div>
</template>

<script>

import nxDataDisplay from '@/components/nx-data-display/nx-data-display'
import nxDataCard from '@/components/nx-data-card/nx-data-card'
import nxDataTabs from '@/components/nx-data-tabs/nx-data-tabs'
import nxDataIcons from '@/components/nx-data-icons/nx-data-icons'
import nxGithubCorner from '@/components/nx-github-corner'
export default {
  name: 'report',
  components: {
    nxDataDisplay,
    nxDataCard,
    nxDataTabs,
    nxDataIcons,
    nxGithubCorner

  },
  data() {
    return {
      option: {
        span: 8,
        color: '#15A0FF',
        data: [
          {
            count: 1000,
            title: '日异常数'
          },
          {
            count: 3000,
            title: '月异常数'
          },
          {
            count: 20000,
            title: '年异常数'
          }
        ]
      },
      easyDataOption: {
        span: 6,
        data: [
          {
            title: '服务器统计',
            subtitle: '实时',
            count: 7993,
            allcount: 10222,
            text: '当前分类总错误数',
            color: 'rgb(49, 180, 141)',
            key: '类'
          },
          {
            title: '网络设备统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前分类总错误数',
            color: 'rgb(56, 161, 242)',
            key: '附'
          },
          {
            title: '中间件统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '当前分类总错误数',
            color: 'rgb(117, 56, 199)',
            key: '评'
          },
          {
            title: '数据库统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '当前分类总错误数',
            color: 'rgb(59, 103, 164)',
            key: '新'
          }
        ]
      },
      easyDataOption1: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        data: [
          {
            title: '实时告警',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '告警分析',
            count: 22139,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '实时处理',
            count: 35623,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '已处理',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '未处理',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '处理中',
            count: 16826,
            icon: 'icon-caidanguanli'
          }
        ]
      }
    }
  },
  created() {},
  watch: {},
  mounted() {},
  computed: {}
}
</script>

<style scoped>
.item {
  margin-bottom: 16px;
}
</style>
<style lang ="scss">
    @import '../../styles/data-card.scss';
    @import '../../styles/data-display.scss';
    @import '../../styles/data-icons.scss';
    @import '../../styles/data-tabs.scss';
</style>
