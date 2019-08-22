
const app = new Vue ({
  el: '#app',
  data: {
    name: 'F5Now?',
    version: '0.9.0',
    social: [
      {name: 'Twitter' , link: '' , icon: 'fab fa-twitter-square'},
      {name: 'Instagram' , link: '' , icon: 'fab fa-instagram'},
      {name: 'Github' , link:'' , icon: 'fab fa-github-square'}
    ],
    complejos: [
      {
        name: 'Predio 98',
        id: 'predioNoventaOcho',
        search: 'predio noventa y ocho',
        rate: '4.4',
        location: 'Calle 16 y 98',
        canchas: '15',
        futbol: 'F5 F7 F11',
        cesped: 'Sintético y Natural',
        infraestructura: 'Abierto',
        background: 'http://www.predio98.com.ar/imagenes/logo2.png',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.946902932161!2d-57.915474784214254!3d-34.95793948036933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7ba354a1ac9%3A0x3623e334f2ea3c64!2sPredio+98!5e0!3m2!1ses-419!2sar!4v1566459636235!5m2!1ses-419!2sar',
        reserva: 'https://api.whatsapp.com/send?phone=5492216258871'
      },
      {
        name: 'Línea de tres',
        id: 'lineaDeTres',
        search: 'linea de tres linea de 3',
        rate: '4.0',
        location: 'Calle 11 n° e/ 70 y 71',
        canchas: '2',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Abierto',
        background: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/30227103_453936681703789_3308582642527043271_n.jpg?_nc_cat=107&_nc_oc=AQmtBrYhQBQ_mT75KALW7Uh2PhV2MVAP3oggUvW7p7YZXUmkdgSATmZxzHUIKCMR0ZKckovl6e3lBp7iK_g5luLu&_nc_ht=scontent.faep5-1.fna&oh=cb494541be7adbf7ef980c26a20b99cc&oe=5DDFCA9D',
        reserva: 'https://api.whatsapp.com/send?phone=5492216737686'
      },
      {
        name: 'La Caldera del Diablo',
        id: 'laCalderaDelDiablo',
        search: 'caldera diablo',
        rate: '4.3',
        location: 'Calle 77 n°1130 e/ 17 y 18',
        canchas: '3',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'http://www.laguiax.com.ar/media/W1siZiIsInByb2R1Y3Rpb24vZ3VpYXMvMS9jb21lcmNpb3MvOTgxOS9mb3Rvcy9hcmNoaXZvLTg3MjEuanBlZyJdLFsicCIsInRodW1iIiwiOTAweDQ1MFx1MDAzZSJdXQ/IMG_8117.JPG?sha=bb3f8bc4713d5aa6',
        reserva: '0221 453-0955'
      },
      {
        name: 'El Ayuntamiento',
        id: 'elAyuntamiento',
        search: '',
        rate: '3.9',
        location: 'Av. 1 n°777 e/ 47 y 48',
        canchas: '2',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: '',
        reserva: '0221 425-4994'
      },
      {
        name: 'La Posta',
        id: 'laPosta',
        search: '',
        rate: '4.0',
        location: 'Av. 1 n°1375 e/ 60 y 61',
        canchas: '1',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'https://10619-2.s.cdn12.com/rests/original/102_323154611.jpg',
        reserva: '0221 482-3499'
      },
      {
        name: 'Camp Nou',
        id: 'campNou',
        search: 'camp now castañeda',
        rate: '4.2',
        location: 'Calle 13 n° 863 e 68 y 69',
        canchas: '4',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Abierto',
        background: 'https://lh3.googleusercontent.com/b5QGuQpOScBt33T2C8C2rFTefJwFLfG7cPsaMq_ihD8XzGLgjUVbLsT41KnOGfulgPpcn09u=w600-h0',
        reserva: 'https://api.whatsapp.com/send?phone=5492213606778'
      },
      {
        name: 'Abran cancha',
        id: 'abranCancha',
        search: '',
        rate: '4.8',
        location: 'Calle 7 n° 1972 e 72 y 73',
        canchas: '1 cancha',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/54268275_1012105125655220_2025072574643306496_n.jpg?_nc_cat=101&_nc_oc=AQlXBBjeFa5o3bIVfRMnMORtojxtCuycua236zkWEkCXNq-jAebEzFpYOXduKAXw7pQ&_nc_ht=scontent.faep9-2.fna&oh=4111e159c42ef2906f1ec177ab39595f&oe=5DDE2615',
        reserva: ''
      }
    ]
  }
})

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btn-container");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function menu() {
  document.getElementById("menuOpen").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
