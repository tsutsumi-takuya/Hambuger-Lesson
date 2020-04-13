$(function() {
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    return false;
  });
 });

$(function() {

  $('#back a').on('click',function(){
    // #back内の<a>タグがクリックされたときの処理
    $('body, html').animate({
      scrollTop:0
      // 「scrollTop:0」を指定しているので、「最上部に移動する」
    }, 800);
    // 「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」
      return false;
  });
});