<template>
    <div class="v-catalog-item">
        <img
            @click="deleteItem"
            class="btn-del"
            src="../assets/btn-del.png"
            alt="btn-del"
        />
        <div class="v-catalog-item__visual">
            <img class="item-image" :src="productData.url" alt="item-image" />
        </div>
        <div class="v-catalog-item__text">
            <h5>{{ productData.nameItem }}</h5>
            <p>{{ productData.description }}</p>
            <h6>{{ priceItem }} руб.</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        productData: {
            type: Object,
            default() {
                return;
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        deleteItem() {
            this.$emit("deleteItem");
        },
    },
    computed: {
        priceItem() {
            return this.productData.price
                .split("")
                .reverse()
                .join("")
                .replace(/\d\d\d/g, "$& ")
                .split("")
                .reverse()
                .join("");
        },
    },
};
</script>

<style lang="scss" scoped>
.v-catalog-item {
    width: 332px;
    height: 423px;
    margin: 0 8px 8px 8px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .btn-del {
        width: 32px;
        height: 32px;
        position: relative;
        top: -15px;
        left: 315px;
        border-radius: 11px;
        &:hover {
            cursor: pointer;
            box-shadow: 0px 20px 30px #ff8484, 0px 6px 10px rgba(0, 0, 0, 0.521);
        }
    }
    &__visual {
        display: flex;
        justify-content: center;
        .item-image {
            max-height: 200px;
            max-width: 332px;
            position: relative;
            top: -32px;
        }
    }
    &__text {
        h5 {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            margin: 0 auto 16px 16px;
        }
        p {
            height: 86px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            margin: 0 16px 16px 16px;
            overflow: hidden;
        }
        h6 {
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            margin: auto auto 24px 16px;
        }
    }
}
</style>
