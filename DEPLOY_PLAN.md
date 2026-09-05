# Webきせかえゲーム デプロイ計画書 (Web Deployment Plan)

本ドキュメントは、開発した「Webきせかえゲーム（Vite + React + TypeScript）」をインターネット上に一般公開し、誰でもスマートフォンやPCからアクセス・遊べるようにするためのデプロイ（Web公開）計画書です。

---

## ⚠️ 重要：Private（非公開）リポジトリにおける公開の注意点

GitHub Pages は、**無料プラン（GitHub Free）の場合、Private リポジトリでは利用できない**という制約があります（GitHub Pro/Team の有料プランが必要）。

そのため、リポジトリが Private の場合のデプロイ方針は以下の**2つの選択肢**からお選びいただけます。

```
【Privateリポジトリのデプロイ分岐】
  │
  ├─ プラン A: ソースコードは非公開（Private）のまま、Webサイトだけを一般公開したい
  │     └─▶ 【推奨】Cloudflare Pages または Vercel を使用（完全無料・設定1分）
  │
  └─ プラン B: ソースコードも公開（Public）にして良い
        └─▶ GitHub リポジトリを Public に変更し、GitHub Pages を使用（完全無料）
```

### プラン A と プラン B の比較

| 項目 | プラン A: Cloudflare Pages / Vercel | プラン B: GitHub リポジトリを Public 化 |
|---|---|---|
| **ソースコード** | **完全非公開（Private維持）** | 公開（誰でもGitHub上でコードが見られる） |
| **公開されるWebサイト** | 誰でも遊べる（一般公開） | 誰でも遊べる（一般公開） |
| **費用** | **完全無料（0円）** | **完全無料（0円）** |
| **公開URLの例** | `https://kisekae.pages.dev` など | `https://tamu222i.github.io/kisekae/` |
| **設定の手間** | GitHub連携でリポジトリを選択するだけ（約1〜2分） | GitHub SettingsでPublicに変更するだけ（約30秒） |
| **メリット** | ソースコードや開発過程を隠したまま、ゲームだけを全世界に配信可能 | 外部サービスの登録が不要 |

---

## 1. アプリケーション特性と要件

| 項目 | 特性・仕様 |
|---|---|
| **アプリケーション種別** | SPA（Single Page Application: 単一ページWebアプリ） |
| **技術スタック** | Vite 5, React 18, TypeScript, Tailwind CSS |
| **サーバーサイド要件** | **不要（完全静的ホスティング可能）**<br>※画像エクスポートもクライアントサイドのHTML Canvasで完結 |
| **ビルド成果物** | `dist/` ディレクトリ（`index.html`, `assets/*.js`, `assets/*.css`） |
| **外部通信・DB** | なし（APIキー・機密情報・個人情報なし、極めてセキュアで高可用性） |
| **公開対象** | PCおよびスマートフォン（iOS / Android）ブラウザ |

---

## 2. デプロイ共通の準備（コード側で必要な対応）

どのプラットフォーム（GitHub Pages / Cloudflare Pages / Vercel）を選ぶ場合でも、コード側で共通して以下の2点を行っておくと最も安全かつ綺麗に公開できます。

### (1) `vite.config.ts` のパス設定 (`base: './'`)
相対パスにしておくことで、サブパス（`/kisekae/`）でもルートドメイン（`https://xxx.pages.dev/`）でも、アセットが404にならず正常に読み込まれます。
```ts
export default defineConfig({
  base: './', // 相対パス指定で全プラットフォームに対応
  // ...既存の設定
});
```

### (2) `index.html` のメタデータ・OGP拡充
SNS（X/Twitter, LINE, Discord等）でシェアされた際に、可愛いタイトル・説明文・ファビコンが表示されるように整備します。
- タイトル: `きせかえゲーム 🎀 Dress Up Game`
- メタディスクリプション: かわいい服やアクセサリーで自分だけのコーデを作ろう！
- ファビコン: 絵文字SVGファビコン（`👗`）を設定

---

## 3. 具体的なデプロイ手順

### 【プラン A】Cloudflare Pages で無料公開する手順（Privateのまま公開）
リポジトリを非公開のまま、完全無料でゲームを公開する最もおすすめの方法です。

1. **コードの準備・コミット**:
   `vite.config.ts` に `base: './'` を追加し、コミットして GitHub にプッシュ。
2. **Cloudflare にアクセス**:
   [https://dash.cloudflare.com/](https://dash.cloudflare.com/) にアクセス（未登録なら無料登録）。
3. **Pages プロジェクトを作成**:
   - 左メニューの「Workers & Pages」>「Create application」>「Pages」タブ >「Connect to Git」を選択。
   - GitHubアカウントを連携し、Privateリポジトリ `kisekae` を選択。
4. **ビルド設定を入力**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. **「Save and Deploy」をクリック**:
   - 約1分でビルドが完了し、`https://kisekae-xxx.pages.dev` のURLが発行されます！
   - 以降は `git push` するたびに自動で最新版が反映されます。

---

### 【プラン B】GitHub を Public にして GitHub Pages で公開する手順
外部サービスのアカウントを作りたくない場合の手順です。本ゲームには機密情報やAPIキーは一切含まれていないため、Publicにしても安全です。

1. **GitHubリポジトリを Public に変更**:
   - [https://github.com/tamu222i/kisekae/settings](https://github.com/tamu222i/kisekae/settings) を開く。
   - 一番下の「Danger Zone」にある「Change repository visibility」をクリック。
   - 「Change to public」を選択して確定。
2. **GitHub Pages の設定**:
   - 同じく Settings の左メニュー「Pages」を開く。
   - 「Build and deployment」の `Source` で `GitHub Actions` を選択。
3. **ワークフローファイルをプッシュ**:
   - リポジトリに `.github/workflows/deploy.yml` を追加してプッシュ。
   - 自動的にビルドされ、`https://tamu222i.github.io/kisekae/` で公開されます。

---

## 4. 公開後の確認・ロードマップ

- [ ] スマートフォン（iPhone Safari / Android Chrome）でタップ操作・レイアウト崩れがないか確認。
- [ ] 着せ替え後の「画像をほぞん」ボタンで高解像度PNGが正常に端末にダウンロードできるか確認。
- [ ] SNSにURLを投稿して可愛いOGPカードが表示されるか確認。
