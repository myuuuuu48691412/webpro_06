const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

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
app.listen(8080, () => {
  console.log("Server started: http://localhost:8080/bleague");
});

//削除
app.post("/bleague/delete/:number", (req, res) => {
  const number = Number(req.params.number);
  teams.splice(number, 1);
  res.redirect("/bleague");
});

app.listen(8081, () => console.log("Example app listening on port 8080!"));
