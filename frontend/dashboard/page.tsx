import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";

import EngagementTimeline from "@/components/charts/engagement-timeline";
import FeatureBarChart from "@/components/charts/feature-bar-chart";
import AiVsHumanChart from "@/components/charts/ai-vs-human-chart";

const timeline = [
  { minute: 0, score: 62 },
  { minute: 10, score: 71 },
  { minute: 20, score: 77 },
  { minute: 30, score: 68 },
  { minute: 40, score: 84 },
  { minute: 50, score: 91 },
  { minute: 60, score: 88 },
  { minute: 70, score: 96 }
];

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-cyan-300">
              RESEARCH DASHBOARD
            </p>

            <h1 className="text-4xl font-black mt-2">
              Attention Analytics
            </h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Average Attention", "82.4", "+8.3%"],
              ["Movies Analyzed", "1,248", "+12.1%"],
              ["Scenes Analyzed", "28,492", "+18.7%"],
              ["AI / Human Correlation", "0.87", "+0.04"]
            ].map((item) => (
              <Card
                key={item[0]}
                className="p-5"
              >
                <div className="text-xs text-slate-500">
                  {item[0]}
                </div>

                <div className="text-3xl font-black mt-2">
                  {item[1]}
                </div>

                <div className="text-xs text-cyan-300 mt-1">
                  {item[2]}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <Card className="p-5">
              <h2 className="font-semibold">
                Engagement Timeline
              </h2>

              <p className="text-sm text-slate-500 mb-3">
                Attention throughout the movie
              </p>

              <EngagementTimeline
                data={timeline}
              />
            </Card>

            <Card className="p-5">
              <h2 className="font-semibold">
                Feature Impact
              </h2>

              <p className="text-sm text-slate-500 mb-3">
                Signals driving attention
              </p>

              <FeatureBarChart
                data={[
                  {
                    name: "Visual",
                    value: 95
                  },
                  {
                    name: "Pacing",
                    value: 92
                  },
                  {
                    name: "Music",
                    value: 90
                  },
                  {
                    name: "Suspense",
                    value: 89
                  },
                  {
                    name: "Emotion",
                    value: 86
                  },
                  {
                    name: "Action",
                    value: 81
                  },
                  {
                    name: "Dialogue",
                    value: 76
                  }
                ]}
              />
            </Card>
          </div>

          <Card className="p-5">
            <h2 className="font-semibold">
              AI vs Human Ratings
            </h2>

            <p className="text-sm text-slate-500 mb-3">
              Prediction compared with viewer feedback
            </p>

            <AiVsHumanChart />
          </Card>
        </div>
      </PageContainer>
    </>
  );
}