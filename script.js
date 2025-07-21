const lista = document.getElementById('lista')
const date = document.getElementById('date')
const title = document.getElementById('title')
const immagine = document.getElementById('immagine') 



const Api = 'https://lanciweb.github.io/demo/api/pictures/'




  axios.get(Api).then((resp) => {

  let result = resp.data
  console.log(result)

   for(let i = 0 ; i<result.length ; i++){
  const { title , date , url } = result[i]

  const card = `

     <div class="col-12 col-md-6 col-lg-4">
          <div class="card position-relative">
            <img src="./assets1/img/pin.svg" class="position-absolute top-0 start-50 translate-middle">
            <img src="${url}" class="card-img-top" id="immagine">
              <div class="card-body">
                <p class="card-text mono" id="date">${date}</p>
                <p class="card-text" id="title" >${title}</p>
              </div>
          </div>
        </div>  
  
  ` 
    lista.innerHTML += card}
 
})


