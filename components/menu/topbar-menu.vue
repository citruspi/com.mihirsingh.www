<template>
    <div class="topbar-menu">
        <DesktopMenu :menuItems="menuItems"/>
    </div>
</template>

<style scoped>
.topbar-menu {
    margin-top: 2rem;
}
</style>

<script>
import DesktopMenu from '~/components/menu/topbar-menu-desktop'

export default {
    components: {
        DesktopMenu
    },
    data () {
        return {
            menuItems: process.env.menuItems
        }
    }
}
</script>