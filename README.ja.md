# RandomMT

メルセンヌ・ツイスタ(Mersenne Twister)法を使用してランダムな数値を生成するライブラリです。

## 機能

- メルセンヌ・ツイスタ法によるランダムな数値生成
- 初期シードの設定

## 使い方

```javascript
import { RandomMT } from "./RandomMT.js";

const r = new RandomMT(0); // 初期シードを0に設定
console.log(r.getValue()); // ランダムな数値を取得
```

## ライセンス

MIT License