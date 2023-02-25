<template lang="pug">
div
    header-bar
    .max-width.center
        product-detail.max-width.center.pt-10(:screen-type="screenType")
        v-divider.mt-5
        h1.color-main.text-center Similar product
        .list-product
            v-btn.mt-10(icon @click="onScrollX('prev')")
                v-icon(x-large) mdi-skip-previous-circle-outline
            .list-product-content(ref="listProduct")
                sub-product.pa-2(v-for="prd in products" :product="prd")
            v-btn.mt-10(icon @click="onScrollX('next')")
                v-icon(x-large) mdi-skip-next-circle-outline
            
</template>

<script>
import { HeaderBar, ProductDetail, SubProduct } from '@/components'

const detail = {
    props: ['value'],
    components: {
        HeaderBar,
        ProductDetail,
        SubProduct
    },
    data() {
        return {
            screenType: 'pc',
            products: [
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/07/e8/01/f544cc482d2988355b5d80590b503c35.jpg.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 5,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/5f/34/c5/f8dfba6a9d5f0c5039ac60a3d5f52b75.jpg.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 4,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/94/e5/e2/7a9f6c6229ee8bd7c0936bc3d02274f9.png.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 3,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/3d/f0/3c/e7b128fc34b08ec89aad89effe724493.png.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 3,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/5d/50/5e/1d977cb23133c625f0baf7f4326cf523.jpg.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 3,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/5c/0c/67/f780def416c4824ee0769e5751039ff0.png.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 3,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/4b/f1/a7/51c9ca4623d02298277ac602527b4b99.jpg.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 3,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/0a/1b/6f/f10c9b6d46eb9ce35591519770bc4ca5.png.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 3,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
            ]
        }
    },
    mounted() {
        const widthScreen = screen.width
        if (widthScreen > 1000) this.screenType = 'pc'
        else if (widthScreen > 600) this.screenType = 'tab'
        else this.screenType = 'mobile'
    },
    methods: {
        onScrollX(action){
            let pos = this.$refs.listProduct.scrollLeft
            if (pos < 0) return
            if (action === 'prev') pos -= 300
            if (action === 'next') pos += 300
            this.$refs.listProduct.scroll({left: pos, behaviour: 'smooth'})
        }
    }
}

export default detail
</script>

<style scoped lang="sass">
.max-width
    max-width: 1500px

.center
    margin: 0 auto
    text-align: center

.color-main
    color: #f57e2e
.list-product
    display: flex
    box-sizing: border-box
.list-product-content
    width: 90%
    margin: 0 auto
    display: flex
    overflow-x: auto
    box-sizing: border-box

.list-product-content::-webkit-scrollbar
    width: 0
</style>