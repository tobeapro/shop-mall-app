<template lang="pug">
  .child
    p name:{{name}}
</template>
<script>
export default {
  name:'child',
  data(){
    return {
      name:'child component'
    }
  }
}
</script>
<style lang="scss">
  .child{
    text-align: center
  }
</style>

