<template lang="pug">
v-carousel(:height="height")
    v-carousel-item(v-for='(image,i) in images' :key='i' :src='image' reverse-transition='fade-transition' transition='fade-transition')
</template>

<script>
const Carousel = {
    props:['isMobile'],
    data(){
        return{
            images:[
                'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/d1/88/0e/7486dac65bda794dcd9210098a2740d0.png.webp',
                'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/e7/d1/89/8f7d4ea4538c87656f1e16674d8a3976.png.webp'
            ],
            height: 250
        }
    },
    mounted(){
        const width = screen.width
        if(width <= 600) this.height = 150
        else if(width <= 900 && width > 600) this.height = 200
        else this.height = 250
    }
}

export default Carousel
</script>