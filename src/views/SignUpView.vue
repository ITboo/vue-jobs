<script setup>
import { ref } from 'vue'

const email = ref();
const password = ref();

const signup = async () => {
    console.log(
        'signed up'
    )
}
</script>

<template>
    <section class="container">
        <h2 class="signup__title">Sign Up</h2>
        <form class="form">
            <div class="">
                <span class="">
                    <i class="pi pi-user"></i>
                </span>
                <input type="email" v-model="email" placeholder="Your Email" class="form__input" />
            </div>
            <div class="">
                <span class="">
                    <i class="pi pi-at"></i>
                </span>
                <input type="password" v-model="password" placeholder="Password" class="form__input" />
            </div>
            <div class="form__footer">
                <button label="Signup" @click="signup" class="signup__btn btn">Sigh Up</button>
                <span class="signup__text">Are you already registered? <router-link to="/signin">Sign
                        in</router-link></span>
            </div>
        </form>
    </section>
</template>
<style scoped>
.signup__title {
    text-align: center;
}

.form {
    width: 30%;
    margin: auto;
}

.form__input {
    width: 80%;
    margin: 10px;
    padding: 4px;
}

.signup__btn {
    margin: auto;
    background-color: var(--main-color);
    color: var(--white);
}

.form__footer {
    display: flex;
    flex-direction: column;
}

.signup__text {
    margin-top: 10px;
    text-align: center;
}
</style>