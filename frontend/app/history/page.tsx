import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";

export default function History() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div>
          <p className="text-sm text-cyan-300">
            YOUR DATA
          </p>

          <h1 className="text-4xl font-black mt-2">
            My List & History
          </h1>

          <Card className="mt-6 p-8 text-center">
            <div className="text-4xl">
              🎬
            </div>

            <h2 className="text-xl font-semibold mt-3">
              Your analyzed movies will appear here
            </h2>

            <p className="text-slate-500 mt-2">
              Save movies and revisit previous AI
              analyses.
            </p>
          </Card>
        </div>
      </PageContainer>
    </>
  );
}