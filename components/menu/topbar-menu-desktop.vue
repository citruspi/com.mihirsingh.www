<template>
    <div class="uk-container uk-visible@l">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li><nuxt-link class="logo" to="/">Mihir</nuxt-link></li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <template v-for="item in menuItems">
                        <li><nuxt-link :to="item.path">{{ item.title }}</nuxt-link></li>
                    </template>  
                </ul>
            </div>
        </nav>            
    </div>
</template>

<style>
.uk-navbar-nav>li>a.logo {
    font-weight: bolder;
    font-size: 2rem;
    padding: 0;
}

.uk-navbar-nav>li>a.nuxt-link-active,
.uk-navbar-nav>li>a.nuxt-link-exact-active {
    color: #000;
}
</style>

<script>
export default {
    props: ['menuItems']
}
</script>