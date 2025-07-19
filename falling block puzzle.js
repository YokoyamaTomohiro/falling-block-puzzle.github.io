// ブロック
block = [
[
    // ブロック0
    [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ]
],
[
    // ブロック1
    [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ]
],
[
    // ブロック2
    [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0]
    ]
],
[
    // ブロック3
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ]
],
[
    // ブロック4
    [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]
    ]
],
[
    // ブロック5
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ]
],
[
    // ブロック6
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]
]
];

// ブロックの色
biro = ['#CC00CC', '#FFA500', '#CC0000', '#00CC00', '#CC0000', '#00CCCC', '#CCCC00'];

// 次のブロックを設定する関数
function tsugiwotsukuru() {
    // 次のブロックを作る
    btsugi = Math.floor(Math.random() * 7);

    // 次のブロックを表示するためのキャンパスを取得
    tsugigamen = document.getElementById('tsugi');
    // 絵を描く時の部品
    ct = tsugigamen.getContext('2d');

    //　次のブロックを表示するために表示前に消す
    ct.clearRect(0, 0, 79, 79);

    // 描画する
    kaku(ct, 0, 0, 0, btsugi);
}

// 置くブロックのパターンを取得
function kakunin(bx, by, muki, shurui) {
    p = block[shurui][muki];

    // ブロックを描画する位置が空欄かどうか調べる
    for (n = 0; n < 4; n++) {
        for (m = 0; m < 4; m++) {
            if (p[n][m] == 1) {
                // xが範囲外のところには動かせない
                if ((bx + m < 0) || (bx + m > 11)) {
                    return false;
                }
                // yが範囲外のところには動かせない
                if ((by + n < 0) || (by + n > 21)) {
                    return false;
                }
                // 空欄ではない場合は動かせない
                if (jyoutai[by + n][bx + m] != 100) {
                    return false;
                }
            }
        }
    }
    // それ以外の時は置けると判定する
    return true;
}

function shitaidou() {
    // 下に移動
    // 描く先のCanvasを取得
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    // 現在の座標と向きを保存
    maenoix = ix;
    maenoiy = iy;
    maenoimuki = imuki;

    // 今の場所のものを消す
    kesu(cg, ix, iy, imuki, ishurui);

    // 移動
    iy = iy + 1;

    // 移動できるか確認する
    kekka = kakunin(ix, iy, imuki, ishurui);
    if (kekka) {
        // 移動できる
        // 新しい位置に描く
        kaku(cg, ix, iy, imuki, ishurui);
    } else {
        // 移動できない
        // 移動前の場所・向きに戻す
        ix = maenoix;
        iy = maenoiy;
        imuki = maenoimuki;
        kaku(cg, ix, iy, imuki, ishurui);

        // ブロックの動きが止まった場所
        p = block[ishurui][imuki];
        for (n = 0; n < 4; n++) {
            for (m = 0; m < 4; m++) {
                if (p[n][m] == 1) {
                    jyoutai[iy + n][ix + m] = ishurui;
                }
            }
        }

        // 次のブロックとして設定したものが落ちてくる
        tokutenkeisan()

        ix = 4;
        iy = 0;
        ishurui = btsugi;
        imuki = 0;
        kaku(cg, ix, iy, imuki, ishurui);

        // そこに置けるかを判定

        kekka = kakunin(ix, iy, imuki, ishurui);
        if (!kekka) {
            // 重なっているのでゲームオーバー

            // 音を出す
            document.getElementById('gameover').play();

            // メッセージを出す
            alert('ゲームオーバー');
            // 実行中であることを止める
            jikkou = false;
        }
        // さらに次のブロックを設定
        tsugiwotsukuru();
    }

    // 時間を少しずつ早くする
    jikan = jikan - 1;
    if (jikan < 50) {
        // すごく早くなったら戻す
        jikan = 1000;
    }
}

