$(function(){
  /*
  【入力エリア】を【送信エリア】にコピー
  */
  const updateResult = function(clazz) {
    // 指定されたクラスの input.value をカンマ区切りにした文字列を作成
    let csv = $(`.${clazz}`).toArray().map(e => e.value).join(',');

    // 先頭または末尾にカンマが1個以上あるとき、これ(ら)を削除
    csv = csv.replace(/^,+|,+$/g, '');

    // 上記で作成されたカンマ区切りの文字列をvalueに設定
    $(`#result-${clazz}`).val(csv);

    // 連続したカンマがあるかどうかでsubmitボタンのdisabledを設定
    $('#submit').prop('disabled', /,,/.test(csv));
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
