<template>
    <div class="about">
        <div class="grid lg:grid-cols-3 gap-5 m-5 px-20">
            <div
                class="card w-auto shadow-xl bg-blur text-black backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-10 border border-opacity-60 border-gray-300">
                <div class="card-body">

                    <RouterLink to="/individual">
                        <h2 class="text-center lg:text-2xl">Salna In</h2>
                    </RouterLink>
                </div>
            </div>

            <div
                class="card w-auto shadow-xl bg-blur text-black backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-10 border border-opacity-60 border-gray-300">
                <div class="card-body">
                    <h2 class="text-center lg:text-2xl">Salna Out</h2>
                </div>
            </div>

            <div
                class="card w-auto shadow-xl bg-blur text-black backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-10 border border-opacity-60 border-gray-300">
                <div class="card-body">
                    <h2 class="text-center lg:text-2xl">Porabari In</h2>
                </div>
            </div>



        </div>
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
  