import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import assetSync from 'rollup-plugin-asset-sync';
import staticSite from 'rollup-plugin-static-site';
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve';
import path from 'path'

const production = !process.env.ROLLUP_WATCH;
const srcDir = path.join(__dirname,'src');
const devDir = '.dev';
const buildDir = 'build';
const targetDir =  production ? path.join(__dirname,'__SVELTE__',buildDir) : path.join(__dirname,'__SVELTE__',devDir);

export default {
	input: path.join(srcDir,'main.js'),
	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'myapp',
		file: path.join(targetDir,'bundle.js') 
	},
	plugins: [
		assetSync({
            input: path.join(srcDir,'static'),
            output: path.join(targetDir,'static'),
		}),
		svelte({
			skipIntroByDefault: true,
			nestedTransitions: true,
			dev: !production,
			preprocess: require('./svelte.config').preprocess,
			css: css => {
				css.write(path.join(targetDir,'bundle.css'));
			}
		}),	
		scss({
			output: path.join(targetDir,'global.css'),
			outputStyle: production ? 'compressed' : 'expanded'
		}),
		staticSite({ 
			// The window title of the app
			title: 'Svelte App',
			css: path.join(targetDir,'bundle.css'),
			moreStyles:['global.css'],
			dir: targetDir 
		}),
		resolve(),
		commonjs(),
		production && terser(),
		!production && livereload({
			watch:targetDir
		}),
		(!production && serve({
			contentBase: targetDir,
			host: 'localhost',
			port: 5000,
		}))
		
	]
};
