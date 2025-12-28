const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

let menu = [
  { id:1, code:"1202", name:"小エビのサラダ", category:"サラダ", price:"350円"},
  { id:2, code:"1205", name:"わかめのサラダ", category:"サラダ", price:"350円"},
  { id:3, code:"1209", name:"チキンのサラダ", category:"サラダ", price:"350円"},

  { id:4, code:"1301", name:"コーンクリームスープ", category:"スープ", price:"150円" },
  { id:5, code:"1305", name:"田舎風ミネストローネ", category:"スープ", price:"300円" },
  { id:6, code:"1307", name:"たまねぎのズッパ", category:"スープ", price:"300円" },

  { id:7, code:"1401", name:"辛味チキン", category:"前菜・おつまみ", price:"300円"},
  { id:8, code:"1402", name:"アロスティチーニ（ラム串）", category:"前菜・おつまみ", price:"400円" },
  { id:9, code:"1403", name:"ほうれん草のソテー", category:"前菜・おつまみ", price:"200円" },
  { id:10, code:"1404", name:"ポップコーンシュリンプ", category:"前菜・おつまみ", price:"300円" },
  { id:11, code:"1405", name:"エスカルゴのオーブン焼き", category:"前菜・おつまみ", price:"400円" },
  { id:12, code:"1406", name:"小エビのカクテル", category:"前菜・おつまみ", price:"280円" },
  { id:13, code:"1407", name:"チョリソー", category:"前菜・おつまみ", price:"400円" },
  { id:14, code:"1408", name:"蒸し鶏の香味ソース", category:"前菜・おつまみ", price:"280円" },
  { id:15, code:"1410", name:"ムール貝のガーリック焼き", category:"前菜・おつまみ", price:"400円" },
  { id:16, code:"1413", name:"キャロットラペ", category:"前菜・おつまみ", price:"200円" },
  { id:17, code:"1416", name:"ポテトのグリル", category:"前菜・おつまみ", price:"300円" },
  { id:18, code:"1417", name:"バッファローモッツァレラのカプレーゼ", category:"前菜・おつまみ", price:"430円" },
  { id:19, code:"1422", name:"ハモン・セラーノ", category:"前菜・おつまみ", price:"320円" },
  { id:20, code:"1423", name:"生ハムとバッファローモッツァレラの盛合わせ", category:"前菜・おつまみ", price:"500円" },
  { id:21, code:"1425", name:"柔らか青豆の温サラダ", category:"サラダ", price:"200円"},
  { id:22, code:"1452", name:"アロスティチーニ（ラム串）Wサイズ", category:"前菜・おつまみ", price:"800円" },

  { id:23, code:"2101", name:"ミラノ風ドリア", category:"ドリア／グラタン", price:"300円" },
  { id:24, code:"2103", name:"半熟卵のミラノ風ドリア", category:"ドリア／グラタン", price:"350円" },
  { id:25, code:"2108", name:"焼チーズミラノ風ドリア", category:"ドリア／グラタン", price:"350円" },
  { id:26, code:"2110", name:"タラコとポップコーンシュリンプのドリア", category:"ドリア／グラタン", price:"400円" },
  { id:27, code:"2115", name:"ポップコーンシュリンプとタラコのクリームグラタン", category:"ドリア／グラタン", price:"430円" },
  
  { id:28, code:"2203", name:"バッファローモッツァレラのマルゲリータピザ",category:"ピザ", price:"400円" },
  { id:29, code:"2204", name:"野菜ときのこのピザ",category:"ピザ", price:"400円" },
  { id:30, code:"2206", name:"たっぷりコーンのピザ",category:"ピザ", price:"400円" },
  { id:31, code:"2208", name:"ソーセージピザ",category:"ピザ", price:"400円" },

  { id:32, code:"2301", name:"タラコソースシシリー風", category:"パスタ", price:"400円" },
  { id:33, code:"2303", name:"ペペロンチーノ", category:"パスタ", price:"300円" },
  { id:34, code:"2304", name:"パルマ風スパゲッティ", category:"パスタ", price:"400円" },
  { id:35, code:"2305", name:"カルボナーラ",category:"パスタ", price:"500円" },
  { id:36, code:"2306", name:"ミートソースボロニア風", category:"パスタ", price:"400円" },
  { id:37, code:"2310", name:"スープ入り塩味ボンゴレ", category:"パスタ", price:"500円" },
  { id:38, code:"2316", name:"半熟卵のミートソースボロニア風", category:"パスタ", price:"450円" },
  { id:39, code:"2317", name:"半熟卵のペペロンチーノ", category:"パスタ", price:"350円" },
  { id:40, code:"2318", name:"半熟卵のカルボナーラ",category:"パスタ", price:"550円" },
  { id:41, code:"2320", name:"小エビのタラコソース", category:"パスタ", price:"540円" },
  { id:42, code:"2321", name:"きのことほうれん草のクリームスパゲッティ", category:"パスタ", price:"600円" },
  { id:43, code:"2325", name:"ペンネアラビアータ(全粒粉)", category:"パスタ", price:"430円" },
  { id:44, code:"2328", name:"イカの墨入りセピアソース", category:"パスタ", price:"500円" },

  { id:45, code:"2402", name:"若鶏のディアボラ風", category:"肉料理", price:"500円" },
  { id:46, code:"2403", name:"イタリアンハンバーグ", category:"肉料理", price:"500円" },
  { id:47, code:"2404", name:"柔らかチキンのチーズ焼き", category:"肉料理", price:"500円" },
  { id:48, code:"2406", name:"ハンバーグステーキ", category:"肉料理", price:"400円" },
  { id:49, code:"2407", name:"ディアボラ風ハンバーグ", category:"肉料理", price:"500円" },
  { id:50, code:"2418", name:"ミックスグリル", category:"肉料理", price:"600円" },
  { id:51, code:"2419", name:"ビーフステーキ", category:"肉料理", price:"1090円" },

  { id:52, code:"3101", name:"ライス", category:"ライス／副菜", price:"150円" },
  { id:53, code:"3102", name:"ラージライス", category:"ライス／副菜", price:"200円" },
  { id:54, code:"3103", name:"スモールライス", category:"ライス／副菜", price:"100円" },
  { id:55, code:"3110", name:"フォッカチオ", category:"ライス／パン", price:"150円" },
  { id:56, code:"3111", name:"ガーリックフォッカチオ", category:"ライス／パン", price: "200円" },
  { id:57, code:"3112", name:"シナモンフォッカチオ", category:"ライス／パン", price:"200円" },
  { id:58, code:"3113", name:"たらこフォッカチオ", category:"ライス／パン", price:"250円" },
  { id:59, code:"3114", name:"チーズフォッカチオ", category:"ライス／パン", price:"250円" },

  { id:60, code:"3201", name:"ティラミス クラシコ", category:"デザート", price:"300円" },
  { id:61, code:"3206", name:"イタリアンプリン", category:"デザート", price:"250円" },
  { id:62, code:"3205", name:"ミルクジェラート", category:"デザート", price:"250円" },
  { id:63, code:"3207", name:"チョコレートケーキ", category:"デザート", price:"300円" },
  { id:64, code:"3212", name:"プリントティラミス クラシコの盛合わせ", category:"デザート", price:"500円" },
  { id:65, code:"3213", name:"トリフアイスクリーム", category:"デザート", price:"350円" },
  { id:66, code:"3214", name:"ジェラート＆シナモンフォッカチオ", category:"デザート", price:"450円" },
  { id:67, code:"3215", name:"コーヒーゼリー＆ミルクジェラート", category:"デザート", price:"350円" },
  { id:67, code:"3216", name:"チョコレートケーキ＆ミルクジェラート", category:"デザート", price:"500円" },

  { id:68, code:"5101", name:"セットドリンクバー", category:"ドリンク", price:"200円" },
  { id:69, code:"5102", name:"キッズドリンクバー", category:"ドリンク", price:"100円" },
  { id:70, code:"5103", name:"単品ドリンクバー", category:"ドリンク", price:"300円" },
  { id:71, code:"3301", name:"中ジョッキ", category:"ドリンク", price:"400円" },
  { id:72, code:"3302", name:"グラスビール", category:"ドリンク", price:"280円" },
  { id:73, code:"3303", name:"アサヒ ドライゼロ", category:"ドリンク", price:"250円" },
  { id:74, code:"3304", name:"キリン氷結 シチリア産レモン", category:"ドリンク", price:"350円" },
  { id:75, code:"3306", name:"グラッパ", category:"ドリンク", price:"300円" },
  { id:76, code:"3401", name:"グラスワイン 赤(120ml)", category:"ドリンク", price:"100円" },
  { id:77, code:"3402", name:"グラスワイン 白(120ml)", category:"ドリンク", price:"100円" },
  { id:78, code:"3403", name:"デカンタ小 赤(250ml)", category:"ドリンク", price:"200円" },
  { id:79, code:"3404", name:"デカンタ小 白(250ml)", category:"ドリンク", price:"200円" },
  { id:80, code:"3405", name:"デカンタ大 赤(500ml)", category:"ドリンク", price:"400円" },
  { id:81, code:"3406", name:"デカンタ大 白(500ml)", category:"ドリンク", price:"400円" },
  { id:82, code:"3407", name:"マグナム赤(1500ml)", category:"ドリンク", price:"1100円" },
  { id:83, code:"3408", name:"マグナム白(1500ml)", category:"ドリンク", price:"1100円" },
  { id:84, code:"3412", name:"ランブルスコロゼ", category:"ドリンク", price:"1100円" },
  { id:85, code:"3413", name:"ドンラファエロ", category:"ドリンク", price:"1100円" },
  { id:86, code:"3414", name:"ランブルスコセッコ", category:"ドリンク", price:"1100円" },
  { id:88, code:"3415", name:"ベルデッキオ", category:"ドリンク", price:"1100円" },
  { id:89, code:"3416", name:"キャンティ", category:"ドリンク", price:"1100円" },
  { id:90, code:"3419", name:"キャンティルフィナリゼルバ", category:"ドリンク", price:"2200円" },

  { id:91, code:"4301", name:"トッピング半熟卵", category:"トッピング", price:"50円" },
  { id:92, code:"4304", name:"トッピング野菜ソース", category:"トッピング", price:"100円" },
  { id:93, code:"4307", name:"トッピング粉チーズ(グランモラビア)", category:"トッピング", price:"100円" },
  { id:94, code:"5305", name:"サイゼリヤドレッシング", category:"テイクアウト", price:"500円" },
  { id:95, code:"5306", name:"エクストラ・バージンオリーブオイル", category:"テイクアウト", price:"1200円" },
]

