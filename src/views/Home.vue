<template>
    <div class="home">
        <div class="home__content">
            <section class="home__content_elem">
                <v-add-item></v-add-item>
                <v-catalog></v-catalog>
            </section>
        </div>
    </div>
</template>

<script>
import vCatalog from "../components/v-catalog.vue";
import vAddItem from "../components/v-add-item.vue";

export default {
    name: "Home",
    components: {
        vCatalog,
        vAddItem,
    },
};
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    align-items: center;
    margin: 0 auto;
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin: 0 24px 24px 24px;
    }
    &_elem {
        display: flex;
    }
}

@media (max-width: 1140px) {
    .home__content {
        margin: 15px;
        &_elem {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
