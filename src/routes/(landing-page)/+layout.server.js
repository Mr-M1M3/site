/**
 * Project: OBBOY
 * Author: https://github.com/Mr-M1M3
 * File: SvelteKit Layout Load. See https://kit.svelte.dev/docs/load
 */
// import redirect helper
import { redirect } from "@sveltejs/kit"
export async function load({url}){
    // if requested route is `/`, redirect to `/discover`
    if(url.pathname === '/'){
        throw redirect('303', '/discover');
    }
    return {}
}

// export page options

export let prerender = true;