<template>
    <div class="v-catalog">
        <div class="v-catalog__list">
            <v-catalog-item />
            <v-catalog-item />
            <v-catalog-item />
            <v-catalog-item />
            <v-catalog-item />
            <v-catalog-item />
        </div>
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.v-catalog {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
