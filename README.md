## Developing

First you need to set proper env variables in a .env file. This project uses [Pocketbase](https://pocketbase.io) as BaaS. So, first thing you are going to do is provide pocketbase url.

```env
POCKETBASE_URL = "{link to the url pocktbase is listening at.}"
```

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run build:dev

# or start the server and open the app in a new browser tab
npm run build:dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build:prod
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
