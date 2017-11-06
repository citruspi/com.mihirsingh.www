<template>
    <div class="topbar-menu">
        <DesktopMenu :menuItems="menuItems"/>
        <MobileMenu :menuItems="menuItems"/>
    </div>
</template>

<style scoped>
html, body {
    background-color: #000;
}

.topbar-menu {
    padding-top: 2rem;
    background-color: #000;
}

.uk-navbar-nav>li>a.nuxt-link-active, 
.uk-navbar-nav>li>a.nuxt-link-exact-active {
    color: #fff;
}
</style>

<script>
import DesktopMenu from '~/components/menu/topbar-menu-desktop-dark'
import MobileMenu from '~/components/menu/topbar-menu-mobile-dark'

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