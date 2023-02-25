<template lang="pug">
div
    v-row 
        v-col(:cols="screenType === 'pc' ? 4 : (screenType === 'tab' ? 5 : 12)")
            .pa-4
                v-row 
                    v-col(cols="12")
                        v-img(src="https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/72/2a/39/7c5011e28068e24c0ba90283d291af40.jpg.webp")
                v-row 
                    v-col(cols="3")
                        v-img(src="https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/72/2a/39/7c5011e28068e24c0ba90283d291af40.jpg.webp")
                    v-col(cols="3")
                        v-img(src="https://salt.tikicdn.com/cache/750x750/ts/product/89/3e/19/ad4dab5a03110603cba836c3853b2ae1.jpg.webp")
                    v-col(cols="3")
                        v-img(src="https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/27/ce/66/efc719247e9dfe784acee4004e80f9ed.jpg.webp")
                    v-col(cols="3")
                        v-img(src="https://salt.tikicdn.com/cache/280x280/ts/product/31/eb/8d/2ae1397fa0ee2365f86a7e9df1dce005.jpg.webp")
        v-col(:cols="screenType === 'pc' ? 8 : (screenType === 'tab' ? 7 : 12)")
            .pa-4
                p.align-left Brand: {{ product.trademark }}
                h1.align-left {{ product.name }}
                p.align-left
                    v-icon(v-for="i in product.star" color="#f57e2e") mdi-star
                    span.pa-6 Sold: {{ product.sales }}
                p.align-left
                    del {{ product.cost }} --> 
                    span.price {{ product.price }}
                p.align-left 
                    span Transport
                    v-icon.pl-3(color="#f57e2e") mdi-plane-car
                    span.pl-3 Free shipping
                p.align-left.pl-2 Shipping from Hanoi
                div.discount
                    p.pl-2.title-discount.align-left Buy Big Quantity To Get Special Offer
                    v-checkbox.pl-2(
                        label="Buy 10 products to save money"
                    )
                p.align-left.pt-4 Quantity
                fast-input-quantity.align-left(
                    :value="product.quantity"
                    @change-value="changeQuantity($event)"
                )
                // cancel float left
                div(style="clear: both;")
                v-list-item.pa-0
                    v-btn(color="#f57e2e" :disabled="product.quantity === 0").white--text.align-left.mt-2 Buy Now
                    v-btn.align-left.mt-2.ml-2(:disabled="product.quantity === 0")
                        span.color-main Add to Cart
    
</template>

<script>
import FastInputQuantity from '../FastInputQuantity/index.vue';

const ProductDetail = {
    props: ['screenType'],
    components: {
        FastInputQuantity
    },
    data() {
        return {
            product: {
                trademark: 'Downy',
                name: 'Downy Sweet Flower Softener Bottle 800ml',
                star: 4,
                sales: 1634,
                price: '₹398',
                cost: '₹500',
                quantity: 1
            },
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
    },
    methods: {
        changeQuantity(action) {
            if(this.product.quantity === 0 && action === '-') return
            if (action === '+') this.product.quantity += 1
            if (action === '-') this.product.quantity -= 1
        }
    }
}

export default ProductDetail
</script>

<style scoped lang="sass">
.align-left
    text-align: left
.price
    color: rgb(255, 57, 69)
    font-size: 30px
.discount
    width: 400px
    border: 2px solid #f57e2e
    border-radius: 5px
.title-discount
    font-size: 18px
.color-main
    color: #f57e2e
</style>