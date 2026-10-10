
export default function PageContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full lg:pl-61">
      <div className="px-5 pt-5 text-xl font-bold lg:hidden">
        <span className="gradient-text">✦ AttentionAI</span>
      </div>

      <main className="mx-auto w-full max-w-[1800px] px-4 pb-10 pt-5 sm:px-6 lg:px-8 lg:pt-6">
        {children}
      </main>
    </div>
  );
}
