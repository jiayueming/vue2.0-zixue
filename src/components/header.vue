<template>
    <div class="form-group">
        <label class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-10">
            <input type="text"  v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="username">
        </div>
        <div class="col-sm-10 col-sm-offset-2">
            <button type="button" v-on:click="submit" class="btn btn-default">提交2222222222222</button>
        </div>
    </div>
</template>
<script>
    export default {
        props:["placeholder"],
        data:function () {
            return {
                username:""
            }
        },
        methods:{
            userNameChange(){
                this.$store.state.form.user_name = this.username;
            },
            submit(){
                this.$store.commit("showUserName");
            }
        }
    }
</script>
<style>
    .form-width{
        width:60%;
        margin: auto;
        padding-top: 200px;
    }
</style>