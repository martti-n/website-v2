<template>
    <div class="container-big">
        <div class="container">
            <div class="row">
                <div class="col one" @mouseover="changeText('app1', 'text1', 'btns1')" @mouseout="changeTextBack('app1', 'text1', 'btns1')">
                    <div class="text">
                        <h3 id="app1">SkiCalc</h3>
                        <p id="text1">An application for ski jumpers to calculate their required ski lengths and BMI.</p>
                    </div>
                    <div class="btns" id="btns1">
                        <div class="btn">
                            <a href="https://github.com/martti-n/skiCalc-v2" target="_blank">code</a>
                        </div>
                        <div class="btn">
                            <a href="http://nomme-skicalc.herokuapp.com/" target="_blank">try it</a>
                        </div>
                    </div>
                </div>
                <div class="col two" @mouseover="changeText('app2', 'text2', 'btns2')" @mouseout="changeTextBack('app2', 'text2', 'btns2')">
                    <div class="text">
                        <h3 id="app2">Budget</h3>
                        <p id="text2">Enter your budget, add items on the go and have a great overview of your expenses. </p>
                    </div>
                    <div class="btns" id="btns2">
                        <div class="btn">
                            <a href="https://github.com/martti-n/budget-app" target="_blank">code</a>
                        </div>
                        <div class="btn">
                            <a href="https://martti-budget-app.herokuapp.com/" target="_blank">try it</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col three" @mouseover="changeText('app3', 'text3', 'btns3')" @mouseout="changeTextBack('app3', 'text3', 'btns3')">
                    <div class="text">
                        <h3 id="app3">LoginApp</h3>
                        <p id="text3">Test assignment. Log in, create, edit and delete users with a REST API.</p>
                    </div>
                    <div class="btns" id="btns3">
                        <div class="btn">
                            <a href="https://github.com/martti-n/test-application-Vuex" target="_blank">code</a>
                        </div>
                        <div class="btn">
                            <a href="http://test-assignment-martti.s3-website.eu-west-3.amazonaws.com/signin" target="_blank">try it</a>
                        </div>
                    </div>
                </div>
                <div class="col four" @mouseover="changeText('app4', 'text4', 'btns4')" @mouseout="changeTextBack('app4', 'text4', 'btns4')">
                    <div class="text">
                        <h3 id="app4">TrainTogether</h3>
                        <p id="text4">Landing page for a fictional application. Not fully resposive, but might use it in the future.</p>
                    </div>
                    <div class="btns" id="btns4">
                        <div class="btn">
                            <a href="https://github.com/martti-n/Train_together-landingPage" target="_blank">code</a>
                        </div>
                        <div class="btn">
                            <a href="#">try it</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        changeText(appname, text, btns) {
            document.getElementById(appname).style.display = "none"
            document.getElementById(text).style.display = "flex"
            document.getElementById(btns).style.display = "flex"
        },
        changeTextBack(appname, text, btns) {
            document.getElementById(appname).style.display = "flex"
            document.getElementById(text).style.display = "none"
            document.getElementById(btns).style.display = "none"
        }
    }
}
</script>

<style scoped>
.container-big {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    width: 50%;
    height: 60vh;
    margin: 30px auto;
}
.row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.col {
    width: 50%;
    height: 30vh;
    margin: 3px;
    transition: background 0.3s ease-in-out;
}

.text {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.btns {
    width: 100%;
    height: 10vh;
    display: none;
    justify-content: flex-start;
    justify-content: center;
    align-items: center;
}
.btn {
    height: 40px;
    width: 80px;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid black;
    transform: scale(1);
    transition: transform 0.2s;
}
.btn:hover {
    cursor: pointer;
    border: 1px solid black;
    transform: scale(1.05);
    transition: transform 0.2s;
}

.btn a {
    text-decoration: none;
    color: black;
    font-family: 'Source Serif Pro', sans-serif;
    font-weight: 600;
}
.col:hover {
    background: #fff;
    transition: background 0.3s ease-in-out;
}

h3 {
    font-size: 24px;
}

p {
    width: 75%;
    display: none;
    margin-top: 20px;
    color: white;
}

.col.one {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./img/skicalcpreview.jpg);
    background-size: 470px;
}
.col.two {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./img/budgetpreview.jpg);
    background-size: 470px;
}
.col.three {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./img/loginpreview.jpg);
    background-size: 470px;
}
.col.four {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(./img/ttpreview.jpg);
    background-size: 470px;
}

.col.one:hover,
.col.two:hover,
.col.three:hover,
.col.four:hover {
    background-size: 490px;
}

@media only screen and (max-width: 1200px) {
    .btn {
       height: 30px;
       width: 60px; 
    }
    
    p {
        font-size: 15px;
    }
}

@media only screen and (max-width: 810px) {
    p {
        font-size: 14px;
    }
    a {
        font-size: 14px;
    }

    .container {
        width: 70%;
    }
    h3 {
        font-size: 20px;
    }
}

@media only screen and (max-width: 620px) {
    .container {
        width: 85%;
    }
    
    .row {
        flex-direction: column;
    }

    .col {
        width: 100%
    }
}
    

</style>