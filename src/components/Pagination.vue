<template>
  <hr class="my-4" />
  <div class="demo-pagination-block">
    <el-pagination
        :page-sizes="props.pageSize"
        :size="props.size"
        :disabled="props.disabled"
        :background="props.background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="props.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        hide-on-single-page
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type:String,
    default:"default",
  },
  disabled:{
    type:Boolean,
    default:false
  },
  total:{
    type:Number,
    default:1
  },
  background:{
    type:Boolean,
    default:false
  },
  pageSize:{
    type:Array,
    default:[100, 200, 300, 400]
  }
})
const emit = defineEmits(["size","current"])
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  emit("size", val)
}
const handleCurrentChange = (val: number) => {
  emit("current", val)
}
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
