import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";

export default function Profile() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="max-w-3xl space-y-6">
          <div>
            <p className="text-sm text-cyan-300">
              PROFILE
            </p>

            <h1 className="text-4xl font-black mt-2">
              Your Attention profile
            </h1>
          </div>

          <Card className="p-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-300 to-purple-500" />

            <h2 className="text-2xl font-bold mt-4">
              Noah Bennett
            </h2>

            <p className="text-slate-500">
              AI Explorer
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                ["Movies", "42"],
                ["Saved", "18"],
                ["Analyses", "67"]
              ].map((item) => (
                <div
                  key={item[0]}
                  className="bg-white/5 rounded-xl p-4"
                >
                  <div className="text-2xl font-bold">
                    {item[1]}
                  </div>

                  <div className="text-xs text-slate-500">
                    {item[0]}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </PageContainer>
    </>
  );
}