<template>
  <section class="about-us-section">
    <div class="container">
      <div class="row mt-4">
        <div class="col text-center">
          <h4>Estudiantes</h4>
        </div>
      </div>

      <div class="row card-group col-12 align-self-center">
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div
            class="card bg-cyan col-4 m-2 d-flex flex-row"
            v-for="friend in this.friends"
          >
            <img
              :src="friend.img"
              class="card-img-center img-about-us m-1"
              alt="friend picture "
            />
            <div class="card-body">
              <h5 class="card-title">{{ friend.name }}</h5>
              <p class="card-text">{{ friend.description }}.</p>
              <p class="card-text">
                <small class="text-muted"> {{ friend.nationality }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          name: 'Nuria',
          img: 'https://assets.website-files.com/5d7e8885cad5174a2fcb98d7/6123b9547457d6d4a854b22f_facebook%20avatar.jpeg',
          description: 'Me gustan los animales y las jaulas de grillos',
          nationality: 'Catalana-Manchega',
        },
        {
          name: 'Agustin',
          img: 'https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-personaje-de-avatar-de-param%C3%A9dico-masculino.jpg?ver=6',
          description: 'Quiero aprender a programar',
          nationality: 'Argentino',
        },
        {
          name: 'Leon',
          img: 'https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294775_1280.png',
          description: 'Soy un boludo',
          nationality: 'Argentino',
        },
        {
          name: 'Ariadna',
          img: 'https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg',
          description: 'Me gustan las lentejas',
          nationality: 'Israeli',
        },
      ],
    };
  },
};
</script>

<style>
.breadcrumbs-section {
  background-color: #5d68b1;
}
#header-section {
  background-color: rgb(240, 240, 241);
}

.about-exercice-section {
  background-color: rgb(152, 226, 170);
}

.about-us-section {
  background-color: rgb(213, 174, 253);
}
.img-about-us {
  height: 150px;
  width: 140px;
  border-radius: 100%;
  border: dashed 0.1px gray !important;
}
#imagengrupo {
  height: 95%;
  width: 95%;
}
</style>
