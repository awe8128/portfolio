type CaseVariant = "wide" | "normal";

type CaseType = "image" | "radial";

export type CaseItem = {
  id: number;
  title: string;
  subtitle?: string;
  what: string;
  image?: string;
  variant: CaseVariant;
  type: CaseType;
  meta: string[];
  role?: string;
  goal: string;
  achivement: string;
  description: string;
};

export const WorkCases: CaseItem[] = [
  {
    id: 1,
    title: "マイナビ",
    subtitle: "ジョブサーチ",
    what: "対象: マイナビの20個サービスがもつ求人をまとめたサイト",
    image: "/jobsearch.png",
    variant: "wide",
    type: "image",
    meta: ["Golang", "Python", "AWS", "Next.js", "OpenSearch", "DDD"],
    role: "担当: サービス保守・運用",
    goal: "目標: セッション数を向上, 99%以上の稼働率",
    achivement:
      "成果: 99.8%以上の稼働率, 複数バッチのリリース（集計、タグ付け..etc)",
    description:
      "新卒ながら、FE、BE、バッチ、AWS運用まで幅広く携わりました。新規機能をドキュメントから実装し、UTや受け入れテストなど担当していました。",
  },
  {
    id: 2,
    title: "生成AI",
    subtitle: "PoC",
    what: "対象: 社内ツール",
    variant: "normal",
    image: "/playwright.png",
    type: "image",
    meta: ["MCP", "Agent", "Docker", "Github Copilot"],
    role: "担当: PoC実装と導入検討",
    goal: "目標: 生産量は向上",
    achivement: "成果: 会社全体にPlaywright MCPの導入を実現",
    description:
      "個人情報を扱う企業として、情報漏れを常に意識した上で、AI Agentに挑戦し、安全に使える仕組みや方法を検討し、上部に提案",
  },
  {
    id: 3,
    title: "記事",
    subtitle: "エンジニアブログ",
    what: "対象: Docbase",
    image: "/testcontainer.png",
    variant: "normal",
    type: "image",
    meta: ["Golang", "Engineer Blog", "Testcontainer-go"],
    role: "担当: 記事作成",
    goal: "目標: 知識共有と他のPJに導入",
    achivement:
      "成果: 複数の記事からエンジニアブログに載る記事として厳選された",
    description: "https://engineerblog.mynavi.jp",
  },
  {
    id: 4,
    title: "社内サービス",
    subtitle: "SLK",
    what: "対象: 10万ユーザと4つ事業部を支えるサービス",
    variant: "wide",
    type: "image",
    image: "/salesV2.png",
    meta: [
      "Golang",
      "Backend lead engineer",
      "DDD",
      "Layered Architecture",
      "OpenAPI",
      "Atlas",
      "Testcontainers-go",
      "Playwright MCP",
    ],
    role: "担当: バックエンドのリードエンジニア",
    goal: "目標: 新規立ち上げ・リプレース",
    achivement:
      "成果: DB設計, システム設計, API設計, UT, 結合テスト実装方法などを率先して開発。 MCPサーバーの導入、マイグレーションの自動化など",
    description:
      "スプリントを回し、自分の実装はもちろんですが、後輩や同期のサポート",
  },
];
