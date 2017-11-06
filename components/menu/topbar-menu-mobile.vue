<template>
    <div class="uk-container uk-hidden@l">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li><nuxt-link class="mobile-logo" to="/">Mihir</nuxt-link></li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">Menu</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <template v-for="item in menuItems">
                                    <li><nuxt-link :to="item.path">{{ item.title }}</nuxt-link></li>
                                </template>                                
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div> 
</template>

<style scoped>
.uk-navbar-nav>li>a.nuxt-link-active,
.uk-navbar-nav>li>a.nuxt-link-exact-active {
    color: #000;
    font-weight: bold;
}

.uk-navbar-nav>li>a.mobile-logo {
    font-weight: bolder;
    font-size: 1.6rem;
    padding: 0;
}
</style>

<script>
export default {
    props: ['menuItems']
}
</script>