<template>
    <div>
        <p>原始数据：{{msg}}</p>
        <p>改变后的数据：{{changemsg}}</p>
    </div>
</template>
<script>
    export default {
        data:function () {
            return {
                msg:"jiayueming",
            }
        },
       computed:{
           changemsg:function(){
                return this.msg.split("").reverse().join("");
            }
       }
    }
</script>
<style>
</style>