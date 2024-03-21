<script>

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
                        <a class="nav-link mx-2 active" aria-current="page" href="/home">Главная</a>
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
                        <a class="nav-link mx-2" href="/form">Связатся с нами</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/schedule">Рассписание</a>
                    </li>
                    <button class="btn btn-outline-danger" ><a href="/" class="text">Выйти</a></button>
                </ul>
            </div>
        </div>
    </nav>
    <div class="section-first">
        <h1 class="first-text">Гимназия №4</h1>
    </div>

<div class="section-second" >
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6  mx-auto">
                <h1 class="pb-2">О нас</h1>
                <h5 class="">
                    Мы являемся одним из ведущих образовательных учреждений в регионе, обеспечивая высококачественное образование и разностороннее развитие для каждого нашего ученика. Наша гимназия гордится богатой историей успехов, уникальной образовательной программой и превосходными кадрами педагогического состава.</h5>

            </div>
        </div>
    </section>
    <div class="grid" id="gallery">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMO3hB68aT428KSs0CyuwcneXsEEs3X0x6eg&usqp=CAU" alt="" >
        <img src="https://kuban24.tv/wp-content/uploads/2023/10/photo_2023-10-02_10-26-46-800x480.jpg" alt="" width="626" height="417">
        <img src="data:image/jpeg;base64,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" alt="">
        <img src="data:image/jpeg;base64,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" alt="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLDM5z6oFjG5KNQ4rSlMUbnohsC4mSqcSJQ&usqp=CAU" alt="" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzP7hNnFW-p7bf8Skkq2b6zAanymeBHYYQmA&usqp=CAU" alt="" >
    </div>

</div>

    <div class="section-third" id="contacts">
        <div class="profile-card">
            <div class="profile-image">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6916.3679569069645!2d69.61830434973575!3d40.281276263256494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1b2ff89f241c7%3A0x1d52dfaee68171f6!2z0JPQuNC80L3QsNC30LjRjyA0!5e1!3m2!1sru!2s!4v1705945004723!5m2!1sru!2s" width="800" height="350" style="border-radius:10px;" allowfullscreen="" loading="lazy" ></iframe>
            <div class="profile-contact-name">
                Гимназия №4 города Худжанд
            </div>
            <div class="profile-details">
                <p>
                    <i class="fa fa-envelope"></i>
                    <a href="#">abc@abc.com</a>
                </p>
                <p>
                    <i class="fa fa-phone"></i>
                    <a href="#">
                        +992 (3422) 6-16-74</a>
                </p>
                <p>735708, Худжанд, ул. К. Худжанди, 161</p>
            </div>
        </div>
    </div>
    </div>
    </body>
</template>
<style>
.profile-details p:last-child{
    padding-bottom: 10px;
}
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    gap: 10px;
    padding: 2rem;
}
img{
    max-width: 100%;
    width: 626px;
    height: 417px;
    border-radius: 1rem;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    }
}

@media (max-width: 480px) {
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}
.section-first{
    //background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://guu.ru/wp-content/uploads/%D0%9F%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D0%BD%D0%B8%D0%BC%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BB%D0%B0%D1%81%D1%81.jpg");

}
.section-second{
        //background: radial-gradient(circle, rgba(255,111,0,1) 75%, rgba(234,235,54,1) 100%);
}
* {
    box-sizing: border-box;
}
body {
    margin: 0;
}
.first-text {
    display: grid;
    place-content: center;
    min-height: 100vh;
    font-family: "Oswald", sans-serif;
    font-size: 800%;
    font-weight: 900;
    text-transform: uppercase;
    color: orange;
    -webkit-text-stroke: 5px orangered;
}

@media screen and (max-width: 600px) {
    .first-text {
        font-size: 350%;
        -webkit-text-stroke: 3px orangered;
        text-align: center;
    }
}
@media screen and (max-width: 600px) {
    img {
        width: 100%;
        height: 100%;
    }
}
.profile-card {
    padding: 10px;
    width: 90%;
    display: inline-block;
    background: #013864;
    color: white;
    margin: 6px 4px;
    box-shadow: 1px 1px 5px #333;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    font-size: xx-large;
}

.profile-image {
    height: 600px;
}

.profile-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-details {
    padding: 5px 18px;
}

.profile-details p {
    margin: 6px 0px;
    justify-content: space-between;
    align-items: center;
}

.profile-contact-name {
    padding: 5px 18px;
    text-align: center;
    font-weight: bold;
}

.main-section {
    width: 95%;
    margin: 0 auto;
    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;
}

div.profile-details a {
    text-decoration: none;
    color: white;
    font-size: xx-large;

}

@media screen and (max-width: 600px) {
    .nav-profile-container img {
        width: 15em;
        height: 15em;
    }
    .profile-card {
        width: 87%;
    }
}

.section-third{
    padding-left: 10%;
    background-image: url("https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais");
}

@media screen and (max-width: 600px) {
    iframe{
        width: 100%;
    }
    .profile-image{
        height: 60%;
    }
}
.text{
    text-decoration: none;
    color: red;
}
.text:hover{
    text-decoration: none;
    color: red;
    font-size: 20px;
}
</style>
