//var name = document.getElementById("name");
//var email = document.getElementById('email');
//var message = document.getElementById('emailText');
//const form = document.getElementById('contact');

//let about = "Hi my name is Thembalethu Ncube, Im an IT student at the North West University and I am currently doing my 3rd year. My main interest is to be part of a programme that stems from its impressive reputation and wide range of experience that I may gain.<br> I have a strong work ethic and passion that would make me a valuable asset to any job offered";


$(document).ready(function() {
    $('.contactForm').submit(function(e) {
        var name = document.getElementById("name")
        var email = document.getElementById('email')
        var message = document.getElementById('emailText')
  
      if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/f/mwkwpdyv',
          data: $('.contactForm').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
      }
    });
  });
