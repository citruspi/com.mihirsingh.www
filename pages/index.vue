<template>
    <Page>
        <div class="uk-container">
            <img src="/img/index-header.jpeg" width="100%"/>
            <h2 style="text-align: right;">مرحبا</h2>
            <h2>Olà. Ciao. Salut. Hello. नमस्ते. Guten tag. Hej. Salâm. Nǐ hǎo. こんにちは.</h2>
            <h2>I’m Mihir, that’s Beast, and this is my space on the Interwebs. It features <nuxt-link to="/photography">some photos I’ve taken</nuxt-link>, <nuxt-link to="/projects/">details about some projects I work on</nuxt-link>, <nuxt-link to="/travel/">my travel journal</nuxt-link>, and <nuxt-link to="/writing/">a couple blogs</nuxt-link>.</h2>
        </div>
    </Page>
</template>

<style scoped>
a, a:hover {
    color: #2abc9d;
}
</style>

<script>
import Page from '~/components/layouts/page'

export default {
    components: {
        Page
    },
    head () {
        return {
            title: 'Hey!'
        }
    }
}
</script>