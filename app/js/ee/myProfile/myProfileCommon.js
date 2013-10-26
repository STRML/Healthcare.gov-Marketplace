function filterSecurityQuestions(c, g, h) {
  var e = c.get("securityQuestions"),
    a = $(".securityQuestions", "#" + g),
    f = [a.eq(0).val(), a.eq(1).val(), a.eq(2).val()];
  $(".securityQuestions option", "#" + g).remove();
  for (var b = 0; b < 3; b++) {
    a.eq(b).append("<option selected>" + h + "</option>");
    for (var d = 0; d < e.length; d++) {
      switch (b) {
        case 0:
          appendSecurityQuestion({
            appendTo: a.eq(b),
            question: e[d].question,
            compareOne: f[1],
            compareTwo: f[2],
            index: b
          });
          break;
        case 1:
          appendSecurityQuestion({
            appendTo: a.eq(b),
            question: e[d].question,
            compareOne: f[0],
            compareTwo: f[2],
            index: b
          });
          break;
        case 2:
          appendSecurityQuestion({
            appendTo: a.eq(b),
            question: e[d].question,
            compareOne: f[0],
            compareTwo: f[1],
            index: b
          });
          break
      }
    }
    a.eq(b).val(f[b])
  }
}

function appendSecurityQuestion(a) {
  var b = $("<div>" + a.question + "</div>").text();
  if (b !== a.compareOne && b !== a.compareTwo) {
    a.appendTo.append('<option value="' + a.question + '">' + a.question + "</option>")
  }
}

function focusableMainContent() {
  $("#contentContainer :focusable").focus(function() {
    var a = $(this).offset().top;
    var b = $(window).scrollTop();
    if (a - b <= 124) {
      $(window).scrollTop(b - 124)
    }
  })
}

function modelDeletePropertyErrorsEmailID(a) {
  if (a.attributes.hasOwnProperty("errors")) {
    delete a.attributes.errors
  }
  if (a.attributes.hasOwnProperty("emailId")) {
    delete a.attributes.emailId
  }
  if (a.attributes.hasOwnProperty("samlToken")) {
    delete a.attributes.samlToken
  }
};