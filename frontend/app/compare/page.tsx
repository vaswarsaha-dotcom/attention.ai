import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";

const rows = [
  ["Attention", 94, 92],
  ["Emotion", 88, 82],
  ["Suspense", 94, 96],
  ["Pacing", 93, 95],
  ["Music", 95, 91],
  ["Visual", 99, 96],
  ["Dialogue", 76, 88]
];

export default function Compare() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-cyan-300">
              COMPARISON
            </p>

            <h1 className="text-4xl font-black mt-2">
              AI movie face-off
            </h1>
          </div>

          <Card className="p-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="text-slate-500 text-sm">
                  <th className="py-4">
                    Feature
                  </th>

                  <th>Interstellar</th>
                  <th>Inception</th>
                  <th>Winner</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-white/5"
                  >
                    <td className="py-4">
                      {row[0]}
                    </td>

                    <td>{row[1]}</td>
                    <td>{row[2]}</td>

                    <td className="text-cyan-300">
                      {Number(row[1]) >=
                      Number(row[2])
                        ? "Interstellar"
                        : "Inception"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </PageContainer>
    </>
  );
}