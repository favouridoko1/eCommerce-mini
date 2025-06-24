import { bottle, group, group2, group3, group4 } from "@/assets";

type Category = {
  title: string;
  icon: typeof group | typeof group2 | typeof group3 | typeof group4;
  selected: boolean;
};

const categories: Category[] = [
  {
    title: "Essential oils",
    icon: group,
    selected: false,
  },
  {
    title: "Natural cosmetics",
    icon: group2,
    selected: false,
  },
  {
    title: "Diffusers",
    icon: group3,
    selected: true,
  },
  {
    title: "Aromatherapy",
    icon: group4,
    selected: false,
  },
];

export {categories}