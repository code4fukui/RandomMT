# RandomMT

メルセンヌ・ツイスタ法を使ったランダムな数値生成ライブラリです。

## 機能

- メルセンヌ・ツイスタ法によるランダムな数値生成
- 初期シードの設定

## 使い方

```javascript
import { RandomMT } from "./RandomMT.js";

const r = new RandomMT(0); // 初期シードを0に設定
console.log(r.getValue()); // ランダムな数値を取得
```

## テスト

プロジェクトには`RandomMT.test.js`にテストスイートが含まれており、Denoテストフレームワークを使ってテストを実行できます。

## ライセンス

このプロジェクトは MIT License の下でリリースされています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。