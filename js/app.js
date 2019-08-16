
const app = new Vue ({
  el: '#app',
  data: {
    name: 'F5Now?',
    version: '0.9.0',
    background: '',
    status: '',
    description1: '',
    description2: 'We are an open source project.',
    description3: 'We are from Argentina but expanding us.',
    credits1: 'Made with ',
    credits2: 'by a geek team from Buenos Aires.',
    social: [
      {name: 'Twitter' , link: '' , icon: 'fab fa-twitter-square'},
      {name: 'Instagram' , link: '' , icon: 'fab fa-instagram'},
      {name: 'Github' , link:'' , icon: 'fab fa-github-square'}
    ],
    complejos: [
      {
        name: 'Camp Nou',
        rate: '4.2 (Google)',
        location: '13 e 68 y 69',
        canchas: '4 canchas',
        jugadores: '5 jugadores',
        servicios: 'Vestuario',
        background: 'https://lh3.googleusercontent.com/b5QGuQpOScBt33T2C8C2rFTefJwFLfG7cPsaMq_ihD8XzGLgjUVbLsT41KnOGfulgPpcn09u=w600-h0',
        whatsapp: 'https://api.whatsapp.com/send?phone=5492213606778'
      },
      {
        name: 'Abran cancha',
        rate: '4.8 (Google)',
        location: '7 e 72 y 73',
        canchas: '2 canchas',
        jugadores: '5 jugadores',
        servicios: 'Vestuario Bar/Restaurante Parrilla',
        background: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/54268275_1012105125655220_2025072574643306496_n.jpg?_nc_cat=101&_nc_oc=AQlXBBjeFa5o3bIVfRMnMORtojxtCuycua236zkWEkCXNq-jAebEzFpYOXduKAXw7pQ&_nc_ht=scontent.faep9-2.fna&oh=4111e159c42ef2906f1ec177ab39595f&oe=5DDE2615'
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
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
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
