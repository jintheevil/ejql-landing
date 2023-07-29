<script setup>
import router from "../router/routes.js";

const goTo = (page) => {
    router.push(page);
}
</script>

<template>
    <div>
        <div class="section1-area">
            <div>
                <h1>Hi, I'm Eugene</h1>
                <h2 class="accentFont">
                    a <span class="accentFont">Full-stack Web Developer</span>
                </h2>
                <h4 class="introduction-text">
                    Crafting digital experiences is my passion. With 2+ years in web and mobile development, I don't just build websites—I amplify your brand. Let's ensure your business doesn't just grow, but thrives.
                </h4>
            </div>
            <div class="introduction-button-area">
                <a class="btn btn-primary btn-lg" @click="goTo('/about')">About Me</a>
                <a class="btn btn-primary btn-lg" @click="goTo('/projects')">My Works</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section1-area {
    min-height: 100vh;
    padding: 5rem;
    color: var(--textColor);
    overflow: hidden;
    display: grid;
    place-items: center;

    @media (max-width: 600px) {
        padding: 1rem;
        height: calc(100vh);
        width: auto;
    }
    h1 {
        font-size: 3rem;
        line-height: 4.5rem;
        letter-spacing: -2%;
        overflow-wrap: break-word;
    }
    h2 {
        font-size: 2rem;
        line-height: 3rem;
        overflow-wrap: break-word;
    }
    h4 {
        font-size: 1.5rem;
        line-height: 2.25rem;
        overflow-wrap: break-word;
    }
}
.accentFont {
    color: var(--accentColor);

    @media (max-width: 600px) {
        //font-size: 1.5rem !important;
        //line-height: 2.25rem;
    }
}
.introduction-text {
    @media (max-width: 600px) {
    }
}
@keyframes blink {
    0%, 50% {
        opacity: 1;
    }
    51%, 100% {
        opacity: 0;
    }
}
h1::after {
    content: '|';
    margin-left: 0.5rem;
    animation: blink 1s infinite;
}

.scroll-down-area {
    width: 100%;
    height: 5rem;
    margin: 10rem auto;
    display: grid;
    place-items: center;

    h2 {
        margin-top: 5rem;
        font-size: 5rem;
        line-height: 7.5rem;
    }
}

.scroll-down-arrow {
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    border-top: 25px solid var(--primaryColor);
}

@keyframes scroll-down {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    20%, 80% {
        transform: translateY(0);
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(300%);
        opacity: 0;
    }
}

.scroll-down-arrow {
    animation: scroll-down 5s infinite;
    margin-bottom: 1rem;
}

.see-more-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

@keyframes rightIn {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    50% {
        opacity: 0.3;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-letter {
    font-size: 2em;
    animation: rightIn 1s ease-in forwards var(--delay);
    opacity: 0;
}

.introduction-button-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin-bottom: 5rem;
    width: 100%;
    gap: 4rem;

    border-top: 0.2rem solid var(--textColor);
    border-bottom: 0.2rem solid var(--textColor);
}

.btn {
    color: var(--textColor);

    &:hover {
        animation: radiate 0.2s forwards;
    }
}

@keyframes radiate {
    0% {
        box-shadow: 0 0 0 0 #fafafa;
    }
    100% {
        box-shadow: 8px 8px 0 0 #fafafa;
    }
}
</style>