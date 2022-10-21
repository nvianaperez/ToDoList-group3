


<template>

<body>
    <header>

    </header>
    <section class="breadcrumbs-section">
        <div class="container p-1 p-sm-3" id="header-section">
            <div class="row">
                <div class="col-12">
                <h2> About us</h2>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link tag="li" to="/" class="col-3">Home</router-link></li>
                <li class="breadcrumb-item active"> About us</li>
            </ol>
                </div>
            </div>
        </div>
    </section>

    <section class="about-exercice-section">
        <div class="container p-1 p-sm-3">
        <div class="row">
            <div class=" col-12 text-center">
             <h4> WEB FRONT END DEVELOPMENT - GROUP 3</h4>
             <h5> Ejercicio vue- entrega final</h5>
             <hr/>
            </div>
            <div class=" col-md-3">
                <img class="img-fluid" id="imagengrupo" src="https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_1280.png" alt="">
            </div>

            <div class="col-9">

                <p> Nuestro TODO LIST tiene las siguientes funcionalidades:</p>
                <ul>
                    <li> Añadir tarea</li>
                    <li> Eliminar tarea </li>
                    <li> Editar tarea </li>
                    <li> Buscar una tarea</li>
                </ul>
            </div>
        </div>

        </div>

    </section>

    <section class="about-us-section">
        <div class="container">
        <div class="row mt-4">
        <div class="col text-center">
            <h4> Estudiantes</h4>
        </div>
    </div>
    <hr>
        <div class="row">
         <div class= "col-md-3 text-center">
            <h5>Nuria </h5>
            <img src="https://assets.website-files.com/5d7e8885cad5174a2fcb98d7/6123b9547457d6d4a854b22f_facebook%20avatar.jpeg">
         </div>
         <div class= "col-md-3 text-center">
            <h5>Agustín </h5>
            <img src="https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-personaje-de-avatar-de-param%C3%A9dico-masculino.jpg?ver=6">
            </div>
         <div class="col-md-3 text-center"> 
            <h5>León </h5>
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294775_1280.png">
         </div>
         <div class="col-md-3 text-center">
            <h5>Ari</h5>
            <img src="https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg">
        </div>

        </div>
    </div>
    </section>
</body>


 
</template>

<style>
.breadcrumbs-section{
    background-color: #5d68b1;
}
#header-section{
    background-color: rgb(240, 240, 241);
}

.about-exercice-section{

    background-color:rgb(152, 226, 170);

}

.about-us-section{
    background-color: rgb(213, 174, 253);
}
img{
    height: 50%;
    width: 40%;
}
#imagengrupo{
    height:95%;
    width:95%;
}

</style>