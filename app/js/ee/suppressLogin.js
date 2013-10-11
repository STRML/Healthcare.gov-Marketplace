//suppress login link, hide message center
// TODO run this after backbone has rendered
(function() {
  var checkInterval = setInterval(function(){
    if (!('#headerEmail').length) return;
    clearInterval(checkInterval);
    $('#headerEmail').css('display','none');
    $('#headerUserItem').css('display','none');
    runAffix(); 
  }, 100);
})();
