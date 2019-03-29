window.onload = function() {
  document.addEventListener('deviceready', initApp);
};

function initApp() {
  // $("[data-role=panel]").panel("close");
  //$("body>[data-role='panel']").panel();
  //--- load side panel into index.html ---
  $.ajax('panel.html')
    .done(function(sidepanel) {
      $('#mypanel').html(sidepanel);
      $('[data-role=panel]').panel();
      $('[data-role=listview]').listview();
    })
    .fail(function() {
      console.log('ajax panel error');
    });

  $.ajax('home.html')
    .done(function(home) {
      $('#homecontent').html(home);
    })
    .fail(function() {
      console.log('ajax home content error');
    });
}

function loadAboutContent() {
  console.log('loadAboutContent trig');
  $('.ui-content').load('about.html');
  $('#navbar-about').addClass('ui-btn-active');
  $('#navbar-home, #navbar-test').removeClass('ui-btn-active');
  window.scrollTo(0, 0);
}

function loadHomeContent() {
  console.log('loadHomecontent trig');
  $('.ui-content').load('home.html');
  $('#navbar-home').addClass('ui-btn-active');
  $('#navbar-about, #navbar-test').removeClass('ui-btn-active');
  window.scrollTo(0, 0);
}

function loadTestContent() {
  console.log('loadTestcontent trig');
  $('.ui-content').load('test.html');
  $('#navbar-test').addClass('ui-btn-active');
  $('#navbar-home, #navbar-about').removeClass('ui-btn-active');
  window.scrollTo(0, 0);
}
