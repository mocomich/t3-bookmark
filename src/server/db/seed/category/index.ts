const sketchyGenres = ["フロントエンド", "バックエンド", "インフラ"];

const languages = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "Java",
  "Ruby",
  "Go",
  "Swift",
  "Python",
  "Kotlin",
];

const frameworks = [
  "React",
  "Vue",
  "Solid",
  "Laravel",
  "Rails",
  "Next.js",
  "Nuxt.js",
  "Remix",
];

const categories = [...sketchyGenres, ...languages, ...frameworks].map(
  (genre) => ({
    name: genre,
  })
);

export { categories };
