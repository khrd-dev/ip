<template>
    <div class="v-add-item">
        <h1 class="v-add-item__title">Добавление товара</h1>
        <form class="v-add-item__form" @submit.prevent="submitHandler">
            <div class="v-add-item__input-name">
                <label
                    >Наименование товара
                    <img
                        class="img-red-dot"
                        src="../assets/redd.png"
                        alt="image-redd"
                    />
                </label>
                <input
                    id="name"
                    type="text"
                    class="validate"
                    placeholder="Введите наименование товара"
                    v-model="nameItem"
                    :class="{
                        invalid: $v.nameItem.$dirty && !$v.nameItem.required,
                    }"
                />
                <p
                    class="v-add-item__info"
                    v-if="$v.nameItem.$dirty && !$v.nameItem.required"
                >
                    Поле является обязательным
                </p>
            </div>
            <div class="v-add-item__input-discription">
                <label>Описание товара</label>
                <textarea
                    class="v-add-item__textarea"
                    id="description"
                    type="text"
                    placeholder="Введите описание товара"
                    v-model="description"
                />
            </div>
            <div class="v-add-item__input-url">
                <label
                    >Ссылка на изображение товара
                    <img
                        class="img-red-dot"
                        src="../assets/redd.png"
                        alt="image-redd"
                    />
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
                <p
                    class="v-add-item__info"
                    v-if="$v.url.$dirty && !$v.url.required"
                >
                    Поле является обязательным
                </p>
                <p
                    class="v-add-item__info"
                    v-else-if="$v.url.$dirty && !$v.url.url"
                >
                    Поле должно содержать корректный URL-адрес
                </p>
            </div>
            <div class="v-add-item__input-price">
                <label
                    >Цена товара
                    <img
                        class="img-red-dot"
                        src="../assets/redd.png"
                        alt="image-redd"
                    />
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
                <p
                    class="v-add-item__info"
                    v-if="$v.price.$dirty && !$v.price.required"
                >
                    Поле является обязательным
                </p>
                <p
                    class="v-add-item__info"
                    v-else-if="$v.price.$dirty && !$v.price.numeric"
                >
                    Поле должно содержать только цифры
                </p>
            </div>
            <div class="v-add-item__card-action">
                <div>
                    <button
                        class="v-add-item__card-action-btn"
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
    margin-bottom: 32px;
    &__title {
        margin-top: 0;
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
    }
    &__form {
        max-width: 284px;
        padding: 24px;
        height: min-content;
        background: #fffefb;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
            0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
    }
    &__card-action-btn {
        background: #eeeeee;
        border-radius: 10px;
        border: none;
        outline: none;
        max-width: 284px;
        width: 100%;
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
            box-shadow: 0px 0px 30px #b4b4b4, 0px 6px 10px rgba(0, 0, 0, 0.521);
        }
    }
    &__textarea {
        margin-top: 2px;
        margin-bottom: 10px;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: none;
        max-width: 252px;
        width: 100%;
        height: 76px;
        padding: 16px 16px 16px 16px;
        resize: none;
        font-family: "Source Sans Pro";
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        &::placeholder {
            color: #b4b4b4;
            cursor: text;
        }
        &:focus {
            outline: none;
        }
    }
    &__input-price {
        position: relative;
        input {
            margin-bottom: 24px;
        }
    }
    &__input-url,
    &__input-name {
        position: relative;
    }
    &__info {
        position: absolute;
        top: 55px;
        font-weight: 400;
        font-size: 8px;
        line-height: 10px;
        letter-spacing: -0.02em;
        color: #ff8484;
    }
}
.active {
    background: #7bae73 !important;
    color: white !important;
    &:hover {
        box-shadow: 0px 0px 20px #7bae73, 0px 6px 10px rgba(0, 0, 0, 0.521) !important;
    }
}
.invalid {
    border: 1px solid #ff8484;
}
.img-red-dot {
    margin-bottom: 6px;
}
input {
    margin-top: 2px;
    margin-bottom: 10px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    max-width: 252px;
    width: 100%;
    height: 34px;
    padding-left: 16px;
    padding-right: 16px;
    font-family: "Source Sans Pro";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    &::placeholder {
        color: #b4b4b4;
        cursor: text;
    }
    &:focus {
        outline: none;
        box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.1);
    }
}

label {
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
}

@media (max-width: 1140px) {
    .v-add-item {
        position: relative;
        &__title {
            margin: 0 auto 16px auto;
            width: 332px;
        }
        &__form {
            margin: 0 auto;
        }
    }
}
</style>
