<template>
  <div>
    <div class="panel">
      <div class="panel-body">
        <div>
          <h2>About</h2>
          <p>{{msg}}</p>
          <input type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// window.location.href = url
export default {
  props: {
    msg: String
  }
};
</script>

<style>
</style>
