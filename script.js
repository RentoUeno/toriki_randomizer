const menu = [
  // 焼き鳥（貴族焼）
  "もも貴族焼（タレ）",
  "もも貴族焼（塩）",
  "もも貴族焼（スパイス）",
  "むね貴族焼（タレ）",
  "むね貴族焼（塩）",
  "むね貴族焼（スパイス）",
 
  // 焼き鳥（塩）
  "ちからこぶ塩",
  "手羽先塩",
  "三角（ぼんじり）",
  "つくね塩",
  "ささみ塩焼-わさび粗おろし添え-",
  "ハート（ハツ）塩",
  "砂ずり（砂肝）",
  "かわ塩",
  "やげんなんこつ",
  "せせり",
 
  // 焼き鳥（たれ）
  "ちからこぶたれ",
  "手羽先たれ",
  "みたれ（もも肉）",
  "きも（レバー）",
  "つくねチーズ焼",
  "つくねたれ",
  "かわたれ",
  "ハート（ハツ）たれ",
 
  // 串焼き
  "きも焼 -ごま油添え-",
  "ピーマン肉詰 -ポン酢味-",
  "むね明太マヨ焼",
  "もちもちチーズ焼",
  "牛串焼 -果実とにんにくの旨味-",
  "豚バラ串焼",
 
  // 一品料理
  "トリキの唐揚",
  "ふんわり山芋の鉄板焼",
  "鳥たれかつ丼の頭",
  "和風とりポテトサラダ",
  "北海道 海と大地のポテトサラダ",
  "ポテトフライ",
  "チキン南蛮",
  "とり天 -梅肉ソース添え-",
  "カマンベールコロッケ",
  "ひざなんこつ唐揚",
  "鶏皮チップ",
 
  // ご飯もの
  "とり釜飯",
  "とり雑炊",
  "鶏旨丼(タレ)",
  "鶏旨丼(塩)",
  "鶏塩玉子ラーメン",
  "鳥たれかつ丼",
  "とり白湯めん",
  "ご飯セット-温玉添え-",
 
  // スピード
  "トリキのチャンジャ",
  "北海道産 蛸わさび",
  "味付煮玉子",
  "親鶏炙り焼マヨサラダ",
  "超！白ねぎ塩こんぶ",
  "ホルモンねぎ盛ポン酢",
  "国産枝豆",
  "キャベツ盛",
  "塩だれキューリ",
 
  // デザート
  "鳥貴ドームアイス ～いちご～",
  "チョコパフェ-チュロ添え-",
  "カタラーナアイス",
  "魅惑のチョコレートみるく"
];
 
const menu_alcohol = [
  "メガレモンサワー",
  "メガハイボール（ジムビーム）",
  "メガ金麦",
  "ザ・プレミアム・モルツ",
  "シャンディーガフ",
  "ビアコーラ",
  "ビアレモン",
  "角ハイボール",
  "知多ハイボール",
  "コーラハイ",
  "ジンジャーハイ",
  "翠ジンソーダ",
  "翠ジンオレンジ",
  "翠ジンコーラ",
  "翠ジントニック",
  "翠ジンジンジャーエール",
  "優しいレモンサワー",
  "こだわり酒場のレモンサワー",
  "トリキサワー",
  "男梅サワー",
  "カルピスチューハイ",
  "緑茶ハイ",
  "ウーロンハイ",
  "紀州の南高梅酒",
  "優しいカシスミルク割",
  "優しいカシスオレンジ割",
  "優しいレモンとカシス",
  "トリキレッド",
  "トリキホワイト",
  "大隅焼酎ソーダ",
  "大隅（麦）",
  "黒霧島（芋）",
  "☠松竹梅 豪快 純米酒＜カップ酒＞☠",
  "優しいみかんのお酒オレンジ割",
];
 
// 全アイテム共通の音声候補
// HTML側に <audio id="sound1" src="..."> ... <audio id="sound14" src="..."> を用意すること
const ALL_SOUNDS = [
  "sound1",
  "sound2",
  "sound4",
  "sound5",
  "sound6",
  "sound7",
  "sound8",
  "sound9",
  "sound10",
  "sound11",
  "sound12",
  "sound13",
  "sound14",
  "sound15",
  "sound16",
  "sound17",
  "sound18",
  "sound19",
  "sound20",
  "sound21",
  "sound22"
  // 増やしたい場合はここに追加
];
 
// -------------------------------------------------------
// 特殊アイテムの設定テーブル
// soundIds: 再生候補のaudio要素IDの配列。出るたびにランダムで1つ選ばれる。
// 新しい特殊アイテムを追加する場合はここに1行追加するだけでOK
// -------------------------------------------------------
const ITEM_STYLES = [
  {
    match:    "メガ豪快",
    cls:      "mega",
    soundIds: ALL_SOUNDS,
    volume:   1.0,
    loop:     true,
  },
  {
    match:    "プレミアム豪快",
    cls:      "premium",
    soundIds: ALL_SOUNDS,
    volume:   1.0,
  },
  {
    match:    "ミックスジュース",
    cls:      "mixjuice",
    soundIds: "sound3",
    volume:   1.0,
  },
  {
    match:    "松竹梅 豪快 純米酒＜カップ酒＞",
    cls:      "normal",
    soundIds: ALL_SOUNDS,
    volume:   1.0,
  },
  {
    match:    "黒霧島（芋）",
    cls:      "kirishima",
    soundIds: ALL_SOUNDS,
    volume:   1.0,
  },
  {
    match:    "大隅（麦）",
    cls:      "kirishima",
    soundIds: ALL_SOUNDS,
    volume:   1.0,
  },
];
 
// ボタンを押した回数
let pushed = 0;
 
