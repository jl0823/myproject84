<template>
    <div>
        <h3>App组件——测试</h3>
        <p>哈哈哈哈哈哈哈</p>
        <ul>
            <todo-item v-for="item in todoDatas" :key="item.id" v-bind:item="item"></todo-item>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"APP",
        data(){
            return{
                todoDatas:[
                    {id:1,title:'吃饭',done:true},
                    {id:2,title:'睡觉',done:false},
                    {id:3,title:'打豆豆',done:true}
                ]
            }
        },
    }
</script>

<style lang="css" scoped>

</style>