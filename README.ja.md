# RandomMT

Mersenne Twisterアルゴリズムに基づく乱数生成器。

## ソース

- [Mersenne Twisterの概要 - 統計学者の森](https://www.hello-statisticians.com/explain-terms-cat/mersenne_twister1.html)

## 特徴

- 乱数を生成するためのMersenne Twisterアルゴリズムを実装
- シード値で乱数生成器を初期化するコンストラクタを提供

## 使い方

`RandomMT`クラスを使用するには:

1. `RandomMT.js`ファイルから`RandomMT`クラスをインポートする。
2. 必要に応じてシード値を渡し、`RandomMT`クラスの新しいインスタンスを作成する。
3. `getValue()`メソッドを呼び出して新しい乱数を生成する。

例:

```javascript
import { RandomMT } from './RandomMT.js';

const r = new RandomMT(0);
console.log(r.getValue()); // 乱数を出力
```

## テスト

本プロジェクトには`RandomMT.test.js`ファイルにテストスイートが含まれており、Denoテストフレームワークを使用して実行できます。

## ライセンス

MIT License — [LICENSE](LICENSE)を参照してください。
