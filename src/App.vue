<template>
    <div id="app">
        <listNotes></listNotes>
        <currentNote></currentNote>
    </div>
</template>

<script>
  import currentNote from './components/currentNote.vue'
  import listNotes from './components/listNotes.vue'

  export default {
    name: 'app',
    components: {
      currentNote,
      listNotes
    },
    created:function () {
      this.$store.dispatch('getNotesFromApi')
    }
  }
</script>
<style>
    body {
        font-family: Carlito, sans-serif;
        margin: 0;
        height: 100vh;
        overflow: hidden;
    }

    #app {
        display: flex;
    }
</style>