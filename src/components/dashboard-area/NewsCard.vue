<template>
    <div class="card">
      <div class="title">{{ $t("News") }}</div>
      <div class="content" v-if="news.length">
        <div v-for="item in news" :key="item.date" class="news-item">
          <div class="news-date">{{ formatDate(item.date) }}</div>
          <div class="news-title">{{ item.title }}</div>
          <ul v-if="item.important.length" class="news-important">
            <li v-for="(imp, index) in item.important" :key="index">{{ imp }}</li>
          </ul>
        </div>
      </div>
      <div class="no-news" v-else>{{ $t("Nothing to see here") }}</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "NewsCard",
    data() {
      return {
        news: [] as Array<{ date: string; title: string; important: string[] }>,
      };
    },
    mounted() {
      this.fetchNews(); 
    },
    methods: {
      async fetchNews() {
        try {
          const newsData = [
            {
              date: "2024-10-11",
              title: "New Partnership",
              important: ["We have a new partnership with DayQuest"],
            },
          ];
          this.news = newsData;
        } catch (err) {
          console.error("Failed to load news", err);
        }
      },
      formatDate(date: string) {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    border: solid 1px rgba(255, 255, 255, 0.1);
    position: relative;
    margin: 10px;
    background: var(--card-color);
    padding: 15px;
    width: 300px;
    border-radius: 4px;
    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .news-item {
      margin-bottom: 15px;
      .news-date {
        font-weight: bold;
        margin-bottom: 5px;
      }
      .news-title {
        font-size: 16px;
      }
      .news-important {
        margin-top: 5px;
        list-style-type: disc;
        padding-left: 20px;
      }
    }
    .no-news {
      font-style: italic;
    }
  }
  </style>
  
