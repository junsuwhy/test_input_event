(function($){
  $(function(){
    $('.input-wrapper>div').each(function(){
      var type = $(this).data('type');
      $(this).find('input').on(type,function(){
        // alert(type);
        var d = new Date();
        var time = d.getTime();
        var text = type + " - " + time;

        $('.display').text(text);

       });
    });
  });
})(jQuery);
