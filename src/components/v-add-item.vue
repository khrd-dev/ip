<template>
    <div class="v-add-item">
        <h1>Добавление товара</h1>
        <form class="v-add-item__form" @submit.prevent="submitHandler">
            <div class="v-add-item__form_content">
                <div class="v-add-item__form_content_input-name">
                    <label
                        >Наименование товара
                        <img src="../assets/redd.png" alt="image-redd" />
                    </label>
                    <input
                        id="name"
                        type="text"
                        class="validate"
                        placeholder="Введите наименование товара"
                        v-model="nameItem"
                        :class="{
                            invalid:
                                $v.nameItem.$dirty && !$v.nameItem.required,
                        }"
                    />
                    <p v-if="$v.nameItem.$dirty && !$v.nameItem.required">
                        Поле является обязательным
                    </p>
                </div>
                <div class="v-add-item__form_content_input-discription">
                    <label>Описание товара</label>
                    <textarea
                        id="description"
                        type="text"
                        placeholder="Введите описание товара"
                        v-model="description"
                    />
                </div>
                <div class="v-add-item__form_content_input-url">
                    <label
                        >Ссылка на изображение товара
                        <img src="../assets/redd.png" alt="image-redd" />
                    </label>
                    <input
                        id="image-link"
                        type="url"
                        class="validate"
                        placeholder="Введите ссылку"
                        v-model="url"
                        :class="{
                            invalid:
                                ($v.url.$dirty && !$v.url.required) ||
                                ($v.url.$dirty && !$v.url.url),
                        }"
                    />
                    <p v-if="$v.url.$dirty && !$v.url.required">
                        Поле является обязательным
                    </p>
                    <p v-else-if="$v.url.$dirty && !$v.url.url">
                        Поле должно содержать корректный URL-адрес
                    </p>
                </div>
                <div class="v-add-item__form_content_input-price">
                    <label
                        >Цена товара
                        <img src="../assets/redd.png" alt="image-redd" />
                    </label>
                    <input
                        id="price"
                        type="text"
                        class="validate"
                        placeholder="Введите цену"
                        v-model="price"
                        :class="{
                            invalid:
                                ($v.price.$dirty && !$v.price.required) ||
                                ($v.price.$dirty && !$v.price.numeric),
                        }"
                    />
                    <p v-if="$v.price.$dirty && !$v.price.required">
                        Поле является обязательным
                    </p>
                    <p v-else-if="$v.price.$dirty && !$v.price.numeric">
                        Поле должно содержать только цифры
                    </p>
                </div>
            </div>
            <div class="v-add-item__form_card-action">
                <div>
                    <button
                        class="btn"
                        type="submit"
                        :class="{
                            active: !(
                                ($v.nameItem.$dirty && !$v.nameItem.required) ||
                                ($v.url.$dirty && !$v.url.required) ||
                                ($v.url.$dirty && !$v.url.url) ||
                                ($v.price.$dirty && !$v.price.required) ||
                                ($v.price.$dirty && !$v.price.numeric)
                            ),
                        }"
                    >
                        {{ nameBtn }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { url, numeric, required } from "vuelidate/lib/validators";
export default {
    name: "v-add-item",
    data() {
        return {
            nameBtn: "Добавить товар",
            nameItem: "",
            description: "",
            url: "",
            price: "",
        };
    },
    validations: {
        nameItem: { required },
        url: { url, required },
        price: { numeric, required },
    },
    methods: {
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            const formData = {
                nameItem: this.nameItem,
                description: this.description
                    ? this.description
                    : "Описания нет",
                url: this.url,
                price: this.price,
                id: Date.now(),
            };
            try {
                await this.$store.dispatch("createItem", formData);
                this.nameItem = "";
                this.description = "";
                this.url = "";
                this.price = "";
                this.nameBtn = "Товар успешно добавлен!";
                setTimeout(() => (this.nameBtn = "Добавить товар"), 2000);
                return;
            } catch (e) {
                this.nameBtn = `Ошибка ${e} Повторите позже`;
                setTimeout(() => (this.nameBtn = "Добавить товар"), 2000);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.v-add-item {
    position: fixed;
    h1 {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        margin: 32px auto 16px 0;
    }
    &__form {
        width: 332px;
        height: min-content;
        margin: 0 8px 24px 0;
        background: #fffefb;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
            0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
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
            .btn {
                margin: 6px 24px 24px 24px;
                background: #eeeeee;
                border-radius: 10px;
                border: none;
                outline: none;
                width: 284px;
                height: 36px;
                font-family: "Inter";
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                text-align: center;
                letter-spacing: -0.02em;
                color: #b4b4b4;
                &:active {
                    border: none;
                    outline: none;
                }
                &:hover {
                    cursor: pointer;
                    box-shadow: 0px 20px 30px #b4b4b4,
                        0px 6px 10px rgba(0, 0, 0, 0.521);
                }
            }
        }
    }
}
.active {
    background: #7bae73 !important;
    color: white !important;
    &:hover {
        box-shadow: 0px 20px 30px #7bae73, 0px 6px 10px rgba(0, 0, 0, 0.521) !important;
    }
}
.invalid {
    border: 1px solid #ff8484;
}
input {
    margin: 4px 24px 0 24px;
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
    margin: 4px 24px 0 24px;
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
label {
    margin-top: 0;
    margin-left: 24px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
}
p {
    margin: 0 auto 0 24px;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
}
img {
    margin-bottom: 6px;
}
@media (max-width: 1140px) {
    .v-add-item {
        position: relative;
        &__form {
            margin: 0 auto;
        }
        h1 {
            position: relative;
            width: 332px;
            margin: 0 auto;
        }
    }
}
</style>