//一覧
app.get("/saize", (req, res) => {
  res.render("saize", { data: menu });
});

//追加
app.get("/saize/new", (req, res) => {
  res.render("saize_new");
});
app.post("/saize/create", (req, res) => {
  const newItem = {
    id: Number(req.body.id),
    code: req.body.code,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price
  };

  menu.push(newItem);
  res.redirect("/saize");
});

//詳細
app.get("/saize/:number", (req, res) => {
  const number = Number(req.params.number);
  const detail = menu[number];
  if (!detail) {
    return res.status(404).send("データがありません");
  }
  res.render("saize_detail", {
    data: detail,
    index: number
  });
});

//編集
app.get("/saize/edit/:number", (req, res) => {
  const number = Number(req.params.number);
  const detail = menu[number];
  if (!detail) {
    return res.status(404).send("編集対象がありません");
  }
  res.render("saize_edit", {
    data: detail,
    index: number
  });
});

//更新
app.post("/saize/update/:number", (req, res) => {
  const number = Number(req.params.number);
  if (!menu[number]) {
    return res.status(404).send("更新対象がありません");
  }
  menu[number] = {
    id: Number(req.body.id),
    code: req.body.code,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price
  };
  res.redirect("/saize/" + number);
});
app.listen(8080, () => {
  console.log("Server started: http://localhost:8080/saize");
});

//削除
app.post("/saize/delete/:number", (req, res) => {
  const number = Number(req.params.number);
  menu.splice(number, 1);
  res.redirect("/saize");
});

app.listen(8081, () => console.log("Example app listening on port 8080!"));
