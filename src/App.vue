<template>
    <div>
        <h3>App组件——测试</h3>
        <input type="text" v-model="num1">
        <hr>
        <my-child :num1="num1" :message="msg" :num2="num2" :obj="obj" :propF="num3"></my-child>
    </div>
</template>

<script>
import MyChild from './components/MyChild.vue'
    export default {
        name:"APP",
        data(){
            return{
                todoDatas:[
                    {id:1,title:'吃饭',done:true},
                    {id:2,title:'睡觉',done:false},
                    {id:3,title:'打豆豆',done:true}
                ],
                num1:200,
                msg:"Tom",
                num2:500,
                obj:{name:"颤三",age:20},
                num3:150
            }
        },
        components:{
            MyChild
        }
    }
</script>

<style lang="css" scoped>

</style>