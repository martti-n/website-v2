<template>
    <div class="home">
        <div class="text">
            <h1>martti nõmme</h1>
            <p>my professional website</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .home {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text {
        text-align: center;
    }
    h1 {
        font-size: 3em;
        margin: 0;
        color: black;
        font-weight: 500;
    }
    h1:after {
        background: #000;
        content: '';
        display: block;
        height: 2px;
        margin: 0.75em auto 0 auto;
        width: 4em;
    }
    p {
        color:black;
        font-weight: 500;
        margin-top: 2em;
    }
</style>