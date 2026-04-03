import Link from "next/link";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24">
      <h1 className="text-center text-2xl font-semibold tracking-tight">
        ncms-knowl
      </h1>
      <p className="max-w-md text-center text-muted-foreground">
        学習資料は Next.js ページとして公開しています。
      </p>
      <Button asChild size="lg">
        <Link href="/docs/pr-kihon-gainen-to-teigi">
          パブリック・リレーションズ概論（第2・3・4回）
        </Link>
      </Button>
    </div>
  );
};

export default Home;
