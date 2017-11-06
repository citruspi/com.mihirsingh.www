<template>
    <div>
        <TopBarMenu/>
        <hr>
        <div class="main-app">
            <nuxt></nuxt>
        </div>
    </div>
</template>

<style scoped>
.main-app {
    margin-top: 3rem;
}
</style>

<script>
import TopBarMenu from '~/components/menu/topbar-menu'

export default {
    components: {
        TopBarMenu,
    }
}
</script>