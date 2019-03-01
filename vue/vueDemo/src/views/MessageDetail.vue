<template>
  <div>
    <p>ID:{{ $route.params.id }}</p>
    <ul>
      <li>id: {{ messageDetail.id }}</li>
      <li>title: {{ messageDetail.title }}</li>
      <li>content: {{ messageDetail.content }}</li>
    </ul>
  </div>
</template>

<script>
// const allMessageDetails = [
//   {
//     id: 1,
//     title: "message001",
//     content: `you are beautiful`
//   },
//   {
//     id: 2,
//     title: "message002",
//     content: `you are stupiy`
//   },
//   {
//     id: 3,
//     title: "message003",
//     content: `happy new year`
//   },
//   {
//     id: 4,
//     title: "message004",
//     content: `have a dinner`
//   },
//   {
//     id: 5,
//     title: "message005",
//     content: `nothing is impossible`
//   }
// ];
export default {
  data() {
    return {
      messageDetail: {
        id: "",
        title: "",
        content: ""
      }
    };
  },

  mounted() {
    setTimeout(() => {
      const allMessageDetails = [
        {
          id: 1,
          title: "message001",
          content: `you are beautiful`
        },
        {
          id: 2,
          title: "message002",
          content: `you are stupiy`
        },
        {
          id: 3,
          title: "message003",
          content: `happy new year`
        },
        {
          id: 4,
          title: "message004",
          content: `have a dinner`
        },
        {
          id: 5,
          title: "message005",
          content: `nothing is impossible`
        }
      ];
      this.allMessageDetails = allMessageDetails;
      const id = this.$route.params.id * 1; //防止接收到的是一个文本
      this.messageDetail = allMessageDetails.find(detail => detail.id === id);
    }, 1000);
  },

  watch: {
    $route: function(value) {
      //路由路径（param）发生了变化
      const id = value.params.id * 1; //防止接收到的是一个文本
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id);
    }
  }
};
</script>

<style>
</style>
