<template>
  <div>
    <h5>Home</h5>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a href="#/home/news" class="router-link-exact-active router-link-active">
          News
          </a> -->
          <router-link to="/home/news">News</router-link>
        </li>
        <li>
          <!-- <a href="#/home/message" class="">Message</a> -->
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- <ul>
        <li>News001</li>
        <li>News002</li>
        <li>News003</li>
      </ul> -->
      <div>
          <router-view></router-view>
          <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
