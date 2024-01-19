var load = document.getElementById("loader");
  setTimeout(function(){
    $("#loader").css("display", "none")
  },2000);
  $(document).ready(function () {
    $(function () {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
          $('.navbar').addClass('active');
        } else {
          $('.navbar').removeClass('active');
        }
      });
    });
  });

  function replaceOrder() {
    // Display an alert
    alert('Your order has been replaced.');

    // Go back to the previous page
    window.history.back();
  }