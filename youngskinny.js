const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

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
app.listen(8080, () => {
  console.log("Server started: http://localhost:8080/youngskinny");
});

//削除
app.post("/youngskinny/delete/:number", (req, res) => {
  const number = Number(req.params.number);
  albums.splice(number, 1);
  res.redirect("/youngskinny");
});

app.listen(8081, () => console.log("Example app listening on port 8080!"));




