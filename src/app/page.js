import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  const data = [
    {
      title: "Best of the day",
      category: "Shots featured",
    },
    {
      title: "Featured streams",
      category: "Watch livestreams",
    },
    {
      title: "Subscriptions",
      category: "Premium content",
    },
    {
      title: "Creative feed",
      category: "Premium feed",
    },
  ];
  return (
    <main>
      <ThemeToggle />
      <ul className="bg-white p-4 rounded-2xl dark:bg-gray-900 shadow-2xl">
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </ul>
    </main>
  );
}

function Card({ title, category }) {
  return (
    <li className="group .max-w-[400px] w-[400px] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl">
      <a className="flex items-center gap-4 p-4" href="#0">
        <div className="aspect-square w-10 rounded-md bg-[#cbd5e1]"></div>
        <div>
          <p className="font-bold dark:text-white">{title}</p>
          <small className="dark:text-white">{category}</small>
        </div>
        <svg className="hidden ml-auto text-purple-600 dark:text-purple-400 group-hover:block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"></path>
        </svg>
      </a>
    </li>
  );
}
