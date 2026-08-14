export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export const blogAuthors: Record<string, BlogAuthor> = {
  Neal: {
    name: "Neal",
    role: "Founder",
    avatar: "/images/authors/neal.png",
  },

  Lyra: {
    name: "Lyra",
    role: "Research Editor",
    avatar: "/images/authors/lyra.png",
  },

  Danielle: {
    name: "Danielle",
    role: "Lifestyle Editor",
    avatar: "/images/authors/danielle.png",
  },
};

export function getAuthorByName(name: string) {
  return blogAuthors[name];
}