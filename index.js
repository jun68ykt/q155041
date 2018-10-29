$(function(){
  /*
  【入力エリア】を【送信エリア】にコピー
  （実際には多くの値があるので、このような書き方ではない方法を知りたいです）
  */

  $(".name").on('keyup',function(){
    var input_name1 = $('#name1').val();
    var input_name2 = $('#name2').val();
    var input_name3 = $('#name3').val();
    var output_names = input_name1+','+input_name2+','+input_name3;
    $('#result_name').val(output_names);
  });

  $(".valu").on('keyup',function(){
    var input_valu1 = $('#valu1').val();
    var input_valu2 = $('#valu2').val();
    var input_valu3 = $('#valu3').val();
    var output_valus = input_valu1+','+input_valu2+','+input_valu3;
    $('#result_valu').val(output_valus);
  });


  /*
  ボタンクリックで【入力エリア】の追加と削除
  （実際には多くの値があるので、このような書き方ではない方法を知りたいです）
  */

  $('#add').click(function(){
    // 一行目をクローン
    const newData = $('.data:first-of-type').clone();

    // input の値を初期化
    $('input', newData).val('');

    // data-table に追加
    $('.data-table').append(newData);
  });

  $('#remove').click(function(){
    // データ行が2行以上あれば最後の行を削除
    if ($('.data').length > 1)
      $('.data:last-child').remove();
  });
});
