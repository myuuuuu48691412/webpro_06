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


//削除
app.post("/saize/delete/:number", (req, res) => {
  const number = Number(req.params.number);
  menu.splice(number, 1);
  res.redirect("/saize");
});


let teams = [
{ id:1, name:"レバンガ北海道", division:"B1", region:"北海道札幌市", arena:"北海きたえーる", players:"折茂武彦", championships:0, founded:2011 },
{ id:2, name:"仙台89ERS", division:"B1", region:"宮城県仙台市", arena:"ゼビオアリーナ仙台", players:"渡辺翔太", championships:0, founded:2004 },
{ id:3, name:"秋田ノーザンハピネッツ", division:"B1", region:"秋田県秋田市", arena:"CNAアリーナ☆あきた", players:"古川孝敏", championships:0, founded:2010 },
{ id:4, name:"茨城ロボッツ", division:"B1", region:"茨城県水戸市", arena:"アダストリアみとアリーナ", players:"平尾充庸", championships:0, founded:2016 },
{ id:5, name:"宇都宮ブレックス", division:"B1", region:"栃木県宇都宮市", arena:"日環アリーナ栃木", players:"比江島慎", championships:3, founded:2007 },
{ id:6, name:"群馬クレインサンダーズ", division:"B1", region:"群馬県太田市", arena:"オープンハウスアリーナ太田", players:"藤井祐眞", championships:0, founded:2010 },
{ id:7, name:"千葉ジェッツ", division:"B1", region:"千葉県船橋市", arena:"LaLa arena TOKYO-BAY", players:"富樫勇樹", championships:1, founded:2011 },
{ id:8, name:"アルバルク東京", division:"B1", region:"東京都渋谷区", arena:"国立代々木競技場第一体育館", players:"安藤誓哉", championships:2, founded:2014 },
{ id:9, name:"サンロッカーズ渋谷", division:"B1", region:"東京都渋谷区", arena:"青山学院記念館", players:"金丸晃輔", championships:0, founded:2014 },
{ id:10, name:"川崎ブレイブサンダース", division:"B1", region:"神奈川県川崎市", arena:"川崎市とどろきアリーナ", players:"篠山竜青", championships:0, founded:2013 },
{ id:11, name:"横浜ビー・コルセアーズ", division:"B1", region:"神奈川県横浜市", arena:"横浜国際プール", players:"河村勇輝", championships:0, founded:2011 },
{ id:12, name:"新潟アルビレックスBB", division:"B1", region:"新潟県新潟市", arena:"アオーレ長岡", players:"五十嵐圭", championships:0, founded:2000 },
{ id:13, name:"富山グラウジーズ", division:"B1", region:"富山県富山市", arena:"富山市総合体育館", players:"宇都直輝", championships:0, founded:2006 },
{ id:14, name:"三遠ネオフェニックス", division:"B1", region:"愛知県豊橋市", arena:"豊橋市総合体育館", players:"吉井裕鷹", championships:0, founded:2016 },
{ id:15, name:"シーホース三河", division:"B1", region:"愛知県刈谷市", arena:"ウィングアリーナ刈谷", players:"西田優大", championships:0, founded:1947 },
{ id:16, name:"名古屋ダイヤモンドドルフィンズ", division:"B1", region:"愛知県名古屋市", arena:"ドルフィンズアリーナ", players:"齋藤拓実", championships:0, founded:1950 },
{ id:17, name:"滋賀レイクス", division:"B1", region:"滋賀県大津市", arena:"滋賀ダイハツアリーナ", players:"野本大智", championships:0, founded:2008 },
{ id:18, name:"京都ハンナリーズ", division:"B1", region:"京都府京都市", arena:"かたおかアリーナ京都", players:"岡田侑大", championships:0, founded:2009 },
{ id:19, name:"大阪エヴェッサ", division:"B1", region:"大阪府大阪市", arena:"おおきにアリーナ舞洲", players:"橋本拓哉", championships:0, founded:1996 },
{ id:20, name:"島根スサノオマジック", division:"B1", region:"島根県松江市", arena:"松江市総合体育館", players:"安藤誓哉", championships:0, founded:2010 },
{ id:21, name:"広島ドラゴンフライズ", division:"B1", region:"広島県広島市", arena:"広島サンプラザホール", players:"寺嶋良", championships:1, founded:2013 },
{ id:22, name:"佐賀バルーナーズ", division:"B1", region:"佐賀県佐賀市", arena:"SAGAアリーナ", players:"金丸晃輔", championships:0, founded:2018 },
{ id:23, name:"長崎ヴェルカ", division:"B1", region:"長崎県長崎市", arena:"ハピネスアリーナ", players:"馬場雄大", championships:0, founded:2020 },
{ id:24, name:"琉球ゴールデンキングス", division:"B1", region:"沖縄県沖縄市", arena:"沖縄アリーナ", players:"岸本隆一", championships:1, founded:2007 },

{ id:25, name:"青森ワッツ", division:"B2", region:"青森県青森市", arena:"マエダアリーナ", players:"下山大地", championships:0, founded:2013 },
{ id:26, name:"福島ファイヤーボンズ", division:"B2", region:"福島県福島市", arena:"宝来屋郡山総合体育館", players:"菅野翔太", championships:0, founded:2013 },
{ id:27, name:"山形ワイヴァンズ", division:"B2", region:"山形県山形市", arena:"山形県総合運動公園", players:"秋山裕樹", championships:0, founded:2010 },
{ id:28, name:"信州ブレイブウォリアーズ", division:"B2", region:"長野県長野市", arena:"ホワイトリング", players:"石川海斗", championships:0, founded:2010 },
{ id:29, name:"越谷アルファーズ", division:"B2", region:"埼玉県越谷市", arena:"越谷市立総合体育館", players:"谷口光貴", championships:0, founded:2018 },
{ id:30, name:"神戸ストークス", division:"B2", region:"兵庫県神戸市", arena:"神戸市立中央体育館", players:"道原紀晃", championships:0, founded:2003 },
{ id:31, name:"熊本ヴォルターズ", division:"B2", region:"熊本県熊本市", arena:"熊本県立総合体育館", players:"西川貴之", championships:0, founded:2012 },
{ id:32, name:"愛媛オレンジバイキングス", division:"B2", region:"愛媛県松山市", arena:"愛媛県武道館", players:"古野拓巳", championships:0, founded:2016 },
{ id:33, name:"鹿児島レブナイズ", division:"B2", region:"鹿児島県鹿児島市", arena:"西原商会アリーナ", players:"藤田浩司", championships:0, founded:2014 }
];

