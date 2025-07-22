const lista = document.getElementById('lista')

const takeOut = document.querySelector('.none')

const button = document.querySelector('.btn-primary')


const Api = 'https://lanciweb.github.io/demo/api/pictures/'




  axios.get(Api).then((resp) => {

  let result = resp.data
  console.log(result)

   for(let i = 0 ; i<result.length ; i++){
  const { title , date , url } = result[i]

  const card = `

    

     <div class="col-12 col-md-6 col-lg-4 immagine">
          <div class="card position-relative">
            <img src="./assets1/img/pin.svg" class="position-absolute top-0 start-50 translate-middle">
            <img src="${url}" class="card-img-top">
              <div class="card-body">
                <p class="card-text mono" id="date">Data:${date}</p>
                <p class="card-text" id="title" >${title}</p>
              </div>
          </div>
        </div>  
  
  ` 
    lista.innerHTML += card}
    
 
      const cards = document.querySelectorAll('.immagine')

      console.log(cards)

      cards.forEach((carta) => {
        carta.addEventListener('click', () => {
          takeOut.classList.remove('none')
        })
        
      })

      button.addEventListener('click' , () => {
        takeOut.classList.add('none')
      })

  })




