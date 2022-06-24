<template>
    <div class="home">
        <div class="home__content">
            <section class="home__content_header">
                <h1>Добавление товара</h1>
                <div class="home__content_header_sort">
                    <button class="home__content_header_sort_drop-btn sort-btn">
                        По умолчанию
                        <img src="../assets/drop-btn.png" alt="drop-btn" />
                    </button>
                    <div class="home__content_header_sort_choose">
                        <button class="sort-btn">По возрастанию цены</button>
                        <button class="sort-btn">По убыванию цены</button>
                    </div>
                </div>
            </section>
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
        margin: 83px 24px 24px 24px;
        &_header {
            display: flex;
            justify-content: space-between;
            h1 {
                font-weight: 600;
                font-size: 28px;
                line-height: 35px;
                margin: 32px auto 16px 0;
            }
            &_sort {
                position: relative;
                display: inline-block;
                &_drop-btn {
                    margin: 32px 8px 0 0;
                }
                &_choose {
                    display: none;
                    position: absolute;
                    z-index: 1;
                    button {
                        border-radius: 0;
                        cursor: pointer;
                    }
                }
                &_drop-btn:hover + &_choose,
                &_choose:hover {
                    display: block;
                }
            }
        }
        &_elem {
            display: flex;
        }
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
    &:hover {
        background: #e6e6e6;
    }
}
@media (max-width: 1100px) {
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
