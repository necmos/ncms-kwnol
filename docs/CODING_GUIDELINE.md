# Web アプリケーション コーディング規約

このドキュメントでは、ncms-sales の Web アプリケーション開発におけるコーディング規約を定めます。

## 目次

- [関数定義](#関数定義)
- [TypeScript](#typescript)
- [React](#react)
- [コンポーネント設計](#コンポーネント設計)
- [状態管理](#状態管理)
- [スタイリング](#スタイリング)
- [命名規則](#命名規則)
- [ファイル構成](#ファイル構成)
- [フォーム](#フォーム)
- [API 通信](#api通信)
- [エラーハンドリング](#エラーハンドリング)

---

## 関数定義

### カスタムフック・コンポーネント内の関数定義

**必須**: カスタムフックやコンポーネント内で関数を定義する際は、`function`キーワードではなく`const`（アロー関数）を使用すること。

**理由**:

- ホイスティングの挙動が明確になる
- コードの一貫性が保たれる
- 関数がクロージャであることが明示的になる

```typescript
// ❌ Bad
function MyComponent() {
  function handleClick() {
    console.log("clicked");
  }

  return <button onClick={handleClick}>Click</button>;
}

// ✅ Good
const MyComponent = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>Click</button>;
};
```

### トップレベル関数・ユーティリティ関数

トップレベルの関数やユーティリティ関数は`export function`を使用してもよい。

```typescript
// ✅ Good
export function formatDate(date: Date): string {
  return date.toLocaleDateString("ja-JP");
}

// ✅ Good (アロー関数も可)
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("ja-JP");
};
```

---

## TypeScript

### 型定義

#### 明示的な型注釈

戻り値の型は明示的に指定すること（特にパブリック API、カスタムフック、ユーティリティ関数）。

```typescript
// ❌ Bad
const getUserName = (user: User) => {
  return user.name || user.email;
};

// ✅ Good
const getUserName = (user: User): string => {
  return user.name || user.email;
};
```

#### any 型の禁止

`any`型の使用は原則禁止。やむを得ない場合は`unknown`を使用し、型ガードで安全に扱う。

```typescript
// ❌ Bad
const parseData = (data: any) => {
  return data.value;
};

// ✅ Good
const parseData = (data: unknown): string => {
  if (typeof data === "object" && data !== null && "value" in data) {
    return String(data.value);
  }
  throw new Error("Invalid data format");
};
```

#### 型の再利用

同じ型構造を複数箇所で使う場合は、型定義ファイルに切り出す。

```typescript
// types/form.d.ts
export interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
}

// components/TextField.tsx
import { FormFieldProps } from "@/types/form";

interface TextFieldProps extends FormFieldProps {
  value: string;
  onChange: (value: string) => void;
}
```

### 型ガード

型を絞り込む際は型ガード関数を使用する。

```typescript
// ✅ Good
const isValidUser = (user: unknown): user is User => {
  return (
    typeof user === "object" && user !== null && "id" in user && "email" in user
  );
};

if (isValidUser(data)) {
  console.log(data.email); // 型安全
}
```

---

## React

### コンポーネント定義

#### 関数コンポーネント

アロー関数を使用してコンポーネントを定義する。

```typescript
// ✅ Good
export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
```

#### Props 型定義

Props は必ずインターフェースで定義する。

```typescript
// ✅ Good
interface UserProfileProps {
  user: User;
  onEdit?: () => void;
}

export const UserProfile = ({ user, onEdit }: UserProfileProps) => {
  // ...
};
```

### Hooks

#### useCallback の使用

コールバック関数を子コンポーネントに渡す場合は`useCallback`でメモ化する。

```typescript
// ✅ Good
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <ChildButton onClick={handleIncrement} />;
};
```

#### useMemo の使用

重い計算処理は`useMemo`でメモ化する。

```typescript
// ✅ Good
const ExpensiveComponent = ({ items }: Props) => {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);

  return <List items={sortedItems} />;
};
```

### イベントハンドラ

イベントハンドラは`handle`で始める命名規則を使用する。

```typescript
// ✅ Good
const MyComponent = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};
```

---

## コンポーネント設計

### 単一責任の原則

1 つのコンポーネントは 1 つの責務のみを持つこと。

```typescript
// ❌ Bad - データ取得とUI表示が混在
const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

// ✅ Good - データ取得とUI表示を分離
const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return users;
};

const UserDashboard = () => {
  const users = useUsers();

  return <UserList users={users} />;
};

const UserList = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
```

### コンポーネントのサイズ

コンポーネントは 200 行以内を目安とする。それを超える場合は分割を検討する。

### 早期リターン

条件分岐は早期リターンを使用して可読性を高める。

```typescript
// ✅ Good
const UserProfile = ({ user }: Props) => {
  if (!user) {
    return <div>ユーザーが見つかりません</div>;
  }

  if (user.isDeleted) {
    return <div>このユーザーは削除されました</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
```

---

## スタイリング

### Tailwind CSS

- ユーティリティクラスを使用する
- 複雑なスタイルは`cn()`ヘルパーを使用してクラス名を結合
- カスタムスタイルは`tailwind.config.ts`で定義

```typescript
import { cn } from "@/lib/utils";

// ✅ Good
const Button = ({ variant, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded px-4 py-2 font-medium transition-colors",
        variant === "primary" && "bg-primary-100 text-white",
        variant === "secondary" && "bg-gray-200 text-black",
        className
      )}
      {...props}
    />
  );
};
```

### 条件付きスタイル

条件付きスタイルは`cn()`を使用する。

```typescript
// ✅ Good
<div
  className={cn(
    "rounded border p-4",
    isActive && "border-primary-100 bg-primary-50",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
>
  Content
</div>
```

---

## 命名規則

### ファイル名

- **コンポーネント**: PascalCase（例: `UserProfile.tsx`）
- **ユーティリティ**: kebab-case（例: `format-date.ts`）
- **フック**: camelCase with "use" prefix（例: `useUserProfile.ts`）
- **型定義**: kebab-case with `.d.ts`（例: `user.d.ts`）

### 変数・関数名

- **変数**: camelCase（例: `userName`, `isActive`）
- **定数**: UPPER_SNAKE_CASE（例: `MAX_COUNT`, `API_BASE_URL`）
- **関数**: camelCase（例: `fetchUser`, `handleClick`）
- **コンポーネント**: PascalCase（例: `UserProfile`, `Button`）
- **型/インターフェース**: PascalCase（例: `User`, `UserProfileProps`）

### Boolean 値

Boolean 型の変数・関数は`is`, `has`, `should`, `can`などの接頭辞を使用する。

```typescript
// ✅ Good
const isActive = true;
const hasPermission = false;
const shouldRender = () => true;
const canEdit = user.role === "ADMIN";
```

---

## ファイル構成

### コンポーネントディレクトリ

```
components/
├── ui/                    # 汎用UIコンポーネント
│   ├── Button/
│   │   ├── index.tsx
│   │   └── index.stories.tsx
│   └── Input/
│       ├── index.tsx
│       └── index.stories.tsx
├── layout/                # レイアウトコンポーネント
│   ├── Header/
│   └── SideMenu/
└── Features/              # 機能固有のコンポーネント
    ├── Pagination/
    └── SortIcon/
```

### ページ固有コンポーネント

ページ固有のコンポーネントは`_components`ディレクトリに配置する。

```
app/
└── admin/
    └── clients/
        └── companies/
            ├── page.tsx
            └── _components/
                ├── ClientTable/
                └── ClientRegisterForm/
```

### ファイルのエクスポート

各コンポーネントディレクトリには`index.tsx`を配置し、名前付きエクスポートを使用する。

```typescript
// components/ui/Button/index.tsx
export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

// 使用側
import { Button } from "@/components/ui/Button";
```

---

## フォーム

### バリデーション

バリデーションは Zod を使用してスキーマベースで行う。

```typescript
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  age: z.number().min(0).max(150).optional(),
});
```

---

## API 通信

### Orval で生成された API クライアントの使用

**必須**: クライアント側のAPIリクエストには、Orvalで生成された関数とフックを使用すること。

**理由**:
- バックエンドのOpenAPI仕様から自動生成されるため、型安全性が保証される
- APIの仕様変更が自動的にフロントエンドに反映される
- 一貫したAPIクライアントパターンが保たれる

```typescript
// ❌ Bad - 手動でfetchを使用
const fetchTalents = async () => {
  const response = await fetch('/api/talents')
  return response.json()
}

// ✅ Good - Orvalで生成されたフックを使用
import { useTalentsControllerFindAll } from '@/generated/api/talents/talents'

const TalentList = () => {
  const { data, error, isLoading } = useTalentsControllerFindAll(
    { page: 1, pageSize: 10 },
    {
      swr: {
        revalidateOnFocus: false,
      }
    }
  )

  if (isLoading) return <div>読み込み中...</div>
  if (error) return <div>エラーが発生しました</div>

  return <div>{/* データを表示 */}</div>
}
```

#### API生成コマンド

```bash
# OpenAPI仕様からAPIクライアントを生成
npm run generate:api
```

### Server Actions

サーバー側でのデータ取得・更新には Server Actions を使用する。

```typescript
// actions/user.ts
"use server";

export const createUser = async (data: CreateUserInput) => {
  try {
    const user = await prisma.user.create({ data });
    return { success: true, user };
  } catch (error) {
    return { success: false, error: "ユーザーの作成に失敗しました" };
  }
};
```

---

## エラーハンドリング

### try-catch

非同期処理では必ず try-catch を使用する。

```typescript
const fetchData = async () => {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("データの取得に失敗しました", error);
    throw error;
  }
};
```

---

### 遅延ローディング

大きなコンポーネントは動的インポートで遅延ローディングする。

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  loading: () => <div>読み込み中...</div>,
});
```

### 画像最適化

Next.js の`Image`コンポーネントを使用する。

```typescript
import Image from "next/image";

<Image
  src="/profile.jpg"
  alt="プロフィール"
  width={200}
  height={200}
  priority
/>;
```

---

## その他のベストプラクティス

### マジックナンバーの回避

意味のある数値は定数として定義する。

```typescript
// ❌ Bad
if (users.length > 100) {
  // ...
}

// ✅ Good
const MAX_USERS = 100;

if (users.length > MAX_USERS) {
  // ...
}
```

### 型アサーションの最小化

型アサーション（`as`）の使用は最小限に留める。

```typescript
// ❌ Bad
const user = data as User;

// ✅ Good
if (isValidUser(data)) {
  const user = data; // 型ガードで安全に扱う
}
```
