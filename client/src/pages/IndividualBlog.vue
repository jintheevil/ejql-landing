<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

let blog = ref({})

const formatDate = (x) => {
    let date = new Date(x)
    return date.toLocaleDateString()
};

onMounted( async () => {
    try {
        const response = await axios.get('/api/blog/' + useRoute().params.id)

        console.log(response)
        blog.value = response.data.data[0]
        console.log(blog)
    } catch (err) {
        console.log(err)
    }
})
</script>

<template>
  <div class="blog-section">
      <small>
          Created @ {{ formatDate(blog.timestamp) }}
      </small>
      <h1>
          {{ blog.blogTitle }}
      </h1>
      <div v-html="blog.blogContent">
      </div>
  </div>
</template>

<style scoped>
.blog-section {
    min-height: 100vh;
    color: var(--textColor);
    padding: 5rem;
}
h1 {
    margin-bottom: 4rem;
}
</style>