const lista = document.getElementById('lista')
const date = document.getElementById('date')
const title = document.getElementById('title')
const immagine = document.getElementById('immagine') 

console.log('awe')

const Api = 'https://lanciweb.github.io/demo/api/pictures/'

axios.get(Api).then((resp) => {
  console.log(resp)
})

const generateCard = () => {

  
}
// for(let i = 0 ; i<6 ; i++){
//   console.log(resp)
//   }