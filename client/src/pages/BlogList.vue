<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

let blogs = ref({})

const formatDate = (x) => {
    let date = new Date(x)
    return date.toLocaleDateString()
};

const goToBlog = (x) => {
    window.location = "blog/" + x["_id"]
}

onMounted(async () => {
    try {
        const response = await axios.get('/api/blog')

        console.log(response)
        blogs.value = response.data.data
        console.log(blogs)
    } catch (err) {
        console.log(err);
    }
})
</script>

<template>
    <div class="container-fluid blog-spot">
        <div style="text-align: center; color: var(--primaryColor); margin-bottom: 2rem;">
            <h2>
                Welcome to my Blog
            </h2>
            <h4>
                Where I document my journey as a developer / engineer
            </h4>
        </div>
        <div class="blog-area">
            <div v-for="blog in blogs" class="blog-post" @click="goToBlog(blog)">
                <div class="blog-image">
                    <img src="..." alt="">
                </div>
                <div class="blog-words">
                    <h2>
                        {{ blog.blogTitle }}
                    </h2>
                    <h4>
                        {{ blog.blogDescription }}
                    </h4>
                    <small style="margin-left: auto;">
                        Created at {{ formatDate(blog.timestamp) }}
                    </small>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<style scoped>
.blog-spot {
    min-height: 100vh;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.blog-area {
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
    width: 50%;
}
.blog-post {
    display: grid;
    grid-template-columns: 0.25fr 1.75fr;
    background: var(--secondaryColor);
    border-radius: 0.25rem;
}
.blog-image {
    height: 12rem;
    width: 12rem;
    object-fit: contain;
    background: #747bff;
    border-radius: 0.25rem 0 0 0.25rem;
}
.blog-words {
    padding: 1rem;
}
</style>