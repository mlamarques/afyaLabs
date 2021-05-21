import { api, postform } from '../../../service/api'

async function getRandomJoke() {
  const request = await api.get('random')
  const response = request.data
  console.log(response)
  return response
}

getRandomJoke()

let Home = {
  is_private: false,

  render: async () => {
      const jokes = await getRandomJoke()

      let view = `
          <div>
            <h1>Primeira pagina</h1>
            <img src=${jokes.icon_url} alt=${jokes.value}>
            ${jokes.value}
          </div>
          <br>
          <div class="form-container">
            <form id='form'>
              <input type='text' placeholder='name' id='name'>
              <input type='text' placeholder='email' id='email'>
              <input type='text' placeholder='phone' id='phone'>
              <input type='submit' value='Enviar'>
            </form>
          </div>
      `;

      return view
  },

  after_render: async () => {
    let formContent = document.querySelector('#form');

    formContent.addEventListener('submit', (e) => {
      e.preventDefault()

      let name = document.querySelector('#name').value
      let email = document.querySelector('#email').value
      let phone = document.querySelector('#phone').value

      let postData = {
        name,
        email,
        phone
      }

      postform.post('', postData).then(
        response => {
          alert('tudo certo')
        }
      ).catch( e => alert('deu erro'))

    })
  }
}

export default Home;