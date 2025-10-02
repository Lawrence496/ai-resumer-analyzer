import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-no-repeat bg-cover min-h-screen">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Welcome to Resumind</h1>
        <p>Your AI-powered resume assistant</p>
      </div>
    </section>
  </main>
}