// -------------------------------------------------------
// ユーティリティ関数
// -------------------------------------------------------
 
/**
 * 配列からランダムに1要素を返す
 */
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
 
/**
 * アイテム名に応じてliにクラスを付与し、ランダムに選んだサウンドを再生する
 */
function applyItemStyle(li, item) {
  for (const s of ITEM_STYLES) {
    if (!item.includes(s.match)) continue;
 
    li.classList.add(s.cls);
 
    // soundIds配列からランダムに1つ選んで再生
    const soundId = pickRandom(s.soundIds);
    const sound   = document.getElementById(soundId);
 
    // audio要素が見つからない場合はスキップ（エラーを出さない）
    if (!sound) {
      console.warn(`audio要素が見つかりません: #${soundId}`);
      break;
    }
 
    sound.volume      = s.volume;
    sound.currentTime = 0;
    sound.play();
 
    if (s.loop) {
      sound.addEventListener("ended", () => sound.play(), { once: true });
    }
    break;
  }
}
 
/**
 * アイテム名からli要素を生成して返す
 */
function createResultItem(item) {
  const li = document.createElement("li");
  li.textContent = item;
  applyItemStyle(li, item);
  return li;
}
 
/**
 * アイテム配列をresultリストに描画する
 */
function renderResult(items) {
  const result = document.getElementById("result");
  result.innerHTML = "";
  items.forEach(item => result.appendChild(createResultItem(item)));
}
 
/**
 * プールからcount件ランダムに選んで返す
 * allowDuplicate=true のとき重複あり、false のとき重複なし
 */
function pickItems(pool, count, allowDuplicate) {
  if (allowDuplicate) {
    return Array.from(
      { length: count },
      () => pool[Math.floor(Math.random() * pool.length)]
    );
  }
  return [...pool].sort(() => 0.5 - Math.random()).slice(0, count);
}
 
/**
 * チェックボックスの状態を踏まえてアルコールメニューのプールを構築する
 */
function buildAlcoholPool() {
  const pool = [...menu_alcohol];
  if (getCheckboxValue("mega"))     pool.push("☠☠☠メガ豪快☠☠☠");
  if (getCheckboxValue("premium"))  pool.push("☠☠プレミアム豪快☠☠");
  if (getCheckboxValue("mixjuice")) pool.push("ミックスジュース");
  return pool;
}
 
/** チェックボックスの値を安全に取得する */
function getCheckboxValue(id) {
  return document.getElementById(id)?.checked ?? false;
}
 
// -------------------------------------------------------
// メインロジック
// -------------------------------------------------------
 
function pickMenu() {
  const count     = Number(document.getElementById("count").value);
  const allowDup  = getCheckboxValue("tyouhuku");
  const isAlcohol = getCheckboxValue("alcohol");
 
  pushed++;
  document.getElementById("pushedtimes_display").textContent = pushed;
 
  if (isAlcohol) {
    pickMenu_alcohol();
    return;
  }
 
  if (count > menu.length && !allowDup) {
    alert("メニュー数を超えています！");
    return;
  }
 
  renderResult(pickItems(menu, count, allowDup));
}
 
function pickMenu_alcohol() {
  const count    = Number(document.getElementById("count").value);
  const allowDup = getCheckboxValue("tyouhuku");
 
  if (getCheckboxValue("goukaichange")) {
    goukai_pick();
    return;
  }
 
  const pool = buildAlcoholPool();
 
  if (count > pool.length && !allowDup) {
    alert("メニュー数を超えています！");
    return;
  }
 
  renderResult(pickItems(pool, count, allowDup));
}
 
function goukai_pick() {
  const count   = Number(document.getElementById("count").value);
  const percent = Number(document.getElementById("goukaipercent").value);
 
  const goukaiPool = ["☠松竹梅 豪快 純米酒＜カップ酒＞☠"];
  if (getCheckboxValue("mega"))    goukaiPool.push("☠☠☠メガ豪快☠☠☠");
  if (getCheckboxValue("premium")) goukaiPool.push("☠☠プレミアム豪快☠☠");
 
  const items = Array.from({ length: count }, () => {
    const isGoukai = Math.random() * 100 < percent;
    const pool = isGoukai ? goukaiPool : menu_alcohol;
    return pool[Math.floor(Math.random() * pool.length)];
  });
 
  renderResult(items);
}
 
// -------------------------------------------------------
// UI制御
// -------------------------------------------------------
 
function goukai() {
  const extra = document.getElementById("extra");
 
  if (getCheckboxValue("alcohol")) {
    extra.innerHTML = `
      <br>
      <label><input type="checkbox" id="mega">メガ豪快を含む</label>
      <br><br>
      <label><input type="checkbox" id="premium">プレミアム豪快を含む</label>
      <br><br>
      <label><input type="checkbox" id="mixjuice">ミックスジュースを含む</label>
      <br><br>
      <label>
        <input type="checkbox" id="goukaichange" onchange="goukai_change()">豪快類の出現確率を変更する(重複あり)
      </label>
      <br>
    `;
  } else {
    extra.innerHTML = "";
  }
}
 
function goukai_change() {
  const extra = document.getElementById("extra");
 
  if (getCheckboxValue("goukaichange")) {
    if (!document.getElementById("goukai_percent_input")) {
      const div = document.createElement("div");
      div.id = "goukai_percent_input";
      div.innerHTML = `
        <br>
        <label>
          豪快の出現確率を入力<input type="number" id="goukaipercent" min="0" max="100" value="10">%
        </label>
        <br>
      `;
      extra.appendChild(div);
    }
  } else {
    document.getElementById("goukai_percent_input")?.remove();
  }
}