function ghostDraw() {
    // 描画先Canvasとコンテキストを取得
    let gamegamen = document.getElementById('game');
    let cg = gamegamen.getContext('2d');

    // ゴースト落下位置を計算
    let ghostY = iy;
    while (kakunin(ix, ghostY + 1, imuki, ishurui)) {
        ghostY++;
    }

    cg.fillStyle = 'rgba(0, 255, 255, 0.1)';   // 水色で透明度10%
    cg.strokeStyle = 'rgba(0, 200, 200, 0.2)';  // 輪郭を少し濃く透明度20%
    cg.lineWidth = 2;

    // 現在のブロックの形を取得
    let p = block[ishurui][imuki];

    // ゴーストブロックを描画
    for (let n = 0; n < 4; n++) {
        for (let m = 0; m < 4; m++) {
            if (p[n][m] === 1) {
                cg.fillRect((ix + m) * 20, (ghostY + n) * 20, 20, 20);
                cg.strokeRect((ix + m) * 20, (ghostY + n) * 20, 20, 20);
            }
        }
    }
}


function drawAll() {
    let gamegamen = document.getElementById('game');
    let cg = gamegamen.getContext('2d');

    // 全体をクリア
    cg.clearRect(0, 0, 239, 439);

    // 積み上がったブロックを描画
    for (let y = 0; y < 22; y++) {
        for (let x = 0; x < 12; x++) {
            if (jyoutai[y][x] !== 100 && jyoutai[y][x] !== 99) {
                cg.fillStyle = biro[jyoutai[y][x]];
                cg.strokeStyle = '#333333';
                cg.lineWidth = 3;
                cg.fillRect(x * 20, y * 20, 20, 20);
                cg.strokeRect(x * 20, y * 20, 20, 20);
            }
        }
    }
}

// ghostDraw()
cg.fillStyle = 'rgba(0, 255, 255, 0.4)';
cg.strokeStyle = 'rgba(0, 200, 200, 0.5)';


function haaddodoroppu() {
    // 描画先のCanvasを取得
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    // 現在の座標を保存
    let oldY = iy;

    // 一番下まで落とすループ
    while (kakunin(ix, iy + 1, imuki, ishurui)) {
        iy++;
    }

    // ブロックの移動を画面上に反映
    kesu(cg, ix, oldY, imuki, ishurui);  // 元の場所を消す
    kaku(cg, ix, iy, imuki, ishurui);   // 新しい場所に描く

    // ブロックを状態に確定させる（固定）
    p = block[ishurui][imuki];
    for (n = 0; n < 4; n++) {
        for (m = 0; m < 4; m++) {
            if (p[n][m] == 1) {
                jyoutai[iy + n][ix + m] = ishurui;
            }
        }
    }

    // 得点計算など落ちた後の処理
    tokutenkeisan();

    // 次のブロックの準備
    ix = 4;
    iy = 0;
    ishurui = btsugi;
    imuki = 0;
    kaku(cg, ix, iy, imuki, ishurui);

    // 次のブロックをセット
    tsugiwotsukuru();

    // 置けるか確認（ゲームオーバー判定）
    if (!kakunin(ix, iy, imuki, ishurui)) {
        document.getElementById('gameover').play();
        alert('ゲームオーバー');
        jikkou = false;
    }

    drawAll();        // 状態ブロックを描く
    ghostDraw();      // ゴーストを描く
    kaku(cg, ix, iy, imuki, ishurui); // 現在の操作中ブロックを描く
}




function ugokasu(e) {
    // 描く先のCanvasを取得
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    if (e.keyCode == 32) {
        haaddodoroppu();
        return;  // これ以上の処理をしない
    }

    // 現在の座標と向きを保存(キー操作で移動する時に本当に置ける場所なのか確認)
    maenoix = ix;
    maenoiy = iy;
    maenoimuki = imuki;

    // いまのブロックを消す
    kesu(cg, ix, iy, imuki, ishurui);

    // [→]キーが押されたかどうか
    if (e.keyCode == 39) {
        //　右に移動
        ix = ix + 1;
    }

    // [←]キーが押されたかどうか
    if (e.keyCode == 37) {
        //　左に移動
        ix = ix - 1;
    }

    // [↑]キーが押されたとどうか
    if (e.keyCode == 38) {
        // 回転する
        imuki = imuki + 1;
        if (imuki > 3) {
            imuki = 0;
        }
    }

    // [↓]キーが押されたときは下に移動させる
    if (e.keyCode == 40) {
        shitaidou();
    }

    // 移動・回転出来るかどうか確認
    kekka = kakunin(ix, iy, imuki, ishurui);
    if (!kekka) {
        // 移動・回転出来ない
        // 元に戻す
        ix = maenoix;
        iy = maenoiy;
        imuki = maenoimuki;
    }
    // 新しい場所にブロックを描く
    kaku(cg, ix, iy, imuki, ishurui);

    drawAll();        // 状態ブロックを描く
    ghostDraw();      // ゴーストを描く
    kaku(cg, ix, iy, imuki, ishurui); // 現在の操作中ブロックを描く

}

    

