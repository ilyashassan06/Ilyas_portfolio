import React, { useEffect } from "react";
import { DevUtils } from "../data/DevUtils";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Utils() {

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  console.log(DevUtils)
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-6 pt-10 pb-20">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <p className="font-mono text-sm tracking-widest text-violet-400 mb-4">
            // developer utilities
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build faster with
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent">
              powerful dev tools
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed">
            A curated collection of frontend developer utilities crafted to
            improve workflow, experiment with UI, and speed up development.
          </p>
        </div>

        {/* Featured Utilities */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400" />

            <h2 className="text-2xl font-semibold">
              Featured Utilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {DevUtils.filter((tool) => tool.featured).map((tool) => (
              <Link
                key={tool.id}
                to={`/utils/${tool.slug}`}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-500/5 via-transparent to-yellow-400/5" />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {tool.category}
                  </span>

                  <span
                    className={`text-xs px-2 py-1 rounded-md border font-mono ${
                      tool.difficulty === "Easy"
                        ? "text-green-400 border-green-400/20 bg-green-400/10"
                        : tool.difficulty === "Medium"
                        ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/10"
                        : "text-red-400 border-red-400/20 bg-red-400/10"
                    }`}
                  >
                    {tool.difficulty}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-violet-300 transition-colors">
                    {tool.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-black border border-zinc-800 text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm text-violet-400 font-medium group-hover:gap-3 transition-all">
                    Open Tool
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Utilities */}
        <div className="reveal">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">
              All Utilities
            </h2>

            <span className="text-sm font-mono text-zinc-500">
              {DevUtils.length} tools
            </span>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {DevUtils.map((tool) => (
              <Link
                key={tool.id}
                to={`/utils/${tool.slug}`}
                className="group bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 hover:border-violet-500/30 transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-violet-400">
                    {tool.category}
                  </span>

                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4 group-hover:text-violet-300 transition-colors">
                  {tool.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-black border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
       <Link
  to="/"
  className="fixed bottom-8 right-8 group z-50"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-violet-500/30 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

  <button className="relative flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-700 bg-zinc-900/90 backdrop-blur-xl text-white font-medium overflow-hidden transition-all duration-300 hover:border-violet-500/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]">
    
    {/* Gradient Hover Layer */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-violet-500/10 via-transparent to-yellow-400/10" />

    {/* Text */}
    <span className="relative z-10 flex items-center gap-2">
      Go to Home
      
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </button>
</Link>
      </section>
    </div>
  );
}

export default Utils;