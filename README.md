# homework_viewer

homework_viewerは、g's accademy TOKYO devコースチューター向けに作成された
課題提出管理用のスプレッドシートからサーバーレスでデータを取得し、フィードバックを書き込むことのできるアプリケーションです。

アプリケーションは安全のためにAPIキーを記載したファイルを除外して公開されています。
ダウンロード後は非公開コミュニティからAPIキーを取得してセットすることが必要です。

また、期が変更されるごとにスプレッドシートも新しくなるため、その際も新しいAPIキーをコミュニティから取得する必要があります。
APIキーは次のようにファイルを作ることでアプリケーションにロードされます。

ファイルパス： ./homework_viewer/javascript/keys.js

```keys.js
const key = "The key copied from comunity";
```
