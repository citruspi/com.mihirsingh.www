<template>
    <div>
        <TopBarMenu/>
        <hr>
        <div class="page">
            <slot/>
        </div>
        <SiteFooter/>
    </div>
</template>

<style scoped>
.page {
    padding: 3rem 0 5rem 0;
}

p {
    font-size: 1.5rem;
}

cite {
    font-size: 1.2rem;
}


li {
    font-size: 1.4rem;
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