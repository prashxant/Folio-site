import { Card } from "@/components/ui/card";
import Intro from "./Intro";
import GithubHeatmap from "./GithubHeatmap";
import Project from "./Project";
import Footer from "./Footer";

function MainCard() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <Card className="rounded-sm mt-4 mx-auto max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] bg-zinc-900 border-zinc-800 border-2 text-col-yel">
        <Intro />
        <GithubHeatmap />
        <Project />
        <div className="mt-6 ml-6 px-4 sm:px-6">
          <p className="font-bold text-2xl sm:text-3xl text-center sm:text-left">
            Blogs
          </p>
          <p className="mt-2 text-sm sm:text-base text-center sm:text-left">
            Trying to add them soon . . .
          </p>
        </div>
        <Footer />
      </Card>
    </div>
  );
}

export default MainCard;