<template>

    <Layout>

        <h2>Demo Page</h2>
        <canvas 
            id='my-canvas' 
            tabindex='0' 
            style="border: 3px solid black;">
        </canvas>

    </Layout>

</template>

<script lang="ts">

    import { SystemColors, SystemKeys } from '../utility'

    console.log(`I am in the About page`);
    
    export default {
      metaInfo: {
        title: 'About us'
      }
    
    }

</script>