// ブロックを消す関数
// 引数は先頭から描写先の2Dコンテキスト、描く先の左からの位置、描く先の右からの位置
function kesu(c, bx, by, muki, shurui) {
    //　消す処理にする
    c.globalCompositeOperation = 'destination-out';

    // 上で消しゴムモードにしているので描くことで消している
    kaku(c, bx, by, muki, shurui);
    // 元の描く処理に戻す
    c.globalCompositeOperation = 'source-over';
}


// ブロックを描く関数
// 引数は先頭から描写先の2Dコンテキスト、描く先の左からの位置、描く先の右からの位置
function kaku(c, bx, by, muki, shurui) {
    // ブロックの色と線
    c.fillStyle = biro[shurui];
    c.strokeStyle = '#333333';
    c.lineWidth = 3;

    // パターンを決める
    p = block[shurui][muki];

    // パターン通りに描く
    for (n = 0; n < 4; n++) {
        for (m = 0; m < 4; m++) {
            // 描くかどうか
            if (p[n][m] == 1) {
             // ここに描く
                c.fillRect((bx + m) * 20, (by + n) * 20, 20, 20);
                c.strokeRect((bx + m) * 20, (by + n) * 20, 20, 20);
            }
        }
    }

}

function drawAll() {
    let gamegamen = document.getElementById('game');
    let cg = gamegamen.getContext('2d');

    // 全体をクリア
    cg.clearRect(0, 0, 239, 439);

    // 積み上がったブロックを描画
    for (let y = 0; y < 22; y++) {
        for (let x = 0; x < 12; x++) {
            if (jyoutai[y][x] !== 100 && jyoutai[y][x] !== 99) {
                cg.fillStyle = biro[jyoutai[y][x]];
                cg.strokeStyle = '#333333';
                cg.lineWidth = 3;
                cg.fillRect(x * 20, y * 20, 20, 20);
                cg.strokeRect(x * 20, y * 20, 20, 20);
            }
        }
    }

    // ここでゴーストを描く！
    ghostDraw();
}


// 当たり判定用の配列を作る
jyoutai = [];

function tokutenkeisan() {
    kosuu = 0;

    // 全ラインをチェック
    for (y = 0; y < 21; y++) {
        sorottenai = false;
        for (x = 1; x <= 10; x++) {
            if ((jyoutai[y][x] == 100) || (jyoutai[y][x] == 99)) {
                // ブロックがない　(隙間がない　または壁)
                sorottenai = true;
            }
            

        
        }
        if (!sorottenai) {
            // 揃ってる
            kosuu = kosuu + 1;

            // 音を出す
            document.getElementById('kieru').play();

            // 上から詰める
            for (k = y; k > 0; k--) {
                for (x = 1; x <= 10; x++) {
                    jyoutai[k][x] = jyoutai[k - 1][x];
                }
            }
    }
    }

    // ブロックを全部描き直す
    // 1. キャンバスを取得する
    gamegamen = document.getElementById('game');

    cg = gamegamen.getContext('2d');

    // 2.全部消す
    cg.clearRect(0, 0, 239, 439);

    // 3.ブロックがあるところを描く
    for (y = 0; y < 22; y++) {
        for (x = 0; x < 12; x++) {
            if ((jyoutai[y][x] != 100) && jyoutai[y][x] != 99) {
                // ブロックを描く
                cg.fillStyle = biro[jyoutai[y][x]];
                cg.strokeStyle = '#333333';
                cg.lineWidth = 3;
                cg.fillRect(x * 20, y * 20, 20, 20);
                cg.strokeRect(x * 20, y * 20, 20, 20);
            }
        }
    }

    // 特典を計算する
    switch (kosuu) {
        case 1:
            tokuten = tokuten + 10;
            break;
        case 2:
            tokuten = tokuten + 20;
            break;
        case 3:
            tokuten = tokuten + 100;
            break;
        case 4:
            tokuten = tokuten + 1000;
            break;
    }
    // 得点を表示する
    tgamen = document.getElementById('tokuten');
    tgamen.innerHTML = tokuten;
}