// 一覧 
app.get("/bleague", (req, res) => {
  res.render("bleague", { data: teams });
});

//追加
app.get("/bleague/new", (req, res) => {
  res.render("bleague_new");
});
app.post("/bleague/create", (req, res) => {
  const newItem = {
    id: Number(req.body.id),
    name: req.body.name,
    division: req.body.division,
    region: req.body.region,
    arena: req.body.arena,
    players: req.body.players,
    championships: req.body.championships,
    founded: req.body.founded,
  };

  menu.push(newItem);
  res.redirect("/bleague");
});


//詳細
app.get("/bleague/:number", (req, res) => {
  const number = Number(req.params.number);
  const detail = teams[number];
  if (!detail) {
    return res.status(404).send("データがありません");
  }
  res.render("bleague_detail", {
    data: detail,
    index: number
  });
});

//編集
app.get("/bleague/edit/:number", (req, res) => {
  const number = Number(req.params.number);
  const detail = teams[number];
  if (!detail) {
    return res.status(404).send("編集対象がありません");
  }
  res.render("bleague_edit", {
    data: detail,
    index: number
  });
});

//更新
app.post("/bleague/update/:number", (req, res) => {
  const number = Number(req.params.number);
  if (!teams[number]) {
    return res.status(404).send("更新対象がありません");
  }
  teams[number] = {
    id: Number(req.body.id),
    name: req.body.name,
    division: req.body.division,
    region: req.body.region,
    arena: req.body.arena,
    players: req.body.players,
    championships: req.body.championships,
    founded: req.body.founded,
  };
  res.redirect("/bleague/" + number);
});


//削除
app.post("/bleague/delete/:number", (req, res) => {
  const number = Number(req.params.number);
  teams.splice(number, 1);
  res.redirect("/bleague");
});



