<template>
  <div class="BG">
  
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        count: 0
      }
    },
    created() {
    },
    methods: {
    }

  }
</script>
<style lang="scss">
  .BG {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;

  }
</style>