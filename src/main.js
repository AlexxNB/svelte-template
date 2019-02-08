// Import all yours global scss and css files here. 
// Ex. any CSS framework should be imported here
import "./styles/global.scss"

import App from './App.svelte';

var app = new App({
	target: document.body
});

export default app;