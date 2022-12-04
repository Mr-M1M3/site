export async function handle({event, resolve}){
    // Generate response fro sveltekit
    const RESPONSE = await resolve(event);

    return RESPONSE;
}