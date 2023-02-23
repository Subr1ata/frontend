<template lang="pug">
div
    .header-color
        v-list-item.pa-3.max-width
            v-img.hidden-sm-and-down(
                src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg?w=2000"
                max-width="40"
            )
            v-spacer
            v-text-field.pa-0(
                label="Search"
                placeholder="product"
                hide-details
                background-color="white"
                height="40"
                solo
                prepend-inner-icon="mdi-home-search-outline"
            )
            v-spacer
            div.pa-2
                v-icon(color="white") mdi-home 
                span.white--text.hidden-sm-and-down Home page
            div.pa-2
                v-icon(color="white") mdi-account 
                span.white--text.hidden-sm-and-down Account
            div
                v-btn(icon)
                    v-icon(color="white") mdi-cart-outline
            div.hidden-md-and-up
                v-btn(icon @click="isShowCategoryInMobile = !isShowCategoryInMobile;")
                    v-icon(color="white") mdi-menu
            //- h1.white--text Home page
            v-spacer
            
        v-divider(color="white")
        .pc.category.max-width.center.hidden-md-down
            ul
                li.pa-2.white--text(v-for="categoryTop in categoriesTop" @click="gotoProductsPage(categoryTop)")
                    span {{ categoryTop }}
        .center.hidden-md-up
            v-expand-transition
                v-card(
                    color="#f57e2e"
                    v-show="isShowCategoryInMobile"
                    class="mx-auto"
                )
                    ul
                        li.pa-2.white--text(v-for="categoryTop in categoriesTop" @click="gotoProductsPage(categoryTop)")
                            span {{ categoryTop }}
</template>

<script>
import router from '@/router';
import {urlPath} from '@/utils'

const HeaderBar = {
    data(){
        return{
            isShowCategoryInMobile: false,
            categoriesTop: ['Home page', 'Outstanding', 'Discount', 'Selling', 'New product', 'Products by row']
        }
    },
    methods: {
        gotoProductsPage(catName) {
            if (catName == this.categoriesTop[0]) router.push({name: urlPath.Home.name})
            else router.push({name: urlPath.Products.name})
        }
    }
}

export default HeaderBar
</script>

<style scoped lang="sass">
.header-color
    background-color: #f57e2e
.max-width
    max-width: 1500px
.center
    margin: 0 auto
    text-align: center
ul
    padding: 0
    justify-content: center
ul li
    text-align: center
    list-style: none
    display: inline-block
    margin: 0 3px
ul li:hover
    background-color: #faabcd
    cursor: pointer
.pc ul li
    display: inline-block
.category
    height: 40px
</style>