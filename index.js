$(function(){
  /*
  【入力エリア】を【送信エリア】にコピー
  （実際には多くの値があるので、このような書き方ではない方法を知りたいです）
  */

  const inputData = function() {
    const clazz = $(this).attr('class');
    const values = $(`.${clazz}`).toArray().map(e => e.value);
    $(`#result-${clazz}`).val(values.join(','));
  };

  $('.data input').on('keyup change', inputData);

  /*
  ボタンクリックで【入力エリア】の追加と削除
  （実際には多くの値があるので、このような書き方ではない方法を知りたいです）
  */

  $('#add').click(function(){
    // 一行目をクローン
    const newData = $('.data:first-of-type').clone();

    // input の値を初期化し、イベントハンドラ設定
    $('input', newData)
      .val('')
      .on('keyup change', inputData);

    // data-table に追加
    $('.data-table').append(newData);
  });

  $('#remove').click(function(){
    // データ行が2行以上あれば最後の行を削除
    if ($('.data').length > 1)
      $('.data:last-child').remove();
  });
});
