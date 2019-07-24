<template>
  <!-- eslint-disable -->
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="username">
      <Input v-model="form.username" placeholder="请输入用户名">
        <Icon slot="prepend" :size="16" type="ios-person" />
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input v-model="form.password" type="password" placeholder="请输入密码">
        <Icon slot="prepend" :size="14" type="md-lock" />
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" long @click="handleSubmit">登录</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    usernameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '账号不能为空', trigger: 'blur' }]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  data() {
    return {
      form: {
        username: 'admin',
        password: '111111'
      }
    }
  },
  computed: {
    rules() {
      return {
        username: this.usernameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            username: this.form.username,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>
