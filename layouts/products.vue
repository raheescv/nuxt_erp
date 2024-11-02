<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt Home Page</NuxtLink>
            </nav>
        </header>
        <!-- Content -->
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup></script>

<style>
.router-link-exact-active {
    color: #12b488
}
</style>