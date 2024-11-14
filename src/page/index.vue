<template>
<div>
    <el-button type="success" @click="suc">Success</el-button>
    <el-button type="danger" @click="err">danger</el-button>
    <el-button type="warning" @click="war">warning</el-button>
</div>

</template>

<script lang="ts" setup>
    import {a,b,c} from '../api/index'
    const suc = async()=>{
        const res =await a()        
    }
    const err = async()=>{
        const res = await b()
    }
    const war = async()=>{
        const res = c()
    }
</script>

<style scoped>

</style>