import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="w-full flex-grow">{children}</main>
      <footer className="w-full flex flex-col items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://mc.hjfunny.site/"
          title="hjfunnyMC"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">hjfunnyMC Team</p>
        </Link>
        <span className="text-default-600 text-sm px-5">
          hjfunnyMC
          是公益项目，不接受任何资金支持。如有任何人员要求充值/赞助请立即拒绝并尽快联系管理员。
        </span>
      </footer>
    </div>
  );
}
