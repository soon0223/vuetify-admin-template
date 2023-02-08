<template>
  <v-app>
    <v-app-bar app />
    <v-navigation-drawer app />
    <v-main>
      <v-container fluid>
        <!-- 컨텐츠 영역 -->
        컨텐츠 영역
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: false,
    items: [
          { title: 'Dashgboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Grid System', icon: 'mdi-image', to: '/grid-system' },
          { title: 'Break points', icon: 'mdi-image', to: '/Breakpoints' },
          { title: 'Grid List Page', icon: 'mdi-image', to: '/grid-list-page' },
        ],
        right: null,
  }),
};
</script>


<style>

</style>
