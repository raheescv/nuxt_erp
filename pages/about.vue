<template>
  <div>
    <h2>About</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias eos odio odit distinctio voluptas enim
      deserunt quia, quas repellat.</p>

    <div>
      {{ data }}
    </div>
  </div>
</template>

<script setup>
// const { data } = await useFetch('api/main')
const { data } = await useFetch('api/currency/INR')
</script>

<style></style>