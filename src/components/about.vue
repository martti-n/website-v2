<template>
    <div class="about">
        <div class="text">
            <div class="main">
                <p>After printing my first lines to the console I knew that I wanted to go deep into the web and software development world. Constant thrill to build projects and learn something new everyday keep me going on the goal to be a high-level developer. If you have a great idea, just learn the tools needed and build it! As a former professional athlete I know what it takes to reach your goals - motivation, consistency and time. All that I have learned throughout my sporting career I will be implementing in my career as a developer.</p>
            </div>
            <div class="social-links">
                <div class="social-link">
                    <a href="https://www.facebook.com/martti.nomme" target="_blank"><img src="../../public/img/facebook-3-48.png" alt=""></a>
                </div>
                <div class="social-link">
                    <a href="https://github.com/martti-n" target="_blank"><img src="../../public/img/github-8-48.png" alt=""></a>
                </div>
                <div class="social-link">
                    <a href="https://www.linkedin.com/in/martti-n%C3%B5mme-4643a21a1/" target="_blank"><img src="../../public/img/linkedin-3-48.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .about {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text {
        color: black;
        width: 40%;
        
    }
    .social-link {
        display: block;
        width: 50px;
        margin: 0 20px;
        transform: scale(1);
        opacity: 1;
        transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
    }
    .social-links {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
    img {
        width: 45px;
    }
    p {
        line-height: 1.45;
        letter-spacing: 0.5px;
        font-family: 'Source Serif Pro', serif;
    }
    .social-link:hover {
        transform: scale(1.1);
        opacity: 1;
        transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
    }

    @media only screen and (max-width: 1050px) {
        .text {
            width: 60%;
        }
    }
    @media only screen and (max-width: 700px) {
        .text {
            width: 70%;
        }
    }
    @media only screen and (max-width: 620px) {
        .text {
            width: 80%;
            font-size: 13px;
        }
        .social-link {
            width: 32px;
        }
        img {
            height: 32px;
            width: 32px;
        }

    }
</style>