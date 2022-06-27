<template>
    <div class="home">
        <div class="home__content">
            <v-add-item></v-add-item>
            <v-catalog></v-catalog>
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
    padding: 32px 24px;
    align-items: center;
    margin: 0 auto;
    min-height: 1024px;
    min-width: 420px;
    background: #e5e5e5;
}
</style>
