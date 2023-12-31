import z, { string } from "zod";

import AdvancedIcon from "./assets/images/icon-advanced.svg?react";
import ArcadeIcon from "./assets/images/icon-arcade.svg?react";
import ProIcon from "./assets/images/icon-pro.svg?react";

export const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email(),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  plan: z.string().min(1, "Please select a plan"),
  duration: z.enum(["monthly", "yearly"]),
  addons: z.array(string()),
});

export type Inputs = z.infer<typeof schema>;

export const defaultValues: Inputs = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  duration: "monthly",
  addons: [],
};

export const addons = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  { title: "Larger storage", description: "Extra 1TB of cloud save", price: 2 },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

export const plans = [
  { name: "Arcade", icon: <ArcadeIcon />, price: 9 },
  { name: "Advanced", icon: <AdvancedIcon />, price: 12 },
  { name: "Pro", icon: <ProIcon />, price: 15 },
];

export const steps = [
  {
    id: "STEP 1",
    name: "personalInfo",
    title: "YOUR INFO",
    fields: ["name", "email", "phone"],
  },
  {
    id: "STEP 2",
    name: "plan",
    title: "SELECT PLAN",
    fields: ["plan", "duration"],
  },
  { id: "STEP 3", name: "addons", title: "ADD-ONS", fields: ["addons"] },
  { id: "STEP 4", name: "review", title: "SUMMARY", fields: [] },
];
