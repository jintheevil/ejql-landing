<script setup>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

const slides = [
    {
        id: 1,
        title: 'Hugemax Solution Sdn. Bhd.',
        content: 'Test'
    },
    {
        id: 1,
        title: 'Hugemax Solution Sdn. Bhd.',
        content: 'Test'
    },
    {
        id: 1,
        title: 'Hugemax Solution Sdn. Bhd.',
        content: 'Test'
    }
]
</script>

<template>
  <div class="container-fluid">
      <svg class="line" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 400"><path d="M12.107623100280762,231.39013671875C34.062779169082646,220.4125584411621,84.23317873954772,157.3632327270508,141.25559997558594,166.81614685058594C198.27802121162415,176.2690609741211,238.52017318725586,290.654708404541,347.53363037109375,286.9955139160156C456.54708755493164,283.33631942749025,708.5650384521484,169.38116027832032,782.51123046875,145.29147338867188" fill="none" stroke-width="25" stroke="#4281ff" stroke-linecap="round" stroke-dasharray="0 0" stroke-opacity="0.4"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
      <div class="section1-area">
          <h1>Hi, I'm Eugene</h1>
          <h2 class="accentFont">
              a Full-Stack Developer with nothing but a dream and a passion.
          </h2>
          <h4 class="introduction-text">
              I'm a self-taught web/mobile developer with more than 2 years of professional experience.
              <br>
              Delivering you a practical, aesthetic, and professional website is my passion, growing your business is my purpose.
          </h4>
      </div>
      <div class="section2-area">
          <div class="card-border">
              <div class="card-body"></div>
          </div>
          <div>
              <div class="introduction-contact">
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
      <div class="section3-area">
          <div>
              <h1 class="projects-h1">Past Projects</h1>
              <h2 class="projects-h2">and constantly adding more...</h2>
          </div>
          <Flicking :options="{ circular: true }">
              <a class="flick-panel" href="https://www.hugemaxsolutions.com.my" target="_blank">
                  <h4 class="flick-title">Hugemax Solutions Sdn. Bhd.</h4>
                  <img class="panel" alt="#" src="../assets/projects/hugemax-website.png"/>
              </a>
          </Flicking>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    position: relative;
    padding: 0;
}
.section1-area {
    position: relative;
    min-height: 100vh;
    padding: 5rem;
    color: var(--primaryColor);
    overflow: hidden;

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
        font-size: 1.5rem !important;
    }
}
.introduction-text {
    @media (max-width: 600px) {
        font-size: 1.2rem !important;
        white-space: pre-wrap;
    }
}
.section2-area {
    margin: 0 -10rem;
    min-height: 100vh;
    background: var(--backgroundColor);
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    @media (max-width: 1181px) {
        margin: 0;
        height: auto;
        padding: 1rem;
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    @media (min-width: 1181px) {
        padding: 0 10rem;
    }
}
.card-border {
    border: 0.5rem solid var(--accentColor);
    height: 30vw;
    width: 30vw;
    padding: 0.5rem;

    @media (max-width: 1181px) {
        height: 50vw;
        width: 50vw;
    }
}
.card-body {
    background: var(--primaryColor);
    height: 100%;
    width: 100%;
}
.introduction-contact {
    color: var(--textColor);
    overflow: hidden;

    @media (max-width: 600px) {
        padding-right: 0;
    }
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
.introduction-card {
    margin-top: 3rem;
    margin-right: 15rem;
    display: grid;
    place-items: flex-start;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media(max-width: 600px) {
        margin-right: 0;
        grid-template-columns: 0.2fr 0.7fr;
    }
}
.section3-area {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 5rem;
    overflow: hidden;

    @media (max-width: 600px) {
      padding: 1rem;
    }
}
.projects-h1 {
    color: var(--primaryColor);
    font-size: 4rem;
    line-height: 6rem;

    @media (max-width: 600px) {
        font-size: 2rem;
        line-height: 3rem;
    }
}
.projects-h2 {
    color: var(--accentColor);
    font-size: 3rem;
    line-height: 4.5rem;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        line-height: 2.25rem;
    }
}
.flick-panel {
    display: grid;
    place-items: center;
}
.flick-title {
    color: var(--textColor);
    font-size: 2rem;
    line-height: 3rem;
    text-decoration: underline;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
        font-size: 1.2rem;
        line-height: 3.3rem;
    }
}
.panel {
    height: auto;
    width: 45rem;
    margin-right: 2rem;
    background: #fafafa;
    object-fit: cover;

    @media (max-width: 1181px) {
        width: 20rem;
        margin-left: 2rem;
    }
}
</style>