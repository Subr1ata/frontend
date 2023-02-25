<template lang="pug">
div
    v-row 
        v-col(cols="4")
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
        v-col(cols="8")
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
</template>

<script>
import FastInputQuantity from '../FastInputQuantity/index.vue';

const ProductDetail = {
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
                quantity: 0
            }
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
</style>