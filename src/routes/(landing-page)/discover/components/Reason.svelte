<script>
    import Icon from '@iconify/svelte';
    export let reason = "";
</script>

<div class="wrapper bg-theme-gray h-44 rounded-lg px-4 py-3 flex flex-col justify-between">
<p class="text-theme-primary text-4xl my-2"><Icon icon="jam:thunder-f"/></p>
<p class="text-theme-white font-inter text-center flex-grow">{reason}</p>
</div>
<style>
    .wrapper, .wrapper *{
        overflow: hidden;
    }
</style>