function jikandeugokasu() {
    if (jikkou) {
        //　実行中
        // 下に動かす
        shitaidou();
        // 次の時間を設定
        setTimeout(jikandeugokasu, jikan);
    }
}


function gamekaishi() {

    
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    // 画面を消す
    cg.clearRect(0, 0, 239, 439);

    // 得点を0にする
    tokuten = 0;

    // ゲーム中に設定し、タイマーを設定する
    jikkou = true;
    jikan = 1000;
    setTimeout(jikandeugokasu, jikan)

    // 状態をクリア このゲームは壁も含めて横12 縦22
    jyoutai = new Array(22);
    // 空欄が100 壁が99
    for (i = 0; i < 22; i++) {
        jyoutai[i] = new Array(12);
        for (j = 0; j < 12; j++) {
            jyoutai[i][j] = 100;
        }
    }

    // 壁を設定 値が99なら壁と重なっている
    for (i = 0; i < 22; i++) {
        jyoutai[i][0] = 99;
    }

    // 右壁部分を99にする 右の場所は11
    for (i = 0; i < 22; i++) {
        jyoutai[i][11] = 99;
    }

    // 下壁部分を99にする　下のところは21を繰り返し処理をして設定している
    for (i = 0; i < 12; i++) {
        jyoutai[21][i] = 99;
    }

    // 仮のT型のブロックを置く
    // 左上の座標
    // ランダムなブロックを作る
    ix = 4;
    iy = 0;
    imuki = 0;
    ishurui = Math.floor(Math.random() * 7);

    kaku(cg, ix, iy, imuki, ishurui);

    // 次のブロックをセットする
    tsugiwotsukuru();
}

function hajime() {

    console.time('time');

    console.log('自動で実行される関数の処理速度を測定開始');

    alert("ゲーム中に効果音が流れるため音量にご注意ください");
    // 背景のCanvasを取得
    backgamen = document.getElementById('back');
    // 絵を描くために2Dコンテキストを取得して変数に代入
    cd = backgamen.getContext('2d');

    //関数が実際に動いているかのテストコード
    console.log("関数が実行されました。");

    //fillRectが具体的な操作で、fillStyleはそれを行うための準備（塗りつぶしに使うスタイル）

    //strokeStyle は輪郭のスタイルを設定し、strokerect はそのスタイルで矩形の輪郭を描画するs

    //　塗りを設定
    cd.fillStyle = '#CCCCCC';
    // 線の色を設定
    cd.strokeStyle = '#333333';
    // 線の幅を設定
    cd.lineWidth = 3;
    // 四角形を塗る
    cd.fillRect(0, 0, 20, 20);
    //　四角形の枠線を描く
    cd.strokeRect(0, 0, 20, 20);

    // 左壁を描く
    x = 0;
    y = 0;

    for (i = 0; i < 22; i++) {
        cd.fillRect(x, y, 20, 20);
        cd.strokeRect(x, y, 20, 20);
        y = y + 20;
    }

    //　右壁を描く
    x = 220;
    y = 0;

    for (i = 0; i < 22; i++) {
        cd.fillRect(x, y, 20, 20);
        cd.strokeRect(x, y, 20, 20);
        y = y + 20;
    }

    //　下壁を描く
    x = 0;
    y = 420;

    for (i = 0; i < 22; i++) {
        cd.fillRect(x, y, 20, 20);
        cd.strokeRect(x, y, 20, 20);
        x = x + 20;
    }

	console.timeEnd('time');

    console.log('測定終了');
}
