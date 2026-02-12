import { Link, Outlet } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import BlogBanner from "./BlogBanner";

const slugify = (s = "") =>
  s
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
export const latestStories = [
  {
    slug: "gold-purity-guide",
    title: "Gold Purity Explained: 6 Important Things You Should Know",
    img: "/blog/proteensalad.jpg",
    author: "By Kinjalika",
    date: "February 3, 2026",
    desc: "Understanding gold purity standards like 22K and 24K helps buyers make smart jewelry decisions. Here are key factors you must know before purchasing gold.",
    full: "Gold purity determines the value, durability, and authenticity of your jewelry. Learn how hallmarking and certification protect your investment.",
    avatar: "/blog/Kinjalika.jpg",
  },
  {
    slug: "diamond-certification-basics",
    title: "Why Diamond Certification Is Important Before Buying Jewelry",
    img: "/blog/proteensalad2.jpg",
    author: "By GreeNox Diet",
    date: "2026 JAN 18",
    desc: "Diamond certification ensures authenticity and quality grading based on international standards including color, clarity, cut, and carat weight.",
    full: "Certified diamonds provide transparency and trust. Learn how grading reports help you compare quality and make confident buying decisions.",
    avatar: "/blog/Aditya.jpg",
  },
  {
    slug: "hallmarking-benefits",
    title: "Gold Hallmarking: Protecting Buyers With Trusted Certification",
    img: "/blog/proteensalad3.jpg",
    author: "By GreeNox Diet",
    date: "2026 JAN 20",
    desc: "Hallmarking confirms gold purity and authenticity, ensuring customers receive genuine jewelry that meets industry standards.",
    full: "Hallmarked gold guarantees purity verification through certified laboratories and government-approved hallmarking systems.",
    avatar: "/blog/Adeesh.jpg",
  },
];

export const topReads = [
  {
    title: "Gold Investment Guide – Understanding Value and Purity",
    desc: "Gold remains one of the most trusted investment assets worldwide. Learn how purity, weight, and certification impact long-term value.",
    img: "/blog/height.jpg",
    tag: "Gold Investment",
    author: "Dr A Bhowal",
    avatar: "/blog/Akash.jpg",
  },
  {
    title: "Diamond Buying Guide – The Complete 4Cs Explained",
    desc: "Discover how cut, color, clarity, and carat weight determine a diamond’s quality and pricing in the global jewelry market.",
    img: "/blog/ultimate.jpg",
    tag: "Diamond Guide",
    author: "Riya Malampy",
    avatar: "/blog/Akash.jpg",
  },
  {
    title: "How Jewelry Certification Builds Customer Trust",
    desc: "Certification ensures authenticity and transparency in gold and diamond jewelry, helping customers purchase with confidence.",
    img: "/blog/weightloss.jpg",
    tag: "Certification",
    author: "By Neha",
    avatar: "/blog/Akash.jpg",
  },
];

