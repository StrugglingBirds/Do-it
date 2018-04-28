<template>
  <div class="search">
    <header>
      <span>关闭</span>
      <input type="search">
    </header>
  </div>
</template>
<script>
export default {
  name: '',
  props: [ 'noheader' ],
  mounted () {
    console.log(this.noheader)
  }
}
</script>
<style scoped>

</style>
