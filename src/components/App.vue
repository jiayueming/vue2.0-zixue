<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    data: function() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
}
</script>

<style >

    #app {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: auto;
        width:200px;
    }
    li {
        text-align: left;
        margin: 0 10px;

    }
    a {
        color: #42b983;
    }

</style>