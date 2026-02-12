# 1st LOVE - Harudayori from Osaka

9人のハンドメイド作家によるPOPUPイベント「Harudayori from Osaka」の告知用ホームページです。

## イベント情報

- **日時**: 2026年4月17日(金)・18日(土) 13:00〜19:00（最終日は17:00終了）
- **会場**: uju_gallery
- **住所**: 〒530-0038 大阪市北区紅梅町5-23 紅梅田中ビル1F

## 出展作家

1. SOCsWORLD
2. カワノナカ
3. Yukasee.
4. wagamamahoppe
5. BUSY UEPY
6. Atelier Otti
7. Aether io
8. omusubi-five
9. donatella

## 画像の差し替え方法

### キービジュアル

`images/hero-placeholder.svg` を実際のキービジュアル画像 `images/hero.jpg` に差し替えてください。

HTMLの該当箇所も変更してください：

```html
<img src="images/hero.jpg" alt="...">
```

### 作家写真

各作家の真四角写真を `images/` フォルダに追加し、HTMLの `img` タグの `src` を更新してください。

推奨サイズ: 400x400px（正方形）

## GitHub Pagesでの公開方法

1. リポジトリの Settings > Pages を開く
2. Source で「Deploy from a branch」を選択
3. Branch で「main」（または該当ブランチ）と「/1st-love-popup」フォルダを選択
4. Save をクリック

または、このフォルダの内容をリポジトリのルートに移動して公開することもできます。

## ファイル構成

```
1st-love-popup/
├── index.html          # メインページ
├── style.css           # スタイルシート
├── script.js           # JavaScript
├── README.md           # このファイル
└── images/
    ├── hero-placeholder.svg    # ヒーロー画像（仮）
    └── artist-placeholder.svg  # 作家写真（仮）
```

## カスタマイズ

### 色の変更

`style.css` の `:root` セクションでメインカラーを変更できます：

```css
:root {
    --color-primary: #F5D76E;      /* メインの黄色 */
    --color-primary-light: #FFF8DC; /* 薄い黄色 */
    --color-accent: #E8A0BF;        /* アクセントのピンク */
    --color-accent-blue: #7EC8E3;   /* アクセントの水色 */
}
```

### Instagram URLの変更

各作家のInstagramリンクは `index.html` 内の該当箇所を編集してください。
