<script>
import axios from 'axios';

export default {
    data () {
        return {
            Grade: null,
            Day: null,
            Schedule: null
        }
    },
    methods: {
        send () {
            axios.post('/api/schedule/', { Grade: this.Grade, Day: this.Day, Schedule: this.Schedule })
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

<style>

</style>
