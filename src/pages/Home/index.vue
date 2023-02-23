<template lang="pug">
div
    header-bar
    .max-width.center
        v-row.pt-10.hidden-sm-and-down
            v-col(cols="2")        
                categories(:items="outstandCategory" title="Outstanding")
            v-col(cols="8")        
                carousel
                h1.color-main.pt-5 Welcome to autoxuanphuc
            v-col(cols="2")
                v-img(src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/7f/eb/d0/716a23a4268d2e6238189bc783cd2939.png.webp")
        carousel.mt-3.hidden-md-and-up
        // category for mobile
        mobile-categories.hidden-md-and-up(:items="outstandCategory" title="Outstanding")

        // cancel float left
        div(style="clear:both;")
        v-img.hidden-md-and-up(src="https://newsupdatetimes.com/wp-content/uploads/2021/01/Grand-Auto-Bazaar1-c3opy.jpg")
        h1.color-main.hidden-md-and-up Welcome to autoxuanphuc

        // pc
        v-row.pt-2.hidden-sm-and-down 
            v-col(cols="2")
                categories(title="Category" :items="categories")
            v-col(cols="10")
                .trademark.linear-color
                    v-img.float-left.ma-3.justify-center(v-for="(img,index) in trademarkImgs" :key="index" :src="img" width="180")

        // mobile
        .trademark.linear-color.hidden-md-and-up.pl-1
            v-list-item.pa-0
                v-img.float-left.ma-2.justify-center(v-for="(img,index) in trademarkImgs" :key="index" :src="img" width="110")

        h2.color-main.mt-10 List of featured products
        // pc
        v-row.hidden-sm-and-down
            v-col(cols="2")
            v-col(cols="10")
                .list-product 
                    sub-product.pa-2(v-for="prd in products" :product="prd")

        // mobile
        v-row.hidden-md-and-up.hidden-sm-only
            v-col(cols="6" v-for="prd in products")
                v-list-item
                    sub-product(:product="prd")

        // tab
        v-row.hidden-md-and-up.hidden-xs-only
            v-col(cols="4" v-for="prd in products")
                v-list-item
                    sub-product(:product="prd")
</template>

<script>
import { HeaderBar, Categories, Carousel, SubProduct, MobileCategories } from '@/components'

const Home = {
    components: {
        HeaderBar,
        Categories,
        Carousel,
        SubProduct,
        MobileCategories
    },
    data(){
        return{
            trademarkImgs:[
                'https://salt.tikicdn.com/ts/tikimsp/f7/0f/06/c574c664067973c2b5afbfe7b864e2d9.png',
                'https://salt.tikicdn.com/ts/tikimsp/fb/83/06/6135296fed61a3d0ef7a45b05a7ecb5f.jpeg',
                'https://salt.tikicdn.com/ts/tikimsp/f8/cb/60/247452e0ee4730bdefdec4309902a2bd.png',
                'https://salt.tikicdn.com/ts/tikimsp/7b/9a/6d/a7cf114f6fb4e4cdba27a18403a9a843.png',
                'https://salt.tikicdn.com/ts/tikimsp/9c/24/71/1a2bb79efb4b8ea42b0a183f2d52605f.jpeg',
                'https://salt.tikicdn.com/ts/tikimsp/6f/e8/a9/7fc8168cb3a21f94631059c5e9b5f9fb.png'
            ],
            outstandCategory:[
                { text: 'Good Price Every Day', icon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp', mIcon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp'},
                {text: 'Discount code', icon:'https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp', mIcon:'https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp'},
                {text: 'Endow', icon:'https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp', mIcon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp'},
                {text: 'Cargo insurance', icon:'https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp', mIcon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp'},
                {text: 'Buy first, pay later', icon:'https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp', mIcon: 'https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp'},
                {text: 'Super Hot', icon:'https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp', mIcon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp'},
                {text: 'Buy Now Pay Later', icon:'https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp', mIcon: 'https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp'},
            ],
            categories: [
                {text: 'Toy', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp'},
                {text: 'Drinks', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp'},
                {text: 'Phone', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp'},
                {text: 'Footwear', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp'},
                {text: 'Electrical Appliances', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp'},
            ],
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
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/07/e8/01/f544cc482d2988355b5d80590b503c35.jpg.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 4,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
                {
                    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/07/e8/01/f544cc482d2988355b5d80590b503c35.jpg.webp',
                    name: 'Kemin K20 - 20L car refrigerator',
                    star: 3,
                    sales: 1000,
                    price: '1,000,000',
                    cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                    shipCmt: 'Delivery all, weekdays'
                },
            ]
        }
    }
}
export default Home
</script>

<style lang="sass" scoped>
.max-width
    max-width: 1500px

.center
    margin: 0 auto
    text-align: center
.color-main
    color: #f57e2e
.linear-color
    display: block
    overflow: auto
    background-image: linear-gradient(#f57e2e, white)
</style>