<template>
  <div class="course">
      <p>孔公子的微信小程序启动模板</p>
    <!-- <van-button type="danger">危险按钮</van-button>
    <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button> -->
    <ul>
      <li v-for="(item,index) in items" :key='item.id' @click="linkto(item,index)">
        <img :src="item.cover" alt="">
        <div class="con">
          <p class="title">{{item.name}}</p>
          <p class="courcon">{{item.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
var Fly = require("flyio/dist/npm/wx");
var fly = new Fly();
  export default {
    data() {
      return {
        items: []
      }
    },
    created() {
      fly.post("").then(res => {
        this.items = res.data;
        console.log(res)
      })

    },
    methods: {
      linkto(item, index) {

      },
      goTo(url) {
        this.$router.push(url);
      }
    }
  }
</script>

<style scoped>
  .course {
    margin: 10px auto;
    width: 100%;
    background: #efeef4;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
  }

  .course ul {
    width: 90%;
    margin: 10px auto;
  }

  .course ul li {
    margin: 10px 0;
  }

  .course img {
    width: 100%;
    height: 150px;
    margin: 0 0 -5px 0;
  }

  .course .title {
    font-size: 16px;
    margin: 10px 0;
  }

  .course .con {
    margin: 0;
    padding: 10px;
    background: white;
  }

  .course .courcon {
    color: #7f7f7f;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>