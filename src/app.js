/* leny/meet-svelte
 *
 * /src/app.js - Entry point for svelte app
 *
 * coded by leny@flatLand!
 * started at 26/04/2019
 */

import App from "./components/app.svelte";

const root = new App({
    target: document.querySelector("#root"),
    props: {},
});

export default root;
