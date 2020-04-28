<template>

    <form class="contact-form" @submit.prevent="checkForm">
    <p v-if="errors.length">
    <b>Please enter following information:</b>
    <ul>
    <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
    </p>
    <label>Name</label>
    <input type="text" name="user_name" v-model="user_name">
    <label>Email</label>
    <input type="email" name="user_email" v-model="user_email">
    <label>Message</label>
    <textarea name="message" rows=10 v-model="user_message"></textarea>
    <input type="submit" value="Send">
  </form>


</template>

<script>
import emailjs from 'emailjs-com';
import router from '../router.js'

export default {
    data() {
        return {
            errors: [],
            user_name: null,
            user_email: null,
            user_message: null
        }
    },
    methods: {
        sendEmail: (e) => {
        emailjs.sendForm('gmail', 'personal_website', e.target, 'user_qyxisVIsuVnkpdKJpA4dJ')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                alert('Email successfully sent!')
                router.push('/home')
            }, (error) => {
                console.log('FAILED...', error);
            });
        },
        checkForm(e) {
            if(this.user_name && this.user_email && this.user_message) {
                this.sendEmail(e)
            }

            this.errors = []

            if (!this.user_name) {
                this.errors.push('Your name.')
            
            if (!this.user_email) 
                this.errors.push('Your email.')
            
            if (!this.user_message) 
                this.errors.push('Your message.')
            }
            if (!this.errors.length) {
                return true
            }
        }
    }
}
</script>
<style scoped>
body {
    font-size: 14px;
    color: #666;
    font-family: 'Source Serif Pro', sans-serif;
}

form {
  width: 500px;
  background: white;
  padding: 20px 25px;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
}
form input,
form textarea {
  font: inherit;
  padding: 5px 5px;
  width: 100%;
  margin-top: 3px;
  margin-bottom: 15px;
  box-sizing: border-box;
}
form button {
  border: 1px solid rgba(0,0,0,0.2);
  padding: 8px 35px;
  font-size: 12px;
  background: #888;
  color: white;
}
form label {
  color: #777;
  font-size: 13px;
  margin-bottom: 2px;
  display: block;
}
p {
    text-align: center;
    background: rgba(251, 129, 129, 0.685);
    border: 1px solid rgba(255, 0, 0, 0.349);
    border-radius: 5px;
}

ul {
    list-style: none;
}

@media only screen and (max-width: 2200px) {
    form {
        width: 600px;
    }
}
@media only screen and (max-width: 650px) {
    form {
        width: 500px;
    }
}

@media only screen and (max-width: 520px) {
    form {
        width: 400px;
    }
}
@media only screen and (max-width: 470px) {
    form {
        width: 340px;
    }
}
@media only screen and (max-width: 344px) {
    form {
        width: 300px;
    }
}
</style>