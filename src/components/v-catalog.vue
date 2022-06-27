<template>
    <div class="v-catalog">
        <div class="v-catalog__select">
            <v-select
                @sortedByName="sortedByName"
                @sortedByMinPrice="sortedByMinPrice"
                @sortedByMaxPrice="sortedByMaxPrice"
                :sortIsActive="sortIsActive"
            />
        </div>
        <transition-group tag="div" name="fade" class="v-catalog__list">
            <v-catalog-item
                v-for="(product, index) in this.$store.state.products"
                :key="product.id"
                :productData="product"
                :isHoveredId="isIdHovered"
                @mouseenter.native="mouseIsHere(product.id)"
                @mouseleave.native="isIdHovered = null"
                @deleteItem="deleteItem(index)"
                :class="{
                    fading: isIndexFade === index,
                }"
            />
        </transition-group>
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
            isIdHovered: null,
            isIndexFade: null,
            sortIsActive: "По умолчанию",
        };
    },
    methods: {
        mouseIsHere(id) {
            this.isIdHovered = id;
        },
        deleteItem(index) {
            this.isIndexFade = index;
            setTimeout(() => {
                this.isIndexFade = null;
            }, 600);
            setTimeout(() => {
                this.$store.dispatch("deleteItem", index);
            }, 599);
        },
        sortedByMinPrice() {
            this.sortIsActive = "По возрастанию цены";
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
            this.sortIsActive = "По убыванию цены";
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
            this.sortIsActive = "По наименованию";
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
    max-width: 1392px;
    margin-left: 340px;
    &__select {
        max-width: 122px;
        margin-left: auto;
        margin-right: 8px;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
    }
}

@media (max-width: 1780px) {
    .v-catalog {
        max-width: 1044px;
    }
}
@media (max-width: 1432px) {
    .v-catalog {
        max-width: 697px;
    }
}
@media (max-width: 1140px) {
    .v-catalog {
        margin: 0 auto;
    }
}
@media (max-width: 780px) {
    .v-catalog {
        max-width: 332px;
        &__select {
            margin-right: 0;
        }
    }
}

@keyframes fade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: rotateY(-90deg);
    }
}
.fading {
    animation: fade 0.8s ease forwards;
}
.fade-enter {
    opacity: 0;
    transform: translateY(20px);
}
.fade-enter-active {
    transition: opacity 1s, transform 1s;
}
.fade-move {
    transition: transform 1s;
}
</style>