export const recentPosts = [
  {
    slug: "gold-care-tips",
    title: "Gold Jewelry Care Tips to Maintain Shine and Value",
    img: "/blog/proteensalad3.jpg",
    author: "By GreeNox Diet",
    date: "2026 JAN 25",
    desc: "Proper cleaning and storage help preserve gold jewelry’s brilliance and prevent long-term damage.",
    full: "Regular maintenance keeps your gold jewelry looking new while protecting its purity and long-term value.",
    avatar: "/blog/Adeesh.jpg",
  },
  {
    title: "Understanding 22K vs 24K Gold Jewelry",
    img: "/blog/proteensalad.jpg",
    avatar: "/blog/Akash.jpg",
    full: "Comparison between different gold purities and their suitability for daily wear or investment.",
  },
  {
    title: "Top Diamond Shapes for Engagement Rings",
    img: "/blog/proteensalad3.jpg",
    author: "By GreeNox Transformation",
    avatar: "/blog/Akash.jpg",
  },
  {
    title: "Luxury Gold Necklace Trends in 2026",
    img: "/blog/proteensalad.jpg",
    author: "By Savansana “Shiva” Hantare",
    avatar: "/blog/Akash.jpg",
  },
  {
    title: "Certified Diamond Rings – Buyer’s Checklist",
    img: "/blog/proteensalad2.jpg",
    author: "By GreeNox Diet",
    avatar: "/blog/Akash.jpg",
  },
  {
    title: "How to Verify Jewelry Certification Online",
    img: "/blog/proteensalad3.jpg",
    author: "By GreeNox Diet",
    avatar: "/blog/Akash.jpg",
  },
  {
    title: "Choosing the Perfect Wedding Gold Set",
    img: "/blog/proteensalad3.jpg",
    author: "By Riya Malampy",
    avatar: "/blog/Akash.jpg",
  },
  {
    title: "Modern Hallmarked Gold Bracelet Designs",
    img: "/blog/proteensalad2.jpg",
    author: "By Nandita Thombre",
    avatar: "/blog/Akash.jpg",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Banner */}
      <BlogBanner />

      {/* Search Section */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base shadow focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>

      {/* Latest Stories Section */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="mb-4 text-xl font-semibold">Latest Stories</h2>

        <div className="flex gap-6 overflow-x-auto pb-2">
          {latestStories.map((story) => (
            <Link
              key={story.slug}
              to={`/blog/post/${encodeURIComponent(story.slug)}`}
              className="block min-w-[400px] max-w-xs"
            >
              <div className="rounded-lg border border-gray-100 bg-white shadow transition hover:shadow-lg">
                <img
                  src={story.img}
                  alt={story.title}
                  className="h300 w-full rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <div className="mb-1 text-xs text-gray-400">{story.date}</div>
                  <div className="mb-2 line-clamp-1 text-base font-bold text-gray-900">
                    {story.title}
                  </div>
                  <div className="mb-2 line-clamp-2 text-sm text-gray-700">
                    {story.desc}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-gray-600">
                      {story.author}
                    </span>
                    <button className="ml-auto text-red-400 hover:text-red-500">
                      <IoIosHeart size={22} />
                    </button>
                    <button className="text-green-400 hover:text-purple-500">
                      <FaBookmark size={18} />
                    </button>
                    <button className="text-blue-400 hover:text-yellow-500">
                      <AiOutlineShareAlt size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Reads */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="mb-4 text-xl font-semibold">Top Reads</h2>
        <div className="flex flex-col gap-6">
          {topReads.map((read, idx) => {
            const slug = slugify(read.title + "-" + idx);
            return (
              <Link
                key={idx}
                to={`/blog/post/${encodeURIComponent(slug)}`}
                className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row"
              >
                <img
                  src={read.img}
                  alt={read.title}
                  className="wfull h-[150px] w-[150px] rounded object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-800">
                    {read.title}
                  </div>
                  <div className="mb-2 text-xs text-gray-500">{read.tag}</div>
                  <div className="mb-2 text-xs text-gray-700">{read.desc}</div>
                  <div className="text-xs text-gray-400">{read.author}</div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2">
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className="h-8 w-8 rounded bg-gray-200 font-bold text-gray-700 hover:bg-green-600 hover:text-white"
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      {/* Wellness Journey Banner */}
      <section className="OurExpert mx-auto mb-8 flex max-w-7xl flex-col items-center rounded-lg bg-white px-4 py-4 shadow md:flex-row">
        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold">
            Start your wellness journey today!
          </h2>
          <p className="mb-4 text-gray-700">
            Chat with us on WhatsApp for customized diet plans and valuable
            health insights.
          </p>
          <Link
            to="/chat"
            className="rounded bg-green-600 px-6 py-2 font-semibold text-white shadow hover:bg-green-700"
          >
            Chat With Our Expert
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src="/blog/Homepage2.jpg"
            alt="Wellness"
            className="h-100 w-full rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mx-auto max-w-7xl px-4 py-6 pb-12">
        <h2 className="mb-4 text-xl font-semibold">Recent Posts</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {recentPosts.map((post, idx) => {
            const slug = slugify(post.title + "-" + idx);
            return (
              <Link
                key={idx}
                to={`/blog/post/${encodeURIComponent(slug)}`}
                className="rounded-lg bg-white shadow transition hover:shadow-lg"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-32 w-full rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <div className="mb-2 text-sm font-semibold text-gray-800">
                    {post.title}
                  </div>
                  <div className="text-xs text-gray-500">{post.author}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Render nested route content here */}
      <div className="mx-auto max-w-7xl px-4">
        <Outlet />
      </div>
    </div>
  );
}
