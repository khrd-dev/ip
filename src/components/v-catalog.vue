<template>
    <div class="v-catalog">
        <div class="v-catalog__select">
            <v-select
                @sortedByName="sortedByName"
                @sortedByMinPrice="sortedByMinPrice"
                @sortedByMaxPrice="sortedByMaxPrice"
            />
        </div>
        <div class="v-catalog__list">
            <v-catalog-item
                v-for="(product, index) in this.$store.state.products"
                :key="product.id"
                :productData="product"
                @mouseenter.native="mouseIsHere(index, product)"
                @mouseleave.native="isIndexHovered = null"
                @deleteItem="deleteItem(index)"
                :class="{
                    hovered: isIndexHovered === index,
                    fading: isIndexFade === index,
                }"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import vSelect from "./v-select.vue";

export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
        vSelect,
    },
    data() {
        return {
            isIndexHovered: null,
            isIndexFade: null,
            sortedProducts: [],
        };
    },
    methods: {
        mouseIsHere(index) {
            this.isIndexHovered = index;
            console.log(index);
        },
        deleteItem(index) {
            this.isIndexFade = index;
            setTimeout(() => {
                this.isIndexFade = null;
            }, 1000);
            setTimeout(() => {
                this.$store.dispatch("deleteItem", index);
            }, 1000);
        },
        sortedByMinPrice() {
            this.sortedProducts = [];
            this.$store.state.products.sort((a, b) => {
                if (+a.price > +b.price) {
                    return 1;
                }
                if (+a.price < +b.price) {
                    return -1;
                }
                return 0;
            });
        },
        sortedByMaxPrice() {
            this.sortedProducts = [];
            this.$store.state.products.sort((a, b) => {
                if (+a.price > +b.price) {
                    return -1;
                }
                if (+a.price < +b.price) {
                    return 1;
                }
                return 0;
            });
        },
        sortedByName() {
            this.sortedProducts = [];
            this.$store.state.products.sort((a, b) => {
                if (a.nameItem > b.nameItem) {
                    return 1;
                }
                if (a.nameItem < b.nameItem) {
                    return -1;
                }
                return 0;
            });
        },
    },
    computed: {},
};
</script>

<style lang="scss" scoped>
.v-catalog {
    margin-left: 340px;
    &__select {
        max-width: 122px;
        margin-left: auto;
        margin-right: 8px;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
}
@media (max-width: 1140px) {
    .v-catalog {
        margin-left: 0 !important;
        &__list {
            align-items: center;
            justify-content: space-around;
        }
    }
}
@keyframes fade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.fading {
    animation: fade 1s ease forwards;
}
</style>
