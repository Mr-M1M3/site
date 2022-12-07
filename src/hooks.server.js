/**
 * Project: OBBOY
 * Author: https://github.com/Mr-M1M3
 * File: SvelteKit Hooks. See https://kit.svelte.dev/docs/hooks
 */

// import sequence helper, pb client, list of routes that use pb, static env
import {sequence} from "@sveltejs/kit/hooks";
import Pocketbase from "pocketbase";
import routes_using_pb from "$lib/server/route-categories/routes-using-pb";
import {POCKETBASE_URL} from "$env/static/private";

// initialize server
async function init({event, resolve}){

    // if the route being requested uses pb, add pb to local vars
    if(routes_using_pb.includes(event.url.pathname)){
        event.locals.pb = new Pocketbase(POCKETBASE_URL);
    }
    // TODO: Check if the route should be authenticated add perform actions accordingly

    // finally calls resolve
    return await resolve(event);
}

// return sequenced handle
export const handle = sequence(init);

// TODO: Add error handlers