import ResumeCard from "~/components/ResumeCard";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your dream job!" },
  ];
}

export default function Home() {
    const { isLoading, auth } = usePuterStore()

    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
      if(!auth.isAuthenticated) navigate('auth?next=/');
    }, [auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-no-repeat bg-cover min-h-screen">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
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
