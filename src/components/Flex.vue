<template>
  <div class="flex-wrap">
    <div class="item" v-for="(item, index) in list" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style lang="scss" scoped>
//*************动态计算margin*************//
// .flex-wrap {
//   width: 500px;
//   margin: 0 auto;
//   display: flex;
//   flex-wrap: wrap;
//   .item {
//     width: 24%;
//     height: 100px;
//     margin-bottom: 25px;
//     background: skyblue;
//     &:not(:nth-child(4n)) {
//       margin-right: calc(4% / 3);
//     }
//   }
// }
//*************利用伪类选择器*************//
// .flex-wrap {
//   width: 500px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   .item {
//     width: 24%;
//     height: 100px;
//     margin-bottom: 25px;
//     background: skyblue;
//     /* 如果最后一行是3个元素 */
//     &:last-child:nth-child(4n - 1) {
//       margin-right: calc(24% + 4% / 3);
//     }
//     /* 如果最后一行是2个元素 */
//     &:last-child:nth-child(4n - 2) {
//       margin-right: calc(48% + 8% / 3);
//     }
//   }
// }
//*************利用伪类选择器*************//
.flex-wrap {
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    // width: 24%;
    width: 100px;
    height: 100px;
    margin: 10px;
    background: skyblue;
  }
  &::after {
    content: '';
    flex: auto;
  }
}
//*************使用空白元素占位*************//

//*************gird*************//
.flex-wrap {
  width: 500px;
  margin: 0 auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 10px;
  .item {
    // width: 24%;
    width: 100px;
    height: 100px;
    margin-top: 10px;
    background: skyblue;
  }
}
</style>
