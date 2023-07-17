<script setup>

</script>

<template>
  <div class="section3-area">
      <h1 class="services-h1">My Services</h1>
      <div class="services-container">
          <div class="services-card">
              <img class="services-icon" alt="fullstack" src="../assets/services-icons/programming.png"/>
              <h4>Full-Stack Solutions</h4>
              <p>From frontend to backend, you get the whole package done.</p>
          </div>
          <div class="services-card">
              <img class="services-icon" alt="ui" src="../assets/services-icons/ui-design.png"/>
              <h4>UI Design</h4>
              <p>Providing you with elegant and modern UI designs for your website.</p>
          </div>
          <div class="services-card">
              <img class="services-icon" alt="ux" src="../assets/services-icons/ux-design.png"/>
              <h4>UX Optimization</h4>
              <p>User experience is the key to success and optimization is the name of the game.</p>
          </div>
          <div class="services-card">
              <img class="services-icon" alt="responsive" src="../assets/services-icons/ux.png"/>
              <h4>Responsiveness</h4>
              <p>Mobile or desktop, I got you covered.</p>
          </div>
          <div class="services-card">
              <img class="services-icon" alt="dbmg" src="../assets/services-icons/database.png"/>
              <h4>Database Management</h4>
              <p>Ensuring that your user data is safe and secure at all times.</p>
          </div>
          <div class="services-card">
              <img class="services-icon" alt="satisfaction" src="../assets/services-icons/smile.png"/>
              <h4>Satisfaction Guaranteed</h4>
              <p>Your satisfaction is my number one priority.</p>
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.section3-area {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 5rem 0;
  overflow: hidden;

  @media (max-width: 1181px) {
    padding: 1rem;
  }
}
.services-h1 {
  color: var(--accentColor);
  font-size: 3rem;
  line-height: 4.5rem;

  @media (max-width: 1181px) {
    font-size: 2rem;
    line-height: 3rem;
  }
}
.services-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5vw;

    :hover {
        transition: background 0.1s ease-in;
        background: var(--primaryColor);
    }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1181px) {
    padding: 0;
  }
}

.services-card {
  text-align: center;
  width: 20vw;
  color: var(--textColor);
  padding: 2rem;
  background: var(--backgroundColor);
  border: 0.5rem solid var(--textColor);
  border-radius: 0.5rem;

  @media (max-width: 1181px) {
    width: 100%;
  }

  .services-icon {
    height: 5vw;
    width: auto;
    margin-bottom: 2rem;

    @media (max-width: 1181px) {
      height: 15vw;
      width: auto;
    }
  }
}
</style>