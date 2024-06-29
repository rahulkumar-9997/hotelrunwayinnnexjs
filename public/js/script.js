
$(document).on('click', '.link', function(){
  home_page_header_carousel();
  animate_box();
  restaurant_menu();
});
// $(document).on('click', '.res', function(){
//     restaurant_menu();
  
// });

// $(document).on('click', '.navbar-toggler', function(){ 
   
//     $(".navbar-toggler").addClass("collapsed");  
//     $(".navbar-collapse#navbar").removeClass("show");  
    
    
    
// });


$(document).ready(function() {
  $('.nav-item.dropdown .dropdown-toggle').click(function() {
    $(this).next('.dropdown-menu').toggleClass('show');
    // $('.dropdown-item').removeClass("show");
  });
});

