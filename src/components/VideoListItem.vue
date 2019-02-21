<template>
  <li class="list-group-item media" @click="onVideoSelected">
    <img :src="thumbnailUrl" class="mr-3">
    <div class="media-body">{{video.snippet.title}}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  //    props: ["video"]
  props: {
    video: Object
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelected() {
      this.$emit("videoSelected", this.video);
    }
  }
};
</script>

<style>
li {
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
</style>


