const acordionItemHeaders = document.querySelectorAll(".acordion-item-header");

acordionItemHeaders.forEach(acordionItemHeader => {
  acordionItemHeader.addEventListener("click", event => {
    acordionItemHeader.classList.toggle("active");
    const acordionItemBody = acordionItemHeader.nextElementSibling;
    if(acordionItemHeader.classList.contains("active")) {
      acordionItemBody.style.maxHeight = acordionItemBody.scrollHeight + "px";
    }
    else {
      acordionItemBody.style.maxHeight = 0
    }
  });
});

$(document).ready(function(){

  var height = $(window).height() - $('#name_about').height();

  $('#content').height(height);
});

/* let hideMail_btn = document.getElementById('hideMail_btn');

let hideMail = document.getElementById('hideMail');

hideMail_btn.addEventListener('click', toggleText);

function toggleText() {
  hideMail.classList.toggle('show');
  if(hideMail.classList.contains('show')) {
    document.getElementById('hideMail_btn').className = 'fa-solid fa-envelope fa-xl fa-beat-fade';
  }
  else{
    document.getElementById('hideMail_btn').className = 'fa-solid fa-envelope fa-xl';
  }
}

*/