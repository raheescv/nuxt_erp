export default defineEventHandler(async (event)=>{
    let { code } =  event.context.params;
    let { currencyKey } = useRuntimeConfig();
    let uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;
    let data = await $fetch(uri);
    
    return data;
})