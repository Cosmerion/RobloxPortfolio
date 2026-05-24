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
      "Large-scale Roblox experience featuring advanced combat systems, scalable backend architecture, custom UI systems, polished gameplay mechanics, and progression systems. All scripting, UI design, assets, and building were done entirely by PleaseRestore.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "All Scripting",
      "Backend Development",
      "Frontend Development",
      "Combat Systems",
      "Gameplay Systems",
      "Data Persistence",
      "All UI Design & Systems",
      "All Assets & Building",
      "Optimization",
      "System Architecture",
      "Modeling & Animations",
    ],
    images: ["/assets/222.png", "/assets/222131.png", "/assets/3332.png"],
    video: "/assets/Divine Journey.mp4",
    tags: ["Roblox TypeScript", "Backend", "Combat Systems", "UI Systems", "Architecture"],
  },
  {
    id: "clover-incremental",
    title: "Clover Incremental",
    description:
      "Incremental Roblox experience focused on scalable progression systems, responsive interfaces, and optimized backend architecture. All scripting, UI design, assets, and building were done entirely by PleaseRestore.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "All Scripting",
      "Backend Development",
      "Frontend Development",
      "Progression Systems",
      "Optimization",
      "Data Persistence",
      "All UI Design & Systems",
      "All Assets & Building",
    ],
    images: [],
    video: "/assets/Clover Incremental.mp4",
    tags: ["Roblox TypeScript", "Progression", "Backend", "Data Systems"],
  },
  {
    id: "random-fish-game",
    title: "Random Fish Game",
    description:
      "Casual Roblox experience featuring custom gameplay systems, polished interactions, and optimized scripting architecture. All scripting, UI design, assets, and building were done entirely by PleaseRestore.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "All Scripting",
      "Gameplay Systems",
      "Backend Systems",
      "All UI Design & Systems",
      "All Assets & Building",
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
      "Fast-paced Roblox clicker experience featuring custom jetpack mechanics, progression systems, and scalable backend architecture. All scripting, UI design, assets, and building were done entirely by PleaseRestore.",
    roles: ["Owner", "Project Manager", "Sole Programmer"],
    responsibilities: [
      "All Scripting",
      "Jetpack Systems",
      "Upgrade Systems",
      "Backend Development",
      "Frontend Development",
      "Data Persistence",
      "All UI Design & Systems",
      "All Assets & Building",
      "Optimization",
    ],
    images: [],
    video: "/assets/Jetpack Clicker.mp4",
    tags: ["Luau", "Jetpack", "Clicker", "Backend"],
  },
];
