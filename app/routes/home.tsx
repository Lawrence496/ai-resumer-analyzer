import ResumeCard from "~/components/ResumeCard";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";


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

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}

  </main>
}
