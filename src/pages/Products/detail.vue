<template lang="pug">
div
    header-bar
    product-detail.max-width.center.pt-10
        
</template>

<script>
import { HeaderBar, ProductDetail } from '@/components'

const detail = {
    props: ['value'],
    components: {
        HeaderBar,
        ProductDetail
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
</style>