export default function PageContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:pl-64 min-h-screen">
      <div className="lg:hidden">
        <div className="px-5 pt-5 text-xl font-bold gradient-text">
          ✦ AttentionAI
        </div>
      </div>

      <main className="px-4 lg:px-8 py-6 max-w-[1700px] mx-auto">
        {children}
      </main>
    </div>
  );
}