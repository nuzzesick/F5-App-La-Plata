var complejobutton = $(".complejo-fav");
//complejo
    if (localStorage.getItem('complejo')=='true') {
      complejobutton.removeClass("favorite");
      complejobutton.addClass("unfavorite");
      document.getElementById('complejo').classList.add('favorites');
      complejobutton.attr("onclick", "quitcomplejo()");
    }
    else {
      complejobutton.removeClass("unfavorite");
      complejobutton.addClass("favorite");
      complejobutton.attr("onclick", "favcomplejo()");
    }
//functions
    function favcomplejo() {
      document.getElementById('complejo').classList.add('favorites');
      localStorage.setItem('complejo', 'true');
      complejobutton.removeClass("favorite");
      complejobutton.addClass("unfavorite");
      complejobutton.attr("onclick", "quitcomplejo()");
    }
    function quitcomplejo() {
      document.getElementById('complejo').classList.remove('favorites');
      localStorage.removeItem('complejo');
      complejobutton.removeClass("unfavorite");
      complejobutton.addClass("favorite");
      complejobutton.attr("onclick", "favcomplejo()");
    }
