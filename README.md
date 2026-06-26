# W杯2026ページ

GitHub + Netlify Functions 対応版です。

- `index.html`: 表示ページ
- `netlify/functions/worldcup-scores.js`: 最新結果取得用のNetlify Function
- `netlify.toml`: Netlify設定

NetlifyでこのリポジトリをImport from Gitすると、`/api/worldcup-scores` 経由でスコアを自動取得します。
