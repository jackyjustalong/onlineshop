
<template>
    <div>
        <h2>please login</h2>
        <form @submit.prevent="login">
            <label for="username">username: </label>
            <input type="text" id="username" v-model="username"><br>
            <label for="password">password: </label>
            <input type="password" id="password" v-model="password"><br>
            <button type="submit">Login</button>
        </form>
    </div>
    <div>
        <img alt="logo" src="../assets/flag.jpg" id="img">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            username: 'Runoob',
            password: 'password'
        }
    },
    methods: {
        login(event) {
            event.preventDefault();
            axios
                .post("http://localhost:8080/login", {
                    username: this.username,
                    password: this.password,
                })
                .then((Response) => {
                    const result = Response.data;
                    if (Response.status === 200) {
                        if(result != null && result != "") {
                            this.$router.push('/success');
                        } else {
                            alert("ユーザー名またはパスワードが間違っています！");
                            this.username = "";
                            this.password = "";
                        }
                    } else {
                        alert("ユーザー名またはパスワードが間違っています！");
                        this.username = "";
                        this.password = "";
                    }
                })
                .catch(() => {
                    alert("ユーザー名またはパスワードが間違っています！");
                    this.username = "";
                    this.password = "";
                })
        }
    }
}
</script>

<style scoped>
    form label, form input, form button {
        margin-bottom: 12px;
    }
    #img{
        width:48%;
        text-align: center;
    }
</style>