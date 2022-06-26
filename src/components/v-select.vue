<template>
    <div class="v-select">
        <button class="v-select__drop-btn sort-btn">
            По умолчанию
            <img src="../assets/drop-btn.png" alt="drop-btn" />
        </button>
        <div class="v-select__choose">
            <button @click="sortedByName" class="sort-btn">
                По наименованию
            </button>
            <button @click="sortedByMinPrice" class="sort-btn">
                По возрастанию цены
            </button>
            <button @click="sortedByMaxPrice" class="sort-btn">
                По убыванию цены
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-select",
    data() {
        return {};
    },
    methods: {
        sortedByName() {
            this.$emit("sortedByName");
        },
        sortedByMinPrice() {
            this.$emit("sortedByMinPrice");
        },
        sortedByMaxPrice() {
            this.$emit("sortedByMaxPrice");
        },
    },
};
</script>

<style lang="scss" scoped>
.v-select {
    position: relative;
    display: inline-block;
    margin: 32px 8px 22px 0;
    &__choose {
        display: none;
        position: absolute;
        z-index: 1;
        button {
            border-radius: 0;
            cursor: pointer;
        }
    }
    &__drop-btn:hover + &__choose,
    &__choose:hover {
        display: block;
    }
}
.sort-btn {
    width: 121.49px;
    height: 36px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    font-family: "Source Sans Pro";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
    padding: 0;
    margin: 0;
    &:hover {
        background: #e6e6e6;
    }
}
</style>
