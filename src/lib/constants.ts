export interface Project {
  name: string;
  slug: string;
}

export type Nullable<T> = T | null;

export const projects: Nullable<Project>[] = [
  null,
  {
    name: "Meower",
    slug: "meower",
  },
  {
    name: "MeowerBot.py",
    slug: "meower",
  },
  {
    name: "CodeBot - Meower",
    slug: "meower",
  },
  {
    name: "Revower - Meower",
    slug: "meower",
  },
  {
    name: "Pickaxe Mod",
    slug: "pickaxemod",
  },
];
