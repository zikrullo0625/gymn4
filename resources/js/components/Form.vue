<script>
import axios from "axios";

export default {
    data () {
        return {
            name: null,
            email: null,
            phone: null,
            check: false
        }
    },
    methods: {
        send () {
            if(this.name === null || this.email === null || this.phone === null){
                this.check = true;
            }
            else{
                console.log([this.name, this.email, this.phone]);
                window.location.href = '/home'
            }

        }
    }
}
</script>
<template>
    <body>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Гимназия №4 города Худжанд</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <a class="nav-link mx-2 " aria-current="page" href="/home">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="#gallery">Галлерея</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/olimpiada">Олимпиады</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="#contacts">Контакты</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 active" href="/form">Связатся с нами</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/schedule">Рассписание</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="section-first1 container ">
        <div class=" mx-auto w-50">
            <h1>Связатся с нами</h1>
            <div class="btn btn-danger mx-auto" v-show="check">Заполните все поля!</div><br>
            <label  class="col-sm-2 col-form-label" for="name">Name</label>
            <input class="form-control" id="name" v-model="name">
            <label  class="col-sm-2 col-form-label" for="email">Email</label>
            <input class="form-control" id="email" v-model="email">
            <label  class="col-sm col-form-label" for="phone">Phone number</label>
            <input class="form-control" id="phone" v-model="phone">
            <button @click="send" class="btn btn-success mt-2">Send</button>
        </div>
    </div>

    </body>
</template>
<style scoped>

</style>
