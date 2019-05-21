(function () {
    'use strict';

    var vm = new Vue({
        el: "#app",
        data: 
        {
            color: '#ffffff',
            red: '#ff7f7f',
            pink: '#ff7fbf',
            pink2: '#ff7fff',
            purple: '#bf7fff',
            purple2: '#7f7fff',
            blue: '#7fbfff',
            skyblue: '#7fffff',
            green: '#7fffbf',
            green2: '#7fff7f',
            yellowgreen: '#bfff7f',
            yellow: '#ffff7f',
            orange: '#ffbf7f'
        },
        methods: {
            lightenDarkenColor: function (col,amt) {
                var usePound = false;
                if (col[0] == "#") {
                    col = col.slice(1);
                    usePound = true;
                }
                var num = parseInt(col, 16);
                var r = (num >> 16) + amt;
                if (r > 255) {
                    r = 255;
                } else if (r < 0) {
                    r = 0;
                }
                var b = ((num >> 8) & 0x00FF) + amt;
                if (b > 255) {
                    b = 255;
                } else if (b < 0) {
                    b = 0;
                }
                var g = (num & 0x0000FF) + amt;
                if (g > 255) {
                    g = 255;
                } else if (g < 0) {
                    g = 0;
                }
                return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
            },
            copy: function () {
                // 目的の文字列が入っている p要素を取得します。
                const element = event.target;
                // seletionオブジェクトを取得します。
                const selection = window.getSelection();
                // rangeオブジェクトを生成します。
                const range = document.createRange();
                // rangeオブジェクトに p要素を与えます。
                range.selectNodeContents(element);
                // 一旦、selectionオブジェクトの持つ rangeオブジェクトを削除します。
                selection.removeAllRanges();
                // 改めて先程生成した rangeオブジェクトを selectionオブジェクトに追加します。
                selection.addRange(range);
                console.log('選択された文字列: ', selection.toString());
                // クリップボードにコピーします。
                const succeeded = document.execCommand('copy');
                if (succeeded) {
                    // コピーに成功した場合の処理です。
                    alert('コピーが成功しました: ' + selection.toString());
                } else {
                    // コピーに失敗した場合の処理です。
                    alert('コピーが失敗しました!');
                }
                // selectionオブジェクトの持つrangeオブジェクトを全て削除しておきます。
                selection.removeAllRanges();
            },
            hover: function () {
                return true;
            }
        }
    });
})();