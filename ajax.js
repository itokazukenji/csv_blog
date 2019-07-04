$.ajax({
    type: 'POST',
    url: 'articles.csv',
    datatype: 'text',
    success: function(data) {

        data = data.trim(); // csvファイルの最終行に空の行があれば削除
        data = data.split('\n'); // csvファイルを行（改行コード）で分割し配列に入れる

        if (data == '') { // csvファイルが空だった時の処理
            $('#blog_box').append('<div class="article"><p style="text-align:center;">まだ投稿がありません</p></div>');
        } else { // 中身があるとき
            for (var i=data.length-1; i>=0; i--){ // 一番下の行を上に表示したいのでデクリメントでforループを書く
                data[i] = data[i].split(','); // 各行をさらに , で分割して配列に
                $('#blog_box').append('<div class="article"><h2>' + data[i][1] + '</h2><p>' + data[i][2] + '</p><p class="date">' + data[i][0] + '</p></div>');
            }
        }

    }
});
