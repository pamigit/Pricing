<template>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
        <h1 class="display-4 text-center">Sign Up</h1>
        <div>
        <form v-on:submit.prevent="handleSubmit" class="container">
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input ref="first" v-bind:class="{ 'has-error': submitting && invalidEmail }" v-model="user.email" v-on:focus="clearStatus" v-on:keypress="clearStatus" type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input v-bind:class="{ 'has-error': submitting && invalidPass }" v-model="user.pass" v-on:focus="clearStatus" type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12">
                    <p v-if="error && submitting" class="error-message">Please fill out all required fields❗❗❗</p>
                    <p v-if="success" class="success-message">User successfully sign in ✅</p>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button class="btn btn-primary">Sign in</button>
                </div>
            </div>
            
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    data() {
        return {
            error: false,
            submitting: false,
            success: false,
            user: {
                email: "",
                pass: ""
            }
        };
    },
    computed: {
        invalidEmail() {
            return this.user.email === "";
        },
        invalidPass() {
            return this.user.pass === "";
        }
    },
    methods: {
        handleSubmit() {
            this.clearStatus();
            this.submitting = true;

            if (this.invalidEmail || this.invalidPass) {
                this.error = true;
                return;
            }

            
            //this.$emit("signin-user", this.user);
            this.userEmail = true;
            this.$refs.first.focus();
            this.user = {
                email: "",
                pass: ""
            };
            this.clearStatus();
            this.submitting = false;
        },
        clearStatus() {
            this.success = false;
            this.error = false;
        }
    }
}
</script>

<style scoped>
    .error-message {
        color: #d33c40;
    }

    .success-message {
        color: #32a95d;
    }
</style>