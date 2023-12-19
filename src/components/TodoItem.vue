<template>
    <div>
        <h1>这是一个全局组件</h1>
        <h3>吼吼吼吼吼吼吼</h3>
        <li>todo的标题{{msg}}
            <p>{{item.title}}</p>
        </li>
    </div>
</template>

<script>
    export default {
        name: "todoItem",
        props:["item"],
        data(){
            return{
                msg:"Tom"
            }
        },
        created(){
            console.log("todo-item组件被创建了",this);
        }
    }
</script>

<style lang="css" scoped>

</style>