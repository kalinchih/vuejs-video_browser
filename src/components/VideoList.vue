<template>
  <ul class="col-md-4">
    <VideoListItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @videoSelected="onVideoSelected"
    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";
export default {
  name: "VideoList",
  components: {
    VideoListItem: VideoListItem
  },
  // props means: data passed from parent component
  // props: ["videos"]
  props: {
    videos: Array
  },
  methods: {
    onVideoSelected(video) {
      this.$emit("videoSelected", video);
    }
  }
};
</script>

<style>
</style>


