export interface Skill {
  name: string;
  category: "Language" | "Framework" | "Development" | "Systems" | "Design" | "Leadership" | "Performance" | "Architecture";
}

export const skills: Skill[] = [
  { name: "Roblox Lua / Luau",    category: "Language"      },
  { name: "TypeScript (rbxts)",   category: "Language"      },
  { name: "Flamework",            category: "Framework"     },
  { name: "React (rbxts/react)",  category: "Framework"     },
  { name: "Backend Development",  category: "Development"   },
  { name: "Frontend Development", category: "Development"   },
  { name: "Combat Systems",       category: "Systems"       },
  { name: "Data Persistence",     category: "Systems"       },
  { name: "UI Development",       category: "Design"        },
  { name: "Optimization",         category: "Performance"   },
  { name: "System Architecture",  category: "Architecture"  },
  { name: "Gameplay Programming", category: "Development"   },
  { name: "Project Management",   category: "Leadership"    },
  { name: "Team Leadership",      category: "Leadership"    },
  { name: "Basic Animation Work", category: "Design"        },
  { name: "Basic Modeling",       category: "Design"        },
];

export const categoryColors: Record<string, string> = {
  Language:     "#f0c040",
  Framework:    "#a78bfa",
  Development:  "#34d399",
  Systems:      "#f87171",
  Design:       "#fb923c",
  Performance:  "#22d3ee",
  Architecture: "#818cf8",
  Leadership:   "#e879f9",
};

export const aboutStats = [
  { label: "Backend Systems"   },
  { label: "Frontend UI"       },
  { label: "Combat Systems"    },
  { label: "Optimization"      },
  { label: "Data Persistence"  },
  { label: "Gameplay Systems"  },
  { label: "Project Mgmt"      },
  { label: "Architecture"      },
  { label: "UI Systems"        },
  { label: "Leadership"        },
];
