<script setup>
import {onMounted} from "vue";

onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
});
</script>

<template>
    <div class="section2-area">
        <div class="card-border slide-in-left">
            <div class="card-body"></div>
        </div>
        <div>
            <div class="introduction-contact slide-in-right">
                <h2>Software Developer / Engineer</h2>
                <h4>
                    As a self-taught software developer/engineer with over 2 years of experience, I am driven by curiosity and a passion for coding. Working with diverse clients, I've honed my skills across various tech stacks, always seeking to expand my knowledge.
                    <br><br>
                    I enjoy crafting elegant code and solving complex problems. My goal is to deliver practical and efficient software solutions tailored to the unique needs of each project. Collaborating with clients to bring their ideas to life and make a positive impact in the digital world through innovation is what motivates me.
                </h4>
                <div class="introduction-card">
                    <h4>Name:</h4>
                    <h4>Eugene Lim</h4>
                    <h4>Location:</h4>
                    <h4>Malaysia</h4>
                    <h4>Phone:</h4>
                    <h4>+6012 - 321 - 3929</h4>
                    <h4>Email:</h4>
                    <h4>eugenelimjq1217@gmail.com</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section2-area {
  margin: 0 -10rem;
  min-height: calc(100dvh - 5rem);
  background: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}
@media (max-width: 1181px) {
  .section2-area {
    margin: 0 !important;
    height: auto !important;
    padding: 1rem !important;
    grid-template-columns: 1fr !important;
    gap: 4rem !important;
  }
  .card-border {
    height: 50vw !important;
    width: 50vw !important;
  }
}
@media (min-width: 1181px) {
  .section2-area {
    padding: 0 10rem !important;
  }
}
.card-border {
  border: 0.5rem solid var(--accentColor);
  height: 30vw;
  width: 30vw;
  padding: 0.5rem;
}
.card-body {
  background: var(--textColor);
  height: 100%;
  width: 100%;
}
.introduction-contact {
  color: var(--textColor);
  overflow: hidden;
  h2 {
    font-size: 2rem;
    line-height: 3rem;
    overflow-wrap: break-word;
  }
  h4 {
    font-size: 1rem;
    line-height: 1.5rem;
    overflow-wrap: break-word;
  }
}
@media (max-width: 600px) {
  .introduction-contact {
    padding-right: 0 !important;
  }
  .introduction-card {
    margin-right: 0 !important;
    grid-template-columns: 0.2fr 0.7fr !important;
  }
}
.introduction-card {
  margin-top: 3rem;
  margin-right: 15rem;
  display: grid;
  place-items: flex-start;
  grid-template-columns: 0.3fr 0.7fr;
  gap: 1rem;
}

.slide-in-left {
    animation: slide-in-left 0.3s 0.2s both cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-110%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-right {
    animation: slide-in-right 0.3s 0.5s both cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slide-in-right {
    0% {
        transform: translateX(110%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

</style>