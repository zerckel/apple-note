export const getNotesFromApi = (context) => {
  fetch('https://pure-dawn-78549.herokuapp.com/api/notes')
          .then(response => response.json())
          .then(res => {
            context.commit('putNotes', res)
          })
}