<template lang="pug">
.max-width-product-component.float-left
    v-img.max-width-product-component(:src="product.img")
    .product-name.align-left
        span {{ product.name }}
    .product-review.align-left 
        span {{ product.star }}
        v-icon(color="#f57e2e") mdi-star
        span | Sold: {{ product.sales }}
    .price.align-left
        h4 {{ product.price }} ₹
    .cmt.align-left {{ product.cmt }}
    v-divider
    .cmt.align-left {{ product.shipCmt }}

</template>

<script>
const SubProduct = {
    props:['product'],
    data() {
        return {
            
        }
    }
}

export default SubProduct
</script>

<style scoped lang="sass">
.max-width-product-component
    max-width: 200px
    //height: 300px
    //background-color: #f57e2e

//@media only screen and (max-width 500px)
    //.max-width-product-component
        //max-width: 45%

//@media only screen and (max-width 1000px)
    //.max-width-product-component
       // max-width: 33%

.align-left
    text-align: left

.price
    font-size: 20px

.cmt
    font-size: 12px
    color: gray

.float-left
    float: left

</style>