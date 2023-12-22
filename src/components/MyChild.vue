<template>
    <div>
        <h3>MyChild组件</h3>
        <p>{{num1+100}}</p>
        <p>{{message}}</p>
        <p>{{ num2 }}</p>
        <p>姓名:{{obj.name}} 年龄:{{ obj.age }}</p>
        <p>{{ propF }}</p>
    </div>
</template>

<script>
    export default {
        name:"MyChild",
        props:{
            num1:Number,//属性类型检查———传递来到num1必须是数值型
            message:{
                type:String,
                required:true,//属性必选项
            },
            num2:[String,Number],//属性类型检查———传递来到num2可以为多个类型！！
            obj:{
                type:Object,
                default:function(){
                    return {name:'李四',age:18}//设置默认值
                }
            },
            propF:{//开始自定义验证
                validator(value){
                    return value>100;//验证传入的值是否大于100,如果小于100则报错
                }
            }
        }
    }
</script>

<style lang="css" scoped>

</style>