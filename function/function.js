// This function display information like accordions, its cool
const acordionItemHeaders = document.querySelectorAll(".acordion-item-header");

acordionItemHeaders.forEach(acordionItemHeader => {
  acordionItemHeader.addEventListener("click", event => {
    acordionItemHeader.classList.toggle("active");
    const acordionItemBody = acordionItemHeader.nextElementSibling;
    if(acordionItemHeader.classList.contains("active")) {
      acordionItemBody.style.maxHeight = acordionItemBody.scrollHeight + "px";
    }
    else {
      acordionItemBody.style.maxHeight = 0;
    }
  });
});

$(acordionItemHeaders).hover(
  function(){$(this).addClass('fa-fade');},
  function(){$(this).removeClass('fa-fade');}
);

// This function match te height of the page with the height of the screen
$(document).ready(function(){

  var height = $(window).height() - $('#name-about').height();

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