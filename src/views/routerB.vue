<template>
    <div>
        <p>这是路由B页面</p>
        <p>{{this.$router.params.test}}</p>
        <p @click="toA">点我返回A页面</p>
    </div>
</template>
<script>
    export default {
        methods: {
            toA() {
                this.$router.push({
                    name: 'index'
                })
            }
        }
    }  
</script>