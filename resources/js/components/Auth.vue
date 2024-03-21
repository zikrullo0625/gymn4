<script>
import axios from 'axios';

export default {
    data () {
        return {
            Name: null,
            Password: null
        }
    },
    methods: {
        send () {
            axios.post('/api/login/', { Name: this.Name, Password: this.Password })
                .then(response => {
                    // window.location.href = '/home'
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<template>
    <div class="container align-middle mt-5 w-25 h-25">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="Name">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="Password">
        </div>

        <button @click="send" class="btn btn-primary">Submit</button>
    </div>
</template>

<style scoped>
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}
.h-custom {
    height: calc(100% - 73px);
}
@media (max-width: 450px) {
    .h-custom {
        height: 100%;
    }
}
</style>
