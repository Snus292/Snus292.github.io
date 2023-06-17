$(function() {
  window.addEventListener("scroll", function(event) {
    var layers1 = $(".parallax__layer1");
    var layers2 = $(".parallax__layer2");
    
    var objectOffsetTop = $(".parallax__layer").offset().top;
    var windowHeight = $(window).height();
    var top = this.pageYOffset - objectOffsetTop + windowHeight;

    if (top > 0) {
      layers1.each(function() {
        var speed = $(this).attr('data-speed');
        var xPos = -(top * speed / 100);
        $(this).attr('style', 'transform: translate3d(' + xPos + 'px,0px, 0px)');
      });

      layers2.each(function() {
        var speed = $(this).attr('data-speed');
        var xPos = (top * speed / 100);
        $(this).attr('style', 'transform: translate3d(' + xPos + 'px,0px, 0px)');
      });
    }
  });
});




