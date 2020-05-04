<template>
    <div id="listNotes">
        <div class="createNote">
            <span class="plus">+</span> Create New Note
        </div>
        <ul>
            <li v-on:click="getCurrentNotesInfo(note.id)" v-for="note in listNotes">
                {{note.content}}
            </li>
        </ul>
    </div>
</template>

<script>

  export default {
    name: 'listNotes',
    data() {
      return {
        listNotes: ''
      }
    },
    methods:{
      getCurrentNotesInfo: function (id) {
            let note = this.listNotes.filter(note => {
              return note.id === id
            } )
        this.$store.commit('putCurrentNote', note[0])
      }
    },
    mounted: function () {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'putNotes') {
          this.listNotes = mutation.payload.notes
        }
      })
    }
  }
</script>

<style>
    #listNotes {
        width: 25vw;
        background-color: beige;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    #listNotes ul {
        list-style: none;
    }

    #listNotes ul li{
        padding: 10px 2px;
        border-top: 1px solid white;
        cursor: pointer;
    }

    .createNote {
        padding: 1vh 0;
        text-align: center;
        cursor: pointer;
    }

    .plus {
        padding: 0 5px;
        border-radius: 100%;
        border: solid 1px black;
    }
</style>