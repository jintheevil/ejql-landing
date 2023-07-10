<script setup>
</script>

<template>
    <div class="main-footer">
        <h2 style="text-align: center;">
            Looking for a solution?
            <br>
            Need a website to build your business?
        </h2>
        <span style="margin-bottom: 2rem; font-size: 1.25rem;">
            Let's chat about how I can help you.
        </span>
        <button class="btn btn-accent">
            Contact me
        </button>
        <div class="socials">
            <a href="https://www.facebook.com/jinthepotatasGFY/" target="_blank">
                <facebook-icon class="icon-color">
                </facebook-icon>
            </a>
            <a href="https://wa.me/60123213929" target="_blank">
                <whatsapp-icon class="icon-color"
                ></whatsapp-icon>
            </a>
            <a href="https://www.linkedin.com/in/eugene-lim-4ab5401bb/" target="_blank">
                <linkedin-icon class="icon-color"
                ></linkedin-icon>
            </a>
        </div>
        <small>Based in Malaysia, helping all businesses big and small.</small>
        <small style="font-size: 0.65rem;">© 2023 Website Design & Business Solutions • Eugene Lim</small>
    </div>
</template>

<style lang="scss" scoped>
.main-footer {
    width: 100vw;
    display: grid;
    place-items: center;
    background: var(--primaryColor);
    padding-top: 2rem;
    color: var(--textColor);
    margin-left: -15rem;

    @media (max-width: 600px) {
        margin-left: 0;
    }
}
h2 {
    font-size: 2rem;
    line-height: 3rem;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        line-height: 2.25rem;
    }
}
.socials {
    display: grid;
    place-items: center;
    gap: 2rem;
    grid-template-columns: auto auto auto;
    padding: 2rem;
}
small {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-bottom: 1.5rem;

    @media (max-width: 600px) {
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
}
.icon-color {
    color: var(--textColor);

    svg {
        height: 3rem;
        width: 3rem;

        @media (max-width: 600px) {
            height: 2rem;
            width: 2rem;
        }
    }
}
</style>