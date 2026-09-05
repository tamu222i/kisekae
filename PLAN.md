# Webきせかえゲーム 開発計画書 (DDD & TDD & ステップ別Gitコミット)

ブラウザ上で動作するインタラクティブな「きせかえゲーム」を構築します。
DDD（ドメイン駆動設計）による堅牢な設計、TDD（テスト駆動開発）による高品質な実装、および各ステップごとのGitコミット運用を徹底します。

---

## 開発方針と原則

1. **ドメイン駆動設計 (DDD)**
   - ドメイン層（ルール・不変条件・エンティティ・値オブジェクト）をUIやフレームワークから完全に分離。
   - レイヤードアーキテクチャ（Domain / Application / Infrastructure / Presentation）を採用。
   - 排他ルール（例: ワンピース着用時はトップス・ボトムスが解除される、等）やZ-Index描画順序などのビジネスロジックを集約。

2. **テスト駆動開発 (TDD)**
   - 各コンポーネント・機能の実装前にテストコード（Vitest）を記述（Red）。
   - 必要最小限の実装でテストをパスさせる（Green）。
   - コードを洗練・整理する（Refactor）。

3. **ステップごとのGitコミット**
   - 「プロジェクト初期化」「ドメインモデル定義」「集約・不変条件の実装」「ユースケース実装」「UIコンポーネント実装」など、意味のある小さな単位ごとにConventional Commitsに則ってコミットを実施。

---

## 技術スタック選定

- **ランタイム / ビルドツール**: Node.js v22 + Vite
- **UIフレームワーク**: React 18 / 19 + TypeScript
- **スタイリング**: Tailwind CSS または モダンCSS（可愛い・直感的なUI）
- **テストフレームワーク**: Vitest + Testing Library / jsdom
- **アセット方式**: ベクターベースのモジュラーSVG
  - 外部画像サーバー不要で完全内製・解像度フリー・レイヤー重ね合わせが容易
  - 髪型、表情、トップス、ボトムス、ワンピース、靴、アクセサリー、背景を用意

---

## アーキテクチャ構成 (DDD)

```
src/
├── domain/                      # 【ドメイン層】外部依存なしの純粋なTypeScript
│   ├── models/
│   │   ├── SlotCategory.ts      # 部位（Base, HairBack, HairFront, Face, Tops, Bottoms, OnePiece, Shoes, Accessory, Background）
│   │   ├── Item.ts              # アイテム（ID, 名前, カテゴリ, Z-Index, SVGパス情報/コンポーネント）
│   │   └── Outfit.ts            # 集約ルート: 着せ替え状態。排他制約や着せ替え不変条件を保護
│   ├── services/
│   │   └── OutfitRandomizer.ts  # ランダム生成サービス（整合性を保った一括コーディネート）
│   └── repositories/
│       └── IItemRepository.ts   # アイテムカタログ取得の抽象インターフェース
│
├── application/                 # 【アプリケーション層】ユースケース
│   ├── usecases/
│   │   ├── EquipItemUseCase.ts      # アイテム装備
│   │   ├── UnequipSlotUseCase.ts    # 部位解除
│   │   ├── RandomizeOutfitUseCase.ts# ランダム着せ替え
│   │   ├── ResetOutfitUseCase.ts    # デフォルト初期化
│   │   └── GetCatalogUseCase.ts     # カタログ取得
│   └── dto/
│       └── OutfitDTO.ts             # UI連携用DTO
│
├── infrastructure/              # 【インフラ層】データソース・外部入出力
│   ├── repositories/
│   │   └── InMemoryItemRepository.ts# アイテムマスターデータカタログ
│   ├── assets/                      # SVGパーツデータ・定義
│   └── export/
│       └── CanvasImageExporter.ts   # 着せ替え結果のPNG画像書き出しアダプター
│
└── presentation/                # 【プレゼンテーション層】React UI
    ├── components/
    │   ├── CharacterPreview/        # レイヤー重ね合わせプレビュー表示
    │   ├── CategoryTabs/            # カテゴリ選択タブ（髪、服、アクセ等）
    │   ├── ItemCatalogGrid/         # アイテム一覧サムネイル＆選択グリッド
    │   └── ActionToolbar/           # リセット・ランダム・PNG保存ボタン群
    ├── hooks/
    │   └── useKisekaeGame.ts        # ユースケースを束ねるカスタムフック
    └── App.tsx
```

---

## 実装ステップとコミット計画

| Step | 作業内容 | コミットメッセージ例 |
| :--- | :--- | :--- |
| **Step 0** | Vite + React + TypeScript + Vitest + Tailwind環境の初期構築 | `chore: initialize project with vite, react, ts, and vitest` |
| **Step 1** | 【TDD】ドメイン層の基礎（SlotCategory, Itemエンティティ）のテストと実装 | `test: add unit tests for slot and item domain models`<br>`feat(domain): implement slot category and item entities` |
| **Step 2** | 【TDD】ドメイン集約 `Outfit`（装備・解除・排他制約・Z-Index整列）のテストと実装 | `test: add unit tests for outfit aggregate with conflict rules`<br>`feat(domain): implement outfit aggregate with invariant validation` |
| **Step 3** | 【TDD】ドメインサービス `OutfitRandomizer` のテストと実装 | `feat(domain): add outfit randomizer domain service with tests` |
| **Step 4** | 【TDD】アイテムカタログ（リポジトリIF＆インメモリ実装＆SVGパーツ定義） | `feat(infra): implement item repository and modular svg asset definitions` |
| **Step 5** | 【TDD】アプリケーション層（ユースケース群）のテストと実装 | `feat(app): implement kisekae use cases (equip, unequip, randomize, reset)` |
| **Step 6** | 【TDD/UI】プレゼンテーション層（プレビュー・カテゴリタブ・パレットUI）の実装 | `feat(ui): implement character preview canvas and item selector components` |
| **Step 7** | 機能統合（PNG保存エクスポート機能、レスポンシブデザイン調整） | `feat: integrate canvas png export and responsive ui styling` |
| **Step 8** | E2E/統合テストおよび総合リファクタリング | `test: add integration tests for complete dressing workflow` |

---

## Verification Plan

### Automated Tests
- 各レイヤーごとのVitestユニットテストを実行:
  ```bash
  npm test -- --run
  ```
- カバレッジの確認（特にDomain層は100%を目指す）:
  ```bash
  npm test -- --coverage --run
  ```
- TypeScriptの型検査:
  ```bash
  npx tsc --noEmit
  ```

### Manual Verification
- Vite開発サーバー（`npm run dev`）を起動し、ブラウザで以下を確認:
  1. アイテムを選択した際に即座にプレビューの該当レイヤーが着せ替わること
  2. ワンピース選択時にトップス/ボトムスと正しく排他制御されること
  3. ランダムボタンでバランスの取れた一括コーデが生成されること
  4. リセットボタンで初期状態に戻ること
  5. PNGダウンロードボタンで現在の見た目が画像として保存できること

