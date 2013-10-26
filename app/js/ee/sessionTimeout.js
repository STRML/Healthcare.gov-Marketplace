var SESSION_LENGTH = 30;
var WARNING_LENGTH = 5;
var urlApp = window.location.pathname.split("/");
var urlState = urlApp[3];
var urlLocal = urlApp[4];
var session_timer, warning_timer;

function pingAuthentication() {
  var c = window.location.pathname.split("/");
  var d = c[1];
  var a = "/" + d + "/CreateSaml2?actionId=extendSessionTimeout";
  var b = "/ee-rest/CreateSaml2?actionId=extendSessionTimeout";
  $.post(a, function(f, g, e) {
    $.post(b, function(j, h, i) {
      setSessionTimer();
      setWarningTimer()
    })
  })
}

function setSessionTimer() {
  clearTimeout(session_timer);
  session_timer = setTimeout(doLogout, SESSION_LENGTH * 60 * 1000)
}

function setWarningTimer() {
  clearTimeout(warning_timer);
  warning_timer = setTimeout(doWarning, (SESSION_LENGTH - WARNING_LENGTH) * 60 * 1000)
}

function doLogout() {
  logoutFFE(urlState, urlLocal)
}

function doWarning() {
  var text = $('<DIV>').html('Your session is about to expired' + '\nSelect &#34;ok&#34; to extend your session for 30 minutes. Otherwise, select &#34;Cancel&#34; to end your session in 5 minutes');
  text = text.text();
  var result = window.confirm(text);

  if (result === true) {
    pingAuthentication();
  }
}

setSessionTimer();
setWarningTimer();