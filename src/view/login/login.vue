<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit" />
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'

export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit({ username, password }) {
      this.$store.dispatch('user/handleLogin', { username, password }).then(() => {
        this.$store.dispatch('user/getUserInfo').then(() => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }
  }
}
</script>

<style lang="less">
@import './login.less';
</style>
