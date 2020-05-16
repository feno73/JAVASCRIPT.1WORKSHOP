class Noticias{

    constructor(t, a, d, i){
        this.titulo = t
        this.autor = a
        this.detalle = d
        this.imagen = i
    }

    Mostrar(){
        const ficha = doument.createElement("article")
        ficha.classList.add("row noticia")
        ficha.innerHTML =   `<div class="col-12 col-md-3 col-lg-4 noticia-img py-2">
                                <img src=${this.imagen} class="img-fluid" alt="">
                             </div>

                            <div class="col-12 col-md-9 col-lg-8 noticia-txt py-2">
                                <h3>${this.titulo}</h3>
                                <p>por ${this.autor}</p>
                                <p>${this.detalle}</p>
                            </div>`
    }

}