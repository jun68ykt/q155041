$(function(){
  /*
  【入力エリア】を【送信エリア】にコピー
  */
  const updateResult = function(clazz) {
    const values = $(`.${clazz}`).toArray().map(e => e.value);
    $(`#result-${clazz}`).val(values.join(','));
  };

  const inputData = function() {
    updateResult($(this).attr('class'));
  };

  $('.data input').on('keyup change', inputData);

  /*
  ボタンクリックで【入力エリア】の追加と削除
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
    // データ行が2行以上あれば最後の行を削除し、送信エリアを更新
    if ($('.data').length > 1) {
      $('.data:last-child').remove();
      ['name', 'valu'].forEach(clazz => updateResult(clazz));
    }
  });
});
