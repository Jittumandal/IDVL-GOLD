import React, { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  latestStories,
  topReads as _topReads,
  recentPosts as _recentPosts,
} from "../Blog/Blog";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaBookmark,
  FaLink,
} from "react-icons/fa";

const slugify = (s = "") =>
  s
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const decoded = decodeURIComponent(slug || "");

  const post = useMemo(() => {
    let p = latestStories.find((x) => x.slug === decoded);
    if (p) return p;

    p =
      _topReads
        .map((p, i) => ({ ...p, _slug: slugify(p.title + "-" + i) }))
        .find((p) => p._slug === decoded) ||
      _recentPosts
        .map((p, i) => ({ ...p, _slug: slugify(p.title + "-" + i) }))
        .find((p) => p._slug === decoded);

    return p;
  }, [decoded]);

  const [isTableOpen, setIsTableOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/blog/post/${encodeURIComponent(decoded)}`;
  const shareText = post?.title || "";

  const openPopup = (url) => {
    window.open(url, "shareWindow", "width=600,height=500");
  };

  const shareTo = (platform) => {
    switch (platform) {
      case "facebook":
        openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      case "twitter":
        openPopup(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`);
        break;
      case "linkedin":
        openPopup(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`);
        break;
      case "whatsapp":
        openPopup(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`);
        break;
      default:
        break;
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <Link to="/blog" className="text-green-600 underline">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <div className="mt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[400px]">
        <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 text-white">
          <button
            onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/blog"))}
            className="mb-4 rounded bg-white/90 px-3 py-1 text-sm text-black"
          >
            ← Back to Blog
          </button>
          <h1 className="text-4xl font-extrabold">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3">
            <img src={post.avatar} className="h-10 w-10 rounded-full" />
            <div>
              <div>{post.author}</div>
              <div className="text-xs">{post.date}</div>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* Article */}
        <article className="lg:col-span-2 space-y-8">
          {/* Table of Contents */}
          <div className="rounded bg-white p-4 shadow">
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">Table of Contents</h2>
              <button onClick={() => setIsTableOpen(!isTableOpen)}>▼</button>
            </div>
            {isTableOpen && (
              <ol className="list-decimal pl-5 text-gray-600">
                <li><a href="#purity">Understanding Gold Purity</a></li>
                <li><a href="#hallmark">Hallmark Certification</a></li>
                <li><a href="#diamond">Diamond 4Cs Guide</a></li>
                <li><a href="#investment">Gold Investment Tips</a></li>
                <li><a href="#care">Jewelry Care Guide</a></li>
              </ol>
            )}
          </div>

          <section id="purity">
            <h2 className="text-2xl font-bold">Understanding Gold Purity</h2>
            <p>Gold purity is measured in karats such as 22K and 24K. Higher karat means higher gold content and value.</p>
          </section>

          <section id="hallmark">
            <h2 className="text-2xl font-bold">Hallmark Certification</h2>
            <p>Hallmarking verifies authenticity and ensures your gold jewelry meets certified purity standards.</p>
          </section>

          <section id="diamond">
            <h2 className="text-2xl font-bold">Diamond 4Cs Guide</h2>
            <p>Cut, Color, Clarity, and Carat determine diamond quality and pricing in the global jewelry market.</p>
          </section>

          <section id="investment">
            <h2 className="text-2xl font-bold">Gold Investment Tips</h2>
            <p>Certified gold and hallmark jewelry provide secure investment value and long-term wealth protection.</p>
          </section>

          <section id="care">
            <h2 className="text-2xl font-bold">Jewelry Care Guide</h2>
            <p>Proper cleaning and storage maintain shine and preserve the long-term quality of your jewelry.</p>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-6 shadow rounded">
            <div className="flex gap-4 items-center">
              <img src={post.avatar} className="h-16 w-16 rounded-full" />
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-xs">{post.date}</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button onClick={() => shareTo("facebook")} className="p-2 bg-blue-600 text-white"><FaFacebookF /></button>
              <button onClick={() => shareTo("twitter")} className="p-2 bg-sky-500 text-white"><FaTwitter /></button>
              <button onClick={() => shareTo("linkedin")} className="p-2 bg-blue-700 text-white"><FaLinkedinIn /></button>
              <button onClick={() => shareTo("whatsapp")} className="p-2 bg-green-500 text-white"><FaWhatsapp /></button>
              <button onClick={copyLink} className="p-2 border"><FaLink /></button>
              <button className="ml-auto p-2 border text-green-600"><FaBookmark /></button>
            </div>

            {copied && <div className="text-green-600 mt-2">Link copied</div>}
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h4 className="mb-3 font-semibold text-sm">Recent Posts</h4>
            {_recentPosts.slice(0, 4).map((p, i) => {
              const s = slugify(p.title + "-" + i);
              return (
                <Link key={i} to={`/blog/post/${encodeURIComponent(s)}`} className="flex gap-3 mb-3">
                  <img src={p.img} className="h-12 w-12 rounded object-cover" />
                  <div className="text-sm">{p.title}</div>
                </Link>
              );
            })}
          </div>
        </aside>
      </main>
    </div>
  );
}
