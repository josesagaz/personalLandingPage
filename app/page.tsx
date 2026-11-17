import HomePage from "@/components/home/HomePage";
import { homeEn } from "@/content/home";

export default function Page() {
  return <HomePage t={homeEn} />;
}

// Spanish version (e.g. app/es/page.tsx):
//   import HomePage from "@/components/home/HomePage";
//   import { homeEs } from "@/content/home.es";
//   export default function Page() { return <HomePage t={homeEs} />; }
