<template>
    <div class="topbar-menu">
        <DesktopMenu :menuItems="menuItems"/>
        <MobileMenu :menuItems="menuItems"/>
    </div>
</template>

<style scoped>
.topbar-menu {
    padding-top: 2rem;
}
</style>

<script>
import DesktopMenu from '~/components/menu/topbar-menu-desktop'
import MobileMenu from '~/components/menu/topbar-menu-mobile'

export default {
    components: {
        DesktopMenu,
        MobileMenu
    },
    data () {
        return {
            menuItems: process.env.menuItems
        }
    }
}
</script>