export interface Project {
  id: string;
  title: string;
  description: string;
  roles: string[];
  responsibilities: string[];
  /** Primary still image (optional) */
  images: string[];
  /** Background showcase video */
  video: string | null;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "divine-journey",
    title: "Divine Journey",
    description:
      "Large-scale Roblox experience featuring advanced combat systems, scalable backend architecture, custom UI systems, polished gameplay mechanics, progression systems, and extensive project management.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "All Scripting",
      "Backend Development",
      "Frontend Development",
      "Combat Systems",
      "Gameplay Systems",
      "Data Persistence",
      "UI Systems",
      "Optimization",
      "System Architecture",
      "Some Modeling",
      "Basic Animations",
    ],
    images: ["/assets/222.png", "/assets/222131.png", "/assets/3332.png"],
    video: "/assets/Divine Journey.mp4",
    tags: ["Luau", "Backend", "Combat Systems", "UI Systems", "Architecture"],
  },
  {
    id: "clover-incremental",
    title: "Clover Incremental",
    description:
      "Incremental Roblox experience focused on scalable progression systems, responsive interfaces, optimized backend architecture, and engaging long-term gameplay loops.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "All Scripting",
      "Backend Development",
      "Frontend Development",
      "Progression Systems",
      "Optimization",
      "Data Persistence",
      "UI Systems",
    ],
    images: [],
    video: "/assets/Clover Incremental.mp4",
    tags: ["Luau", "Progression", "Backend", "Data Systems"],
  },
  {
    id: "random-fish-game",
    title: "Random Fish Game",
    description:
      "Casual Roblox experience featuring custom gameplay systems, polished interactions, progression mechanics, and optimized scripting architecture.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "Gameplay Systems",
      "Backend Systems",
      "Optimization",
    ],
    images: [],
    video: "/assets/Fish game.mp4",
    tags: ["Luau", "Gameplay", "Backend", "Optimization"],
  },
  {
    id: "jetpack-clicker",
    title: "Jetpack Clicker",
    description:
      "Fast-paced Roblox clicker experience featuring custom jetpack mechanics, progression systems, scalable backend architecture, and polished gameplay systems.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "Jetpack Systems",
      "Upgrade Systems",
      "Backend Development",
      "Frontend Development",
      "Data Persistence",
      "UI Systems",
      "Optimization",
    ],
    images: [],
    video: "/assets/Jetpack Clicker.mp4",
    tags: ["Luau", "Jetpack", "Clicker", "Backend"],
  },
];
