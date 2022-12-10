<script>
    export let title = "";
    export let desc = "";
    export let rotate = "+";
    export let href = "";
    import Icon from "@iconify/svelte/dist/Icon.svelte";
    import {goto} from "$app/navigation";
    async function move(e){
        if(href){
            try{
                await goto(href);
            }catch(e){
                console.error(e);
            }
        }
        try{
            await goto('#');
        }catch(e){
            console.error(e);
        }
    }
</script>

<div class="wrapper bg-theme-gray px-4 py-3 rounded-lg flex {rotate === '+' ? 'rotate-3' : '-rotate-3'} cursor-pointer" on:click={move}>
    <p class="text-3xl text-theme-primary"><Icon icon="ic:round-code"/></p>
    <div class="mx-2 flex-grow flex flex-col">
        <p class="title text-xl font-bold text-theme-primary font-theme-rubik uppercase">{title}</p>
        <p class="desc flex-grow my-2 text-theme-white font-inter">{desc}</p>
    </div>
</div>