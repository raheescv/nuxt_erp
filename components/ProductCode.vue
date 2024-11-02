<template>
    <td>{{ product.id }}</td>
    <td><img :src="product.image" width="10%" height="50%" alt=""></td>
    <td>
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </td>
    <td>{{ product.price }}</td>
    <td>{{ product.category }}s</td>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>