<script setup>

</script>

<template>
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
                        <a class="nav-link mx-2" href="/home#gallery">Галлерея</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/olimpiada">Олимпиады</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/home#contacts">Контакты</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="/form">Связатся с нами</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2 active" href="/schedule">Рассписание</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
    <h1>1 Класс</h1>
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">1а класс</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">1б класс</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">1в класс</a>
                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">1г класс</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content row nav" id="nav-tabContent">
                <div class="tab-pane  fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Алгебра<br>2.Забони руси<br>3.Забони англиси<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Алгебра<br>2.Забони руси<br>3.Забони англиси<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Алгебра<br>2.Забони руси<br>3.Забони англиси<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Алгебра<br>2.Забони руси<br>3.Забони англиси<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Алгебра<br>2.Забони руси<br>3.Забони англиси<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони англиси<br>2.Забони руси<br>3.Расм<br>4.Касбу хунар</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div><br><br>
    <h1>2 Класс</h1>
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home2" role="tab" aria-controls="home">2а класс</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile2" role="tab" aria-controls="profile">2б класс</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages2" role="tab" aria-controls="messages">2в класс</a>
                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings2" role="tab" aria-controls="settings">2г класс</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-home2" role="tabpanel" aria-labelledby="list-home-list">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-profile2" role="tabpanel" aria-labelledby="list-profile-list2">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-messages2" role="tabpanel" aria-labelledby="list-messages-list2">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-settings2" role="tabpanel" aria-labelledby="list-settings-list2">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br><br>
    <h1>3 Класс</h1>
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home3" role="tab" aria-controls="home">3а класс</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile3" role="tab" aria-controls="profile">3б класс</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages3" role="tab" aria-controls="messages">3в класс</a>
                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings3" role="tab" aria-controls="settings">3г класс</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-home3" role="tabpanel" aria-labelledby="list-home-list3">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-profile3" role="tabpanel" aria-labelledby="list-profile-list3">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-messages3" role="tabpanel" aria-labelledby="list-messages-list3">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-settings3" role="tabpanel" aria-labelledby="list-settings-list3">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br><br>
    <h1>4  Класс</h1>
    <div class="row mb-5">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home4" role="tab" aria-controls="home">4а класс</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile4" role="tab" aria-controls="profile">4б класс</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages4" role="tab" aria-controls="messages">4в класс</a>
                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings4" role="tab" aria-controls="settings">4г класс</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-home4" role="tabpanel" aria-labelledby="list-home-list">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-profile4" role="tabpanel" aria-labelledby="list-profile-list2">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-messages4" role="tabpanel" aria-labelledby="list-messages-list2">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-settings4" role="tabpanel" aria-labelledby="list-settings-list2">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Понедельник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Вторник</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Среда</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Четверг</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Пятница</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Суббота</h1>
                                    <p>1.Забони модари<br>2.Таърихи халки точик<br>3.Зоология<br>4.Забони модари</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>

</style>
