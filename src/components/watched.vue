<template>
    <div id="demo">{{ fullName }}</div>
</template>
<script>
export default {
    data: function(){
        return{
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        }

    },
    watch: {
//        指定监听的对象firstName
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
}
 </script>