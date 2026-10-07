import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div>
          <p className="text-sm text-cyan-300">
            ADMIN / RESEARCH
          </p>

          <h1 className="text-4xl font-black mt-2">
            Model operations
          </h1>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              ["Model", "RandomForestRegressor"],
              ["Version", "0.1.0"],
              ["Status", "Ready"]
            ].map((item) => (
              <Card
                key={item[0]}
                className="p-5"
              >
                <div className="text-xs text-slate-500">
                  {item[0]}
                </div>

                <div className="text-xl font-bold mt-2">
                  {item[1]}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}