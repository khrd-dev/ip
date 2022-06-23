<template>
    <div class="v-add-item">
        <form class="v-add-item__form">
            <div class="v-add-item__form_content">
                <div class="v-add-item__form_content_input-name">
                    <small class="helper-text invalid"
                        >Наименование товара
                        <img src="../assets/redd.png" alt="image-redd"
                    /></small>
                    <input
                        id="name"
                        type="text"
                        class="validate"
                        placeholder="Введите наименование товара"
                    />
                </div>
                <div class="v-add-item__form_content_input-discription">
                    <small class="helper-text invalid">Описание товара</small>
                    <textarea
                        id="description"
                        type="text"
                        placeholder="Введите описание товара"
                    />
                </div>
                <div class="v-add-item__form_content_input-url">
                    <small class="helper-text invalid"
                        >Ссылка на изображение товара
                        <img src="../assets/redd.png" alt="image-redd" />
                    </small>
                    <input
                        id="image-link"
                        type="url"
                        class="validate"
                        placeholder="Введите ссылку"
                    />
                </div>
                <div class="v-add-item__form_content_input-price">
                    <small class="helper-text invalid"
                        >Цена товара
                        <img src="../assets/redd.png" alt="image-redd"
                    /></small>
                    <input
                        id="price"
                        type="text"
                        class="validate"
                        placeholder="Введите цену"
                    />
                </div>
            </div>
            <div class="v-add-item__form_card-action">
                <div>
                    <button class="btn" type="submit">Добавить товар</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "v-add-item",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.v-add-item {
    width: 332px;
    height: 440px;
    margin: 0 8px 24px 0;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    &__form {
        &_content {
            margin-top: 24px;
            &_input-discription {
                input {
                    vertical-align: text-top;
                    &::placeholder {
                        position: relative;
                        bottom: 35%;
                    }
                    height: 108px;
                }
            }
        }
        &_card-action {
            button {
                margin: 6px 24px 24px 24px;
                background: #eeeeee;
                border-radius: 10px;
                border: none;
                width: 284px;
                height: 36px;
                font-family: "Inter";
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                /* identical to box height */

                text-align: center;
                letter-spacing: -0.02em;

                /* Greys / 500 */

                color: #b4b4b4;
            }
        }
    }
}
input {
    margin: 4px 24px 8px 24px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    width: 252px;
    height: 34px;
    padding-left: 16px;
    padding-right: 16px;
    &::placeholder {
        font-family: "Source Sans Pro";
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #b4b4b4;
        cursor: text;
    }
    &:focus {
        outline: none;
        box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.1);
    }
}
textarea {
    margin: 4px 24px 8px 24px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    width: 252px;
    height: 76px;
    padding: 16px 16px 16px 16px;
    resize: none;
    &::placeholder {
        font-family: "Source Sans Pro";
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #b4b4b4;
        cursor: text;
    }
    &:focus {
        outline: none;
    }
}
small {
    margin-top: 0;
    margin-left: 24px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
}
img {
    margin-bottom: 6px;
}
</style>
