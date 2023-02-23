<template lang="pug">
div
    header-bar
    .max-width.center
        v-row.pt-10.hidden-sm-and-down
            v-col(cols="2")        
                categories(:items="outstandCategory" title="Outstanding")
            v-col(cols="8")        
                carousel
                h1.color-main.pt-5 List of products
            v-col(cols="2")
                v-img(src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/7f/eb/d0/716a23a4268d2e6238189bc783cd2939.png.webp")
        carousel.mt-3.hidden-md-and-up

        // category for mobile
        mobile-categories.hidden-md-and-up(:items="outstandCategory" title="Outstanding")

        h1.color-main.hidden-md-and-up List of products

        // pc
        v-row.hidden-sm-and-down
            v-col(cols="2")
                categories(title="Category" :items="categories")
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
import { HeaderBar, Carousel, Categories, SubProduct, MobileCategories } from '@/components';

const Products = {
    components:{
        HeaderBar,
        Carousel,
        Categories,
        SubProduct,
        MobileCategories
    },
    data(){
        return {
            categories: [
                {text: 'Toys', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp'},
                {text: 'TASTY', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp'},
                {text: "Phones - Tablets", icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp'},
                {text: "Women's Shoes", icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp'},
                {text: 'Electric Appliances', icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp'},
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
            ]
        }
    }
}

export default Products
</script>

<style scoped lang="sass">
.max-width
    max-width: 1500px

.center
    margin: 0 auto
    text-align: center

.color-main
    color: #f57e2e
</style>