<!--<script setup>-->
<!--import { ref } from "vue";-->
<!--import axios from "axios";-->

<!--let blog = ref({-->
<!--    blogTitle: '',-->
<!--    blogDescription: '',-->
<!--    blogContent: ''-->
<!--})-->

<!--const createBlog = async () => {-->
<!--    try {-->
<!--        const response = await axios.post('/api/blog',-->
<!--            blog.value-->
<!--        );-->
<!--        if (response.status === 200) {-->
<!--            console.log('Post successfully created')-->
<!--        } else {-->
<!--            console.log(response)-->
<!--        }-->
<!--    } catch (err) {-->
<!--        console.log(err.response)-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div class="container-fluid p-5">-->
<!--      <div class="form-control p-5">-->
<!--          <form>-->
<!--              <div class="mb-3">-->
<!--                  <label for="blogTitle" class="form-label">Blog Title:</label>-->
<!--                  <input type="text" class="form-control" id="blogTitle" aria-describedby="emailHelp" v-model="blog.blogTitle">-->
<!--              </div>-->
<!--              <div class="mb-3">-->
<!--                  <label for="blotDescription" class="form-label">Blog Description:</label>-->
<!--                  <input type="text" class="form-control" id="blotDescription" aria-describedby="emailHelp" v-model="blog.blogDescription">-->
<!--              </div>-->
<!--              <div class="mb-3">-->
<!--                  <label for="blogContent" class="form-label">Blog Content:</label>-->
<!--                  <QuillEditor theme="snow" toolbar="full" id="blogContent" content-type="html" v-model:content="blog.blogContent">-->
<!--                  </QuillEditor>-->
<!--              </div>-->
<!--              <button class="btn btn-primary" @click="createBlog" href="" type="button">Submit</button>-->
<!--          </form>-->
<!--      </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.form-control {-->
<!--    background: var(&#45;&#45;secondaryColor);-->
<!--}-->
<!--</style>-->