let albums = [
  {id: 1,title: "嘘だらけの日常の中で",releaseDate: "2021-05-05",type: "インディーズ フルアルバム",label: "FRIENDSHIP.",
    tracks:
      "1. 世界が僕を嫌いになっても\n" +
      "2. 8月の夜\n" +
      "3. ワンナイト\n" +
      "4. 別れ話\n" +
      "5. テレビの中だけ",
    dvd:
      "・『嘘だらけの日常の中で』Music Video\n" +
      "・ミュージックビデオ撮影メイキング\n" +
      "・メンバーインタビュー（制作背景）"},
  {id: 2,title: "演じるくらいなら、ありのままでいいけどね",releaseDate: "2021-12-15",type: "インディーズ ミニアルバム",label: "FRIENDSHIP.",
    tracks:
      "1. ロードスタームービー\n" +
      "2. 憂鬱とバイト\n" +
      "3. 愛鍵\n" +
      "4. また冬が終わって\n" +
      "5. バンドマンの彼氏",
    dvd:
      "・『演じるくらいなら、ありのままでいいけどね』Music Video\n" +
      "・レコーディング風景ドキュメンタリー"},
  {id: 3,title: "歌にしてしまえば、どんなことでも許されると思っていた",releaseDate: "2023-03-15",type: "メジャー1st フルアルバム",label: "Victor Entertainment",
    tracks:
      "1. ひもと愛\n" +
      "2. ゴミ人間，俺\n" +
      "3. 本当はね，\n" +
      "4. 美談\n" +
      "5. コインランドリー\n" +
      "6. 好きじゃないよ\n" +
      "7. 夜のままで\n" +
      "8. 東京\n" +
      "9. らしく\n" +
      "10. ごめんね，歌にして",
    dvd:
      "・『歌にしてしまえば、どんなことでも許されると思っていた』Music Video\n" +
      "・アルバム制作ドキュメンタリー\n" +
      "・メンバー座談会"},
  {id: 4,title: "どんなことにでも幸せを感じることができたなら",releaseDate: "2023-09-27",type: "メジャー1st EP",label: "Victor Entertainment",
    tracks:
      "1. 君の街まで\n" +
      "2. 愛すべき日々よ\n" +
      "3. 君じゃなくても別によかったのかもしれない\n" +
      "4. 愛の乾燥機\n" +
      "5. 8月の夜",
    dvd:
      "・『どんなことにでも幸せを感じることができたなら』Music Video\n" +
      "・ツアー舞台裏映像"},
  {id: 5,title: "BOY & GIRLS",releaseDate: "2024-10-09",type: "メジャー2nd フルアルバム",label: "Victor Entertainment",
    tracks:
      "1. Intro\n" +
      "2. 有線ラジオで僕の歌が流れていたらしい\n" +
      "3. 死ぬまでに俺がやりたいこと\n" +
      "4. 精神ロック\n" +
      "5. プレイボーイシンドローム\n" +
      "6. ハナイチモンメ\n" +
      "7. ベランダ feat. 戦慄かなの\n" +
      "8. 雪月花\n" +
      "9. 愛すべき日々よ\n" +
      "10. さよなら，初恋\n" +
      "11. Interlude\n" +
      "12. 禁断症状\n" +
      "13. 不純愛ラブストーリー\n" +
      "14. 誰かを救ってやる暇などないけど",
    dvd:
      "・『BOY & GIRLS』Music Video\n" +
      "・全国ツアードキュメンタリー\n" +
      "・レコーディング密着映像"}
];



// 一覧
app.get("/youngskinny", (req, res) => {
  res.render("youngskinny", { data: albums });
});

//追加
app.get("/youngskinny/new", (req, res) => {
  res.render("youngskinny_new");
});
app.post("/youngskinny/create", (req, res) => {
  const newItem = {
    id: Number(req.body.id),
    title: req.body.title,
    releaseDate: req.body.releaseDate,
    type: req.body.type,
    label: req.body.label,
    tracks: req.body.tracks,
    dvd: req.body.dvd
  };

  albums.push(newItem);
  res.redirect("/youngskinny");
});

//詳細
app.get("/youngskinny/:number", (req, res) => {
  const number = Number(req.params.number);
  const detail = albums[number];
  if (!detail) {
    return res.status(404).send("データがありません");
  }
  res.render("youngskinny_detail", {
    data: detail,
    index: number
  });
});

//編集
app.get("/youngskinny/edit/:number", (req, res) => {
  const number = Number(req.params.number);
  const detail = albums[number];
  if (!detail) {
    return res.status(404).send("編集対象がありません");
  }
  res.render("youngskinny_edit", {
    data: detail,
    index: number
  });
});

//更新
app.post("/youngskinny/update/:number", (req, res) => {
  const number = Number(req.params.number);
  if (!albums[number]) {
    return res.status(404).send("更新対象がありません");
  }
  albums[number] = {
    id: Number(req.body.id),
    title: req.body.title,
    releaseDate: req.body.releaseDate,
    type: req.body.type,
    label: req.body.label,
    tracks: req.body.tracks,
    dvd: req.body.dvd
  };
  res.redirect("/youngskinny/" + number);
});


//削除
app.post("/youngskinny/delete/:number", (req, res) => {
  const number = Number(req.params.number);
  albums.splice(number, 1);
  res.redirect("/youngskinny");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
