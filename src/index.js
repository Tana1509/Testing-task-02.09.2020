jQuery(document).ready(function($) {
  let label = $(".checkLebel");
  label.hover(function() {
    let remember = $(".message");
    remember.toggleClass("active");
  });

  //   калькулятор
  let w = document.querySelector(".sellW");
  let h = document.querySelector(".sellH");
  const pСarpet = 4; // площадь коврика ширина умноженная на длину
  let out = $(".result");

  function calck(e) {
    e.preventDefault();
    let wv = w.value;
    let hv = h.value;
    let p = wv * hv; // находим площадь комнаты
    let quantity = p / pСarpet;
    let qPack8 = quantity / 8;
    let qPack6 = quantity / 6;

    let result = $(".resultText");
    result.html(
      "You will need " +
        qPack6.toFixed(2) +
        " packs of 6pcs, " +
        qPack8.toFixed(2) +
        " packs of 8pcs"
    );
    out.addClass("active");
  }
  h.onchange = calck;

  out.on("click", function() {
    out.removeClass("active");
  });

  //form validation

  let btn = $(".btn");
  let eror = $(".eror");
  let labelText = $(".labelText");
  let erorP = $("#erorP");
  let labelTextP = $(".labelTextP");

  btn.on(`click`, function(e) {
    e.preventDefault();
    let nameLength = $("#name").val().length;
    console.log(nameLength);
    if (nameLength > 3) {
      eror.addClass("hide");
    } else {
      eror.html("Имя слишком короткое");
      labelText.addClass("hide");
      console.log("Имя слишком короткое");
    }
    let password = $("#pass").val().length.trim;
    if (password >= 6) {
      erorP.addClass("hide");
    } else {
      erorP.html("Пароль должен состоять минимум из 6 символов");
      labelTextP.addClass("hide");
      console.log("Пароль слишком короткий");
    }
  });

  let erorReg = $("#erorRegg");
  let labelReg = $(".labelReg");
  let erorPass = $("#erorReg");
  let labelTextPass = $("#labelTextPass");

  $(".formReg__btn").on(`click`, function(e) {
    e.preventDefault();
    let nameLengthReg = $("#nameReg").val().length;
    if (nameLengthReg > 3) {
      erorReg.addClass("hide");
    } else {
      erorReg.html("Имя слишком короткое");
      labelReg.addClass("hide");
    }
    let password = $("#passReg").val().length;
    if (password > 6) {
      console.log('fffffff')
      erorPass.addClass("hide");
    } else {
      erorPass.html("Пароль должен состоять минимум из 6 символов");
      labelTextPass.addClass("hide");
    }


    function validateEmail(email) {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return re.test(String(email).toLowerCase());
    }
    let email = $("#emailReg").val();
    let erorEmail = $("#erorEmail");
    let emaiText = $(".emaiText");

    if (validateEmail(email)) {
      console.log("Поле валидно");
      erorEmail.addClass("hide");

    } else {
      erorEmail.html("Email " + email + " введен не коректно");
      emaiText.addClass("hide");
    }
    // return false;
  });
});
