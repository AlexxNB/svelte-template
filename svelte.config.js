module.exports =  {
    preprocess: require('svelte-preprocess')({ 
        transformers: {
            scss: true,
        }
    })
}