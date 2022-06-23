<template>
    <div class="v-catalog-item">
        <div class="v-catalog-item__visual">
            <img src="../assets/foto.png" alt="item-image" />
        </div>
        <div class="v-catalog-item__text">
            <h5>Наименование товара</h5>
            <p>
                Довольно-таки интересное описание товара в несколько строк.
                Довольно-таки интересное описание товара в несколько строк
            </p>
            <h6>10 000 руб.</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    data() {
        return {};
    },
    methods: {},
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
    &__visual {
        img {
            width: 100%;
        }
    }
    &__text {
        h5 {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            margin: 16px auto 16px 16px;
        }
        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            margin: 0 16px 16px 16px;
        }
        h6 {
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            margin: 16px auto 24px 16px;
        }
    }
}
</style>
