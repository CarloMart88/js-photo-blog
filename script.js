const lista = document.getElementById('lista')

const takeOut = document.querySelector('.none')

const button = document.querySelector('.button')

// dichiaro le variabili 


const Api = 'https://lanciweb.github.io/demo/api/pictures/'

// metto dentro tutto nella chiamata AJAX 

  axios.get(Api).then((resp) => {
    
  // chiamo con una costante il dato della chiamata   
  let result = resp.data
  
  // vedo il valore 
  console.log(result)
 

 //ciclo l'array di oggetti per inserire in 6 carte i valori della chiamata ottenuti
   for(let i = 0 ; i<result.length ; i++){
  const { title , date , url , id } = result[i]

  // creo la carta 
  const card = `

    

     <div class="col-12 col-md-6 col-lg-4 immagine">
          <div class="card position-relative effect">
            <img src="./assets1/img/pin.svg" class="position-absolute top-0 start-50 translate-middle">
            <img src="${url}" class="card-img-top">
              <div class="card-body">
                <p class="card-text mono" id="date">Data:${date}</p>
                <p class="card-text" id="title" >${title}</p>
              </div>
          </div>
        </div>  
  
  ` 

    lista.innerHTML += card
    //inietto la carta nell'html
  }

    
  // ora che ho generato la chiamata prendo la carta e creo l'id swap 
 
      const fotoCompleta = document.querySelectorAll('.immagine')
      const swap = document.getElementById('swap')

      console.log(fotoCompleta)
      console.log(swap)

      // fotoCompleta mi restituisce un array con tutte le immagini
      // ovviamente se ho un array per interagirvi devo ciclarlo
      // ad ogni elemento che ho reso cliccabile con il cursor point 
      //aggiungo l'event 
      fotoCompleta.forEach((foto ) => {
        foto.addEventListener('click', () => {
          console.log(foto)
          const twins = foto.querySelector('.card-img-top')
          //assegno a swap.src il valore di twins.src
          swap.src = twins.src
          takeOut.classList.remove('none');

          

        })
        
      })

      

  })


      button.addEventListener('click' , () => {
        takeOut.classList.add('none')

      })
