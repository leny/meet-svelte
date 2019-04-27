/* leny/meet-svelte
 *
 * /src/main.js - Entry point for svelte app
 *
 * coded by leny@flatLand!
 * started at 26/04/2019
 */

import App from "./components/app.svelte";

const app = new App({
    target: document.querySelector("#root"),
    props: {},
});

export default app;
