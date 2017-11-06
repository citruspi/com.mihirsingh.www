<template>
    <div>
        <TopBarMenu/>
        <hr>
        <div class="main-app">
            <nuxt></nuxt>
        </div>
        <SiteFooter/>
    </div>
</template>

<style scoped>
.main-app {
    padding: 3rem 0 5rem 0;
}
</style>

<script>
import TopBarMenu from '~/components/menu/topbar-menu'
import SiteFooter from '~/components/footer'

export default {
    components: {
        TopBarMenu,
        SiteFooter
    }
}
</script>