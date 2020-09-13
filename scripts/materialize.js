// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
// });

// mobile hamburger menu
const mobileMenu = document.querySelectorAll('.sidenav')
M.Sidenav.init(mobileMenu,{})


// slider Sections
const element = document.querySelectorAll('.slider');
M.Slider.init(element,{
  indicators: false,
  height: 530,
  transition: 550,
  interval: 6000
})

// image material boxed
const image = document.querySelectorAll('.materialboxed');
M.Materialbox.init(image, {});


//scrollspy
const elems = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(elems, {activeClass: 'active', getActiveElement:  function(id) {
    return 'li a[href="#' + id + '"]';
  }});
