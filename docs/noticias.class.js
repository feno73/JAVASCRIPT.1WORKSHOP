class Noticias{

    constructor(t, a, d, i){
        this.titulo = t
        this.autor = a
        this.detalle = d
        this.imagen = i
    }

    Mostrar(){
        cconst ficha = doument.createElement("article")
        ficha.classList.add("row noticia")
        ficha.innerHTML =   <div class="col-12 col-md-3 col-lg-4 noticia-img py-2">
                                <img src="img/sorteo-libertadores.jpg" class="img-fluid" alt="">
                            </div>

                            <div class="col-12 col-md-9 col-lg-8 noticia-txt py-2">
                                <h3>La tecnologia llega a la actual edicion de La Libertadores</h3>
                                <p>por Joaquin Angeli</p>
                                <p> La Conmebol anunció la implementación del sistema VAR (asistencia arbitral por video) desde las semifinales de la actual Libertadores. </p>
                            </div>
    }

}