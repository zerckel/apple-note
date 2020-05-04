<template>
    <div id="currentNote">
        <header>
            Date: {{currentNote.date}} | Words: {{currentNote.nbrWords}}
        </header>
        <label>
            <textarea v-on:keyup="" v-model="currentNote.content">

            </textarea>
        </label>
    </div>
</template>

<script>
  export default {
    name: 'currentNote',
    data() {
      return {
        currentNote: {
          content: '',
          nbrWords: 0,
          id: ''
        }
      }
    },
    methods:{
      getDate: function () {
            let date  = new Date()
        return (date.getMonth() + 1) + '-' + date.getDate() + ' : ' + date.getHours() + ' H'
      }
    },
    mounted: function(){
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'putCurrentNote') {
          this.currentNote.content = mutation.payload.content
          this.currentNote.id = mutation.payload.id
        }
      })
    },
    created: function () {
        this.currentNote.date = this.getDate()
    }
  }
</script>

<style>
    #currentNote {
        width: 75vw;
        padding: 1vh 0;

    }

    header {
        display: block;
        margin: 0 auto;
        width: 20vw;
    }

    textarea{
        width: 100%;
        height: 100%;
        border: none;
    }
    textarea:focus{
        outline: none;
        font-size: 25px;
    }
</style>