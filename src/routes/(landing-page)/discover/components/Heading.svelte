<script>
    export let title = "";
    export let right;
    export let left;
</script>

<div class="wrapper grid -mx-2">
    <h1 class="capitalize text-2xl text-theme-primary font-bold font-inter bg-theme-gray px-6 py-4 {right ? 'right' : left ? 'left' : ''}">{title}</h1>
</div>

<style>
    h1{
        width: max-content;
    }
    .right{
        @apply rounded-tl-xl rounded-bl-xl text-right justify-self-end;
    }
    .left{
        @apply rounded-tr-xl rounded-br-xl text-left justify-self-start
    }
</style>