//Vars
var abranCanchabutton = $(".abranCancha-fav");
var campNoubutton = $(".campNou-fav");
var laPostabutton = $(".laPosta-fav");
var elAyuntamientobutton = $(".elAyuntamiento-fav");
var laCalderaDelDiablobutton = $(".laCalderaDelDiablo-fav");
var lineaDeTresbutton = $(".lineaDeTres-fav");
var predioNoventaOchobutton = $(".predioNoventaOcho-fav");
var garraCharruabutton = $(".garraCharrua-fav");
var estadioSietebutton = $(".estadioSiete-fav");
var crisfabutton = $(".crisfa-fav");
//Get
  window.onload = () => {
    //abranCancha
    if (localStorage.getItem('abranCancha')=='true') {
      abranCanchabutton.removeClass("favorite");
      abranCanchabutton.addClass("unfavorite");
      document.getElementById('abranCancha').classList.add('favorites');
      abranCanchabutton.attr("onclick", "quitabranCancha()");
    }
    else {
      abranCanchabutton.removeClass("unfavorite");
      abranCanchabutton.addClass("favorite");
      abranCanchabutton.attr("onclick", "favabranCancha()");
    }
    //campNou
    if (localStorage.getItem('campNou')=='true') {
      campNoubutton.removeClass("favorite");
      campNoubutton.addClass("unfavorite");
      document.getElementById('campNou').classList.add('favorites');
      campNoubutton.attr("onclick", "quitcampNou()");
    }
    else {
      campNoubutton.removeClass("unfavorite");
      campNoubutton.addClass("favorite");
      campNoubutton.attr("onclick", "favcampNou()");
    }
    //laPosta
    if (localStorage.getItem('laPosta')=='true') {
      laPostabutton.removeClass("favorite");
      laPostabutton.addClass("unfavorite");
      document.getElementById('laPosta').classList.add('favorites');
      laPostabutton.attr("onclick", "quitlaPosta()");
    }
    else {
      laPostabutton.removeClass("unfavorite");
      laPostabutton.addClass("favorite");
      laPostabutton.attr("onclick", "favlaPosta()");
    }
    //elAyuntamiento
    if (localStorage.getItem('elAyuntamiento')=='true') {
      elAyuntamientobutton.removeClass("favorite");
      elAyuntamientobutton.addClass("unfavorite");
      document.getElementById('elAyuntamiento').classList.add('favorites');
      elAyuntamientobutton.attr("onclick", "quitelAyuntamiento()");
    }
    else {
      elAyuntamientobutton.removeClass("unfavorite");
      elAyuntamientobutton.addClass("favorite");
      elAyuntamientobutton.attr("onclick", "favelAyuntamiento()");
    }
    //laCalderaDelDiablo
    if (localStorage.getItem('laCalderaDelDiablo')=='true') {
      laCalderaDelDiablobutton.removeClass("favorite");
      laCalderaDelDiablobutton.addClass("unfavorite");
      document.getElementById('laCalderaDelDiablo').classList.add('favorites');
      laCalderaDelDiablobutton.attr("onclick", "quitlaCalderaDelDiablo()");
    }
    else {
      laCalderaDelDiablobutton.removeClass("unfavorite");
      laCalderaDelDiablobutton.addClass("favorite");
      laCalderaDelDiablobutton.attr("onclick", "favlaCalderaDelDiablo()");
    }
    //lineaDeTres
    if (localStorage.getItem('lineaDeTres')=='true') {
      lineaDeTresbutton.removeClass("favorite");
      lineaDeTresbutton.addClass("unfavorite");
      document.getElementById('lineaDeTres').classList.add('favorites');
      lineaDeTresbutton.attr("onclick", "quitlineaDeTres()");
    }
    else {
      lineaDeTresbutton.removeClass("unfavorite");
      lineaDeTresbutton.addClass("favorite");
      lineaDeTresbutton.attr("onclick", "favlineaDeTres()");
    }
    //predioNoventaOcho
    if (localStorage.getItem('predioNoventaOcho')=='true') {
      predioNoventaOchobutton.removeClass("favorite");
      predioNoventaOchobutton.addClass("unfavorite");
      document.getElementById('predioNoventaOcho').classList.add('favorites');
      predioNoventaOchobutton.attr("onclick", "quitpredioNoventaOcho()");
    }
    else {
      predioNoventaOchobutton.removeClass("unfavorite");
      predioNoventaOchobutton.addClass("favorite");
      predioNoventaOchobutton.attr("onclick", "favpredioNoventaOcho()");
    }
    //garraCharrua
    if (localStorage.getItem('garraCharrua')=='true') {
      garraCharruabutton.removeClass("favorite");
      garraCharruabutton.addClass("unfavorite");
      document.getElementById('garraCharrua').classList.add('favorites');
      garraCharruabutton.attr("onclick", "quitgarraCharrua()");
    }
    else {
      garraCharruabutton.removeClass("unfavorite");
      garraCharruabutton.addClass("favorite");
      garraCharruabutton.attr("onclick", "favgarraCharrua()");
    }
    //estadioSiete
    if (localStorage.getItem('estadioSiete')=='true') {
      estadioSietebutton.removeClass("favorite");
      estadioSietebutton.addClass("unfavorite");
      document.getElementById('estadioSiete').classList.add('favorites');
      estadioSietebutton.attr("onclick", "quitestadioSiete()");
    }
    else {
      estadioSietebutton.removeClass("unfavorite");
      estadioSietebutton.addClass("favorite");
      estadioSietebutton.attr("onclick", "favestadioSiete()");
    }
    //crisfa
    if (localStorage.getItem('crisfa')=='true') {
      crisfabutton.removeClass("favorite");
      crisfabutton.addClass("unfavorite");
      document.getElementById('crisfa').classList.add('favorites');
      crisfabutton.attr("onclick", "quitcrisfa()");
    }
    else {
      crisfabutton.removeClass("unfavorite");
      crisfabutton.addClass("favorite");
      crisfabutton.attr("onclick", "favcrisfa()");
    }
  }
