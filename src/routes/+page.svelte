<style>
    .toast-success {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: rgb(0, 214, 0);
        color: white;
        padding: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transition: opacity 0.5s ease;
    }
    .toast-error {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: red;
        color: white;
        padding: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transition: opacity 0.5s ease;
    }
</style>

<script lang="ts">
    import Datatable from "$lib/components/Datatable.svelte";
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    export let data;
    let { response } = data;
    let message = $page.url.searchParams.get('message');
    let visible = "hidden";
    onMount(() => {
        if(message){
            visible = "";
            setTimeout(() => {
                visible = "hidden"    
            },5000)
        }
    });
</script>
{#if message==="success"}
<div class={`toast-success ${visible}`}>
    <div class="text-center">
        TAREA COMPLETADA
    </div>
    <div>
        Se ha realizado la petición con exito.
    </div>
</div>
{:else}
<div class={`toast-error ${visible}`}>
    <div class="text-center">
        ERROR
    </div>
    <div>
        La tarea no se logró completar.
    </div>
</div>
{/if}
<Datatable data={response} />
