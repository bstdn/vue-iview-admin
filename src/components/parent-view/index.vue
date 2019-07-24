<template>
  <keep-alive>
    <router-view ref="child" />
  </keep-alive>
</template>

<script>
export default {
  name: 'ParentView'
}
</script>
