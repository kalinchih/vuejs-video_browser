<template>
  <div class="container">
    <!-- <SearchBar v-on:termChanged="onTermChanged"></SearchBar> -->
    <SearchBar @termChanged="onTermChanged"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <!-- <VideoList v-bind:videos="videos" @videoSelected="onVideoSelected"></VideoList> -->
      <VideoList :videos="videos" @videoSelected="onVideoSelected"></VideoList>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
const API_KEY = "change_it";
export default {
  name: "App",
  components: {
    SearchBar: SearchBar,
    VideoList: VideoList,
    VideoDetail: VideoDetail
  },
  data() {
    return { videos: [], selectedVideo: null };
  },
  methods: {
    onTermChanged(searchTerm) {
      // console.log(searchTerm);
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            maxResults: 3,
            q: searchTerm
          }
        })
        .then(response => {
          this.videos = response.data.items;
        });
    },
    onVideoSelected(video) {
      this.selectedVideo = video;
    }
  }
};
</script>
