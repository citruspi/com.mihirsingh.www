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
    padding: 3rem 0;

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