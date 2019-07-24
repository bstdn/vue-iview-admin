<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvatar" />
      <Icon :size="18" type="md-arrow-dropdown" />
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/handleLogOut').then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    handleClick() {
      this.logout()
    }
  }
}
</script>

<style lang="less">
  @import './user.less';
</style>
