<template>
    <div class="Individual-Camera">
        <div class="mx-auto my-10 text-center">
            <h4
                class=" mx-auto max-w-[1050px] bg-blur backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-10 font-semibold text-white text-3xl py-3">
                Salna</h4>
            <div class="mx-auto">
                <video id="my-video" class="video-js w-full max-w-[1050px] mx-auto h-[500px]" autoplay controls
                    ref="videoElement">
                    <source src="http://103.113.152.106:8080/hls/gmp101.m3u8" type="application/x-mpegURL" />
                </video>
            </div>
        </div>

    </div>
</template>
  
  
<script>
import Hls from 'hls.js';

export default {
    data() {
        return {
            hls: null,
        };
    },
    mounted() {
        this.initializeHls();
    },
    methods: {
        initializeHls() {
            const video = this.$refs.videoElement;
            this.hls = new Hls();

            if (Hls.isSupported()) {
                this.hls.loadSource('http://103.113.152.106:8080/hls/gmp101.m3u8');
                this.hls.attachMedia(video);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = 'http://103.113.152.106:8080/hls/gmp101.m3u8';
            }

            // Handle errors and other events if needed
            this.hls.on(Hls.Events.ERROR, (event, data) => {
                console.error('HLS.js error:', data);
            });
        },
    },
};
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
  