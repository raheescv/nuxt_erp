export default defineNuxtRouteMiddleware((to, from) => {
    const token = localStorage.getItem('authToken');
    if (!token && to.path !== '/login') {
      return navigateTo('/login');
    }
  });