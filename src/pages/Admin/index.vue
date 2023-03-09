<template lang="pug">
div.pa-10
    v-text-field(v-model='products.name' label='Name')
    v-text-field(v-model='products.sales' label='Sales')
    v-text-field(v-model='products.cost' label='Cost')
    v-text-field(v-model='products.price' label='Price')
    v-text-field(v-model='products.star' label='Star')
    v-text-field(v-model='products.cmt' label='Cmt')
    v-text-field(v-model='products.shipCmt' label='Ship Cmt')
    
    v-file-input(
        v-model="products.image"
        show-size 
        counter 
        multiple 
        label='File input'
    )

    v-btn.me-4(@click='submit')
        | submit

</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            products: {
                image: null,
                name: 'Kemin K20 - 20L car refrigerator',
                star: 5,
                sales: 1000,
                cost: 1200,
                price: 10000,
                cmt: 'Up to 34 ASA (8k) 2.4% cashback',
                shipCmt: 'Delivery all, weekdays',
                category: 1
            }
        }
    },
    methods: {
        async submit() {
            this.products.image = await this.readFile(this.products.image[0]);
            await axios.post('http://127.0.0.1:8000/product/', this.products).then((response) => {
                console.log(response);
            })
        },
        readFile(file) {
            return new Promise((r => {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onloadend = () => r(reader.result)
            }))
        }
    }
}
</script>