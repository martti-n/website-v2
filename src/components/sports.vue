<template>
    <div class="sport">
        <div class="text">
            <div class="main">
                <p>
                I have been an athlete for the most of my life. I started ski jumping at the age of 8 and always dreamed of reaching World Cup level or even participate at the Olympics or World Championships. With hard work and consistency I reached my childhood dreams being in the national team for 7 years straight, participated in Pyeongchang 2018 Olympics and in 4 World Championships.  After the 2018/19 season I decided that it will be a hobby (quite an awesome one) from that point on and set new goals in life. I did not reach Olympic or World Championship medals but nevertheless this journey taught me alot and had a lot of fun on it! Check my FIS bio below: <br>
                </p>
            </div>
            <div class="social-links">
                <div class="social-link">
                    <a href="https://www.fis-ski.com/DB/general/athlete-biography.html?sectorcode=JP&competitorid=154093" target="_blank">
                        <img src="../../public/img/fis-1-logo-black-and-white.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .sport {
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
        transform: scale(1.2);
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
    }
    @media only screen and (max-width: 312px) {
        .text {
            margin-top: 30px;
        }
    }
</style>