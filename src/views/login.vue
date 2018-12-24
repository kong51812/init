<template>
  <div>
    {{nickname |GFtest}}
    {{this.$store.state.base8000 |GFtest2}}
    <div>
      <input type="text" v-model="phne">
      <button @click="next">123123</button>
      <p @click="linkrouB">跳到路由B页面</p>
      <p @click="tobaidu">跳百度</p>
      <input type="file" name="s" id="s">
      <a href="http://img2.imgtn.bdimg.com/it/u=3407852600,1845840160&fm=26&gp=0.jpg" download="filename">下载test</a>
    </div>
  </div>
</template>
<script>
  import {
    Message
  } from 'element-ui';

  export default {
    data() {
      return {
        nickname: '123',
        phne: '222'

      };
    },
    created() {


      // alert(window.h5.abc)
      // window.external

      // document.write(window.external)
      // console.log(this.$store.state.cos)
      let {
        nickname
      } = this
      console.log(this.IsPasMob(1, 18524741059))

    },
    methods: {
      tobaidu() {
        window.location.href = "https://www.baidu.com";
      },
      linkrouB() {
        this.$router.push({
          name: 'routerB'
        })
      },
      abb() {
        console.log('这是js传入的function');
        alert(456)
      },
      next() {
        let test = {
          name: 'nicname'
        }
        // console.log()
        new QWebChannel(qt.webChannelTransport, function (channel) {
          window.external = channel.objects.bridge;
          alert(external)
        })

        // window.external.VerifyUserAccount('username', 'password')
        // console.log(window.external)
        // document.write(window.external)
        // alert(window.external)
        // console.log(window.external)
        // document.write()
        return
        // alert('2')
        // console.log('3')
        let {
          mobile,
          password,
          IsPasMob, //函数名
          $md5, //函数名
          $store
        } = this
        sessionStorage.setItem("user", JSON.stringify("login"));
        localStorage.setItem("loginPassword", JSON.stringify(password));

        if (!IsPasMob(password, phne)) {
          console.log('号码不对 returun啦')
          return
        } else {
          console.log('号码正确啦')
        }
        console.log($store.state.cos)
        console.log($store.state.base8000)
        axios.post($store.state.base8000 + "/auth/login", {
          Mobile: mobile,
          Password: $md5(password)
        }).then(response => {
          console.log(response)
        })
      }
    },
    mounted() {
      h5.showAlert = function () {
        alert(89858)
      }
    },


  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>