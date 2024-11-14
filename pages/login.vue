<template>
    <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="hidden min-h-screen flex-col xl:flex">
            <a class="-intro-x flex items-center pt-5" href="">
                <img class="w-6" src="@/assets/images/logo.svg" alt="Midone - Tailwind Admin Dashboard Template">
                <span class="ml-3 text-lg text-white"> RCV </span>
            </a>
            <div class="my-auto">
                <img class="-intro-x -mt-16 w-1/2" src="@/assets/images/illustration.svg">
                <div class="-intro-x mt-10 text-4xl font-medium leading-tight text-white">
                    A few more clicks to <br>
                    sign in to your account.
                </div>
                <div class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                    Manage your accounts in one place
                </div>
            </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="my-10 flex h-screen py-5 xl:my-0 xl:h-auto xl:py-0">
            <div
                class="mx-auto my-auto w-full rounded-md bg-white px-5 py-8 shadow-md dark:bg-darkmode-600 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-20 xl:w-auto xl:bg-transparent xl:p-0 xl:shadow-none">
                <form @submit.prevent="submitForm">
                    <h2 class="intro-x text-center text-2xl font-bold xl:text-left xl:text-3xl">
                        Sign In
                    </h2>
                    <div class="intro-x mt-2 text-center text-slate-400 xl:hidden">
                        A few more clicks to sign in to your account. Manage your accounts in one place
                    </div>
                    <div class="intro-x mt-8">
                        <input data-tw-merge="" v-model="email" type="text" placeholder="Enter your Email here"
                            autofocus
                            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 intro-x block min-w-full px-4 py-3 xl:min-w-[350px]">
                        <input data-tw-merge="" v-model="password" type="password"
                            placeholder="Enter your Password here"
                            class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 intro-x mt-4 block min-w-full px-4 py-3 xl:min-w-[350px]">
                    </div>
                    <!-- <div class="intro-x mt-4 flex text-xs text-slate-600 dark:text-slate-500 sm:text-sm"> -->
                    <!-- <div class="mr-auto flex items-center"> -->
                    <!-- <input data-tw-merge="" type="checkbox" -->
                    <!-- class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 mr-2 border" -->
                    <!-- id="remember-me"> -->
                    <!-- <label class="cursor-pointer select-none" for="remember-me"> Remember me </label> -->
                    <!-- </div> -->
                    <!-- <a href="">Forgot Password?</a> -->
                    <!-- </div> -->
                    <div class="intro-x mt-5 text-center xl:mt-8 xl:text-left">
                        <p class="error-message">{{ error }}</p> <br>
                        <button type="submit" @click="submitForm()"
                            class="bg-primary text-white w-full px-4 py-3 rounded-md mt-4">
                            {{ isLoading ? 'Logging in...' : 'Login' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>

definePageMeta({
    title: 'Sign In',
    layout: 'authentication',
    public: true,
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    },
})
import { ref } from 'vue';
const { signIn } = useAuth()

const email = ref('rahees@gmail.com')
const password = ref('asdasd')

const isLoading = ref(false)
const error = ref(null)

const submitForm = async () => {
    isLoading.value = true;
    error.value = null
    if (!email.value.trim() || !password.value.trim()) {
        error.value = 'incomplete';
        isLoading.value = false;
        return;
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email.value && !regex.test(email.value)) {
        error.value = 'invalid';
        isLoading.value = false;
        return;
    }
    try {
        let loginData = {
            email: email.value,
            password: password.value,
        };
        console.log(loginData);
        let res = await signIn(loginData, { callbackUrl: '/', external: true })
    } catch (e) {
        error.value = e.message;
    } finally {
        isLoading.value = false
    }
}
</script>

<style></style>