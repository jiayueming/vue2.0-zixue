<template>
    <div  v-on:mousemove="dragMove()" class="div2">
        <div id="div1" v-on:mousedown="dragDown()" v-on:mouseup="dragUp()"
             v-bind:style="{ left: this.left+'px' , top: this.top+'px' }"></div>
    </div>

</template>
<script>
    export default {
        data:function () {
            return {
                flag:false,
                mouseDownX:0,
                mouseDownY:0,
                initX:0,
                initY:0,
                left:0,
                top:0
            }
        },
       methods: {
           dragDown(e){
               //鼠标按下时的鼠标所在的X，Y坐标
               this.mouseDownX = window.event.pageX;
               this.mouseDownY = window.event.pageY;

               //初始位置的X，Y 坐标
               const obj = document.getElementById("div1");
               this.initX = obj.offsetLeft;
               this.initY = obj.offsetTop;

               //表示鼠标已按下
               this.flag = true;
           },
           dragMove(e){
               if(this.flag) {
                   let mouseMoveX = window.event.pageX;
                   let mouseMoveY = window.event.pageY;
                   this.left = parseInt(mouseMoveX) - parseInt(this.mouseDownX) + parseInt(this.initX)
                   this.top = parseInt(mouseMoveY) - parseInt(this.mouseDownY) + parseInt(this.initY)
               }
           },
           dragUp(){
               //标识已松开鼠标
               this.flag = false;
           }
       }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .div2{
        width: 100%;
        height: 100vh;
        background: yellowgreen;
    }
    #div1 {
        position: absolute;
        width: 100px;
        height: 100px;
        cursor: move;
        background-color: red;
    }
</style>