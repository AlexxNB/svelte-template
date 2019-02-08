<!--
This is a root Svelte component. 
-->

<script>
    let name = 'Svelte 3';
</script>

<style type="text/scss">
    @import "styles/vars";
    p,h1{
        text-align: center;
    }

    img{
        width:128px;
        height:128px;
    }

    input:focus{
        border-color:$grey-color-dark;
    }
</style>

<p><img src="static/images/logo.svg" alt="Svelte Logo"/></p>
<h1>Hello {name}!</h1>
<p><input bind:value={name}></p>
