/*¨
Testing the API

fetch('https://randomuser.me/api/?nat=us,mx,es,br,ca')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Loop Through
            author.forEach(function (lists) {
                output1 = `
                <h1>${lists.name.last} ${lists.name.first}</h1>
                <h3>About me</h3>
                <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a pharetra nibh, eu hendrerit metus. Nam at enim vestibulum, rhoncus orci ac, hendrerit velit. Cras et lobortis enim, at malesuada orci. Proin lobortis pretium nisi, sed ultricies odio vulputate non. Integer eu urna vitae eros dapibus viverra. Pellentesque vehicula ipsum. </h5>
                `;
                output2 = `
                <img src="${lists.picture.large}">`;
                output3 = `
                <ul>
                  <li>Age: ${lists.dob.age} y/o</li>
                  <li>Gender: ${lists.gender}</li>
                  <li>Phone Number: ${lists.cell}</li>
                  <li>Email ID: ${lists.email}</li>
                  <li>City: ${lists.location.city}</li>
                  <li>Country: ${lists.location.country} (${lists.location.postcode})</li>
                </ul>
                `
            });

            //Show All Data
            document.getElementById('name_about').innerHTML = output1;
            document.getElementById('profile_container').innerHTML = output2;
            document.getElementById('personal_information').innerHTML = output3;

});
*/

$(document).ready(function(){

  var height = $(window).height() - $('#name_about').height();

  $('#content').height(height);
});

let hideMail_btn = document.getElementById('hideMail_btn');

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

