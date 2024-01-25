<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      base: ''
    }
  },

  mounted() {
    // console.log(process.env.NODE_ENV);
    console.log(import.meta.env.BASE_URL);
    // console.log(this.$options.publicPath);
  },

  // created() {
  //   if (process.env.NODE_ENV === 'production') {
  //     console.log('Production URL:', Import.meta.env.BASE_URL);
  //   } else if (process.env.NODE_ENV === 'development') {
  //     console.log('Development URL:', import.meta.env.BASE_URL);
  //   } else {
  //     console.log('Other environment URL:', "Others");
  //   }
  // }

}

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