//functions
    function favabranCancha() {
      document.getElementById('abranCancha').classList.add('favorites');
      localStorage.setItem('abranCancha', 'true');
      abranCanchabutton.removeClass("favorite");
      abranCanchabutton.addClass("unfavorite");
      abranCanchabutton.attr("onclick", "quitabranCancha()");
    }
    function quitabranCancha() {
      document.getElementById('abranCancha').classList.remove('favorites');
      localStorage.removeItem('abranCancha');
      abranCanchabutton.removeClass("unfavorite");
      abranCanchabutton.addClass("favorite");
      abranCanchabutton.attr("onclick", "favabranCancha()");
    }
    function favcampNou() {
      document.getElementById('campNou').classList.add('favorites');
      localStorage.setItem('campNou', 'true');
      campNoubutton.removeClass("favorite");
      campNoubutton.addClass("unfavorite");
      campNoubutton.attr("onclick", "quitcampNou()");
    }
    function quitcampNou() {
      document.getElementById('campNou').classList.remove('favorites');
      localStorage.removeItem('campNou');
      campNoubutton.removeClass("unfavorite");
      campNoubutton.addClass("favorite");
      campNoubutton.attr("onclick", "favcampNou()");
    }
    function favlaPosta() {
      document.getElementById('laPosta').classList.add('favorites');
      localStorage.setItem('laPosta', 'true');
      laPostabutton.removeClass("favorite");
      laPostabutton.addClass("unfavorite");
      laPostabutton.attr("onclick", "quitlaPosta()");
    }
    function quitlaPosta() {
      document.getElementById('laPosta').classList.remove('favorites');
      localStorage.removeItem('laPosta');
      laPostabutton.removeClass("unfavorite");
      laPostabutton.addClass("favorite");
      laPostabutton.attr("onclick", "favlaPosta()");
    }
    function favelAyuntamiento() {
      document.getElementById('elAyuntamiento').classList.add('favorites');
      localStorage.setItem('elAyuntamiento', 'true');
      elAyuntamientobutton.removeClass("favorite");
      elAyuntamientobutton.addClass("unfavorite");
      elAyuntamientobutton.attr("onclick", "quitelAyuntamiento()");
    }
    function quitelAyuntamiento() {
      document.getElementById('elAyuntamiento').classList.remove('favorites');
      localStorage.removeItem('elAyuntamiento');
      elAyuntamientobutton.removeClass("unfavorite");
      elAyuntamientobutton.addClass("favorite");
      elAyuntamientobutton.attr("onclick", "favelAyuntamiento()");
    }
    function favlaCalderaDelDiablo() {
      document.getElementById('laCalderaDelDiablo').classList.add('favorites');
      localStorage.setItem('laCalderaDelDiablo', 'true');
      laCalderaDelDiablobutton.removeClass("favorite");
      laCalderaDelDiablobutton.addClass("unfavorite");
      laCalderaDelDiablobutton.attr("onclick", "quitlaCalderaDelDiablo()");
    }
    function quitlaCalderaDelDiablo() {
      document.getElementById('laCalderaDelDiablo').classList.remove('favorites');
      localStorage.removeItem('laCalderaDelDiablo');
      laCalderaDelDiablobutton.removeClass("unfavorite");
      laCalderaDelDiablobutton.addClass("favorite");
      laCalderaDelDiablobutton.attr("onclick", "favlaCalderaDelDiablo()");
    }
    function favlineaDeTres() {
      document.getElementById('lineaDeTres').classList.add('favorites');
      localStorage.setItem('lineaDeTres', 'true');
      lineaDeTresbutton.removeClass("favorite");
      lineaDeTresbutton.addClass("unfavorite");
      lineaDeTresbutton.attr("onclick", "quitlineaDeTres()");
    }
    function quitlineaDeTres() {
      document.getElementById('lineaDeTres').classList.remove('favorites');
      localStorage.removeItem('lineaDeTres');
      lineaDeTresbutton.removeClass("unfavorite");
      lineaDeTresbutton.addClass("favorite");
      lineaDeTresbutton.attr("onclick", "favlineaDeTres()");
    }
    function favpredioNoventaOcho() {
      document.getElementById('predioNoventaOcho').classList.add('favorites');
      localStorage.setItem('predioNoventaOcho', 'true');
      predioNoventaOchobutton.removeClass("favorite");
      predioNoventaOchobutton.addClass("unfavorite");
      predioNoventaOchobutton.attr("onclick", "quitpredioNoventaOcho()");
    }
    function quitpredioNoventaOcho() {
      document.getElementById('predioNoventaOcho').classList.remove('favorites');
      localStorage.removeItem('predioNoventaOcho');
      predioNoventaOchobutton.removeClass("unfavorite");
      predioNoventaOchobutton.addClass("favorite");
      predioNoventaOchobutton.attr("onclick", "favpredioNoventaOcho()");
    }
    function favgarraCharrua() {
      document.getElementById('garraCharrua').classList.add('favorites');
      localStorage.setItem('garraCharrua', 'true');
      garraCharruabutton.removeClass("favorite");
      garraCharruabutton.addClass("unfavorite");
      garraCharruabutton.attr("onclick", "quitgarraCharrua()");
    }
    function quitgarraCharrua() {
      document.getElementById('garraCharrua').classList.remove('favorites');
      localStorage.removeItem('garraCharrua');
      garraCharruabutton.removeClass("unfavorite");
      garraCharruabutton.addClass("favorite");
      garraCharruabutton.attr("onclick", "favgarraCharrua()");
    }
    function favestadioSiete() {
      document.getElementById('estadioSiete').classList.add('favorites');
      localStorage.setItem('estadioSiete', 'true');
      estadioSietebutton.removeClass("favorite");
      estadioSietebutton.addClass("unfavorite");
      estadioSietebutton.attr("onclick", "quitestadioSiete()");
    }
    function quitestadioSiete() {
      document.getElementById('estadioSiete').classList.remove('favorites');
      localStorage.removeItem('estadioSiete');
      estadioSietebutton.removeClass("unfavorite");
      estadioSietebutton.addClass("favorite");
      estadioSietebutton.attr("onclick", "favestadioSiete()");
    }
    function favcrisfa() {
      document.getElementById('crisfa').classList.add('favorites');
      localStorage.setItem('crisfa', 'true');
      crisfabutton.removeClass("favorite");
      crisfabutton.addClass("unfavorite");
      crisfabutton.attr("onclick", "quitcrisfa()");
    }
    function quitcrisfa() {
      document.getElementById('crisfa').classList.remove('favorites');
      localStorage.removeItem('crisfa');
      crisfabutton.removeClass("unfavorite");
      crisfabutton.addClass("favorite");
      crisfabutton.attr("onclick", "favcrisfa()");
    }
