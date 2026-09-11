import { safeStorage } from "./safeStorage";

export interface Project {
  id: number | string;
  title: string;
  category: "Reels" | "Talking Head" | "Saas Animation" | "Motion Graphics" | "Documentary" | string;
  description: string;
  image: string;
  youtubeUrl: string;
  duration?: string;
  featured?: boolean;
}

export interface ClientReview {
  id: number | string;
  client: string;
  role: string;
  content: string;
  thumbnail: string;
  youtubeUrl: string;
  rating?: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  ventureNature: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface ProfileSettings {
  name: string;
  title: string;
  tagline: string;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  yearsExperience: string;
  projectsCompleted: string;
  happyClients: string;
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: "",
    category: "Talking Head",
    description: "Cinematic Realstate video for a high-end WEC.",
    image: "https://i.postimg.cc/CLhKLMLm/video-captu.png",
    youtubeUrl: "https://www.youtube.com/embed/tFaPpVxLb0w?si=Bdk3z6H8LopAqecb",
    duration: "2:15",
    featured: true
  },
  {
    id: 2,
    title: "Viral Algorithm Hack",
    category: "Reels",
    description: "Joseph's viral algorithm hack for Instagram Reels.",
    image: "https://i.postimg.cc/1nx39qdm/Screenshot-2026-09-08-003330.png",
    youtubeUrl: "https://www.youtube.com/embed/g_z6Jui_uQc",
    duration: "0:50",
    featured: true
  },
  {
    id: 3,
    title: "Google lances reake",
    category: "Saas Animation",
    description: "Clean tech review for a major influencer.",
    image: "https://i.postimg.cc/ydSwHbGG/2v-WH764AUE8-HD.jpg",
    youtubeUrl: "https://www.youtube.com/embed/2vWH764AUE8?rel=0",
    duration: "1:30",
    featured: true
  },
  {
    id: 4,
    title: "Bangladesh Growth video",
    category: "Motion Graphics",
    description: "Dynamic intro animation for a Reneta LTD.",
    image: "https://i.postimg.cc/L6m0C5mD/dc-TUgs-XTc-QI-HD.jpg",
    youtubeUrl: "https://www.youtube.com/embed/dcTUgsXTcQI?rel=0",
    duration: "1:15",
    featured: true
  },
  {
    id: 5,
    title: "Here's My Advice for Video Editing in 2026",
    category: "Reels",
    description: "Personal Brand",
    image: "https://i.postimg.cc/MpbHWcyZ/video-capture-t0001-11seg-2351.png",
    youtubeUrl: "https://www.youtube.com/embed/xxXjrW2XAb8",
    duration: "0:45",
    featured: true
  },
  {
    id: 6,
    title: "Cyberpunk Glitch Edit",
    category: "Motion Graphics",
    description: "Complex glitch effects and futuristic typography.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=BvXGPhE-Tto",
    duration: "0:30",
    featured: true
  },
  {
    id: 7,
    title: "Most people think editing is just cutting clips",
    category: "Reels",
    description: "Personal Brand",
    image: "https://i.postimg.cc/HxL2gcPt/video-capture-t0008-54seg-9456.png",
    youtubeUrl: "https://www.youtube.com/embed/k1l8jvG0Shk",
    duration: "0:40",
    featured: true
  },
  {
    id: 8,
    title: "Health & Food",
    category: "Reels",
    description: "IG Reels",
    image: "https://i.postimg.cc/SR67L6XS/video-capture-t0042-74seg-2887.png",
    youtubeUrl: "https://www.youtube.com/embed/-fYjUvpZBrg",
    duration: "0:35",
    featured: true
  },
  {
    id: 9,
    title: "Stock Market",
    category: "Talking Head",
    description: "",
    image: "https://i.postimg.cc/CLh1fT25/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/WehL5lxNm7M?si=LIG2NfRk82-ZHnT4",
    duration: "1:00",
    featured: true
  },
  {
    id: 10,
    title: "Stock Market Talks",
    category: "Talking Head",
    description: "",
    image: "https://i.postimg.cc/rFVmtXPb/maxresdefault-(1).jpg",
    youtubeUrl: "https://www.youtube.com/embed/9S9R5gchodI?si=AHe55w-kg9r4iS5Z",
    duration: "1:20",
    featured: true
  },
  {
    id: 11,
    title: "Documentary: The Artisan",
    category: "Documentary",
    description: "Story highlighting the craftsmanship of a luthier.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=BvXGPhE-Tto",
    duration: "5:20",
    featured: false
  }
];

const DEFAULT_REVIEWS: ClientReview[] = [
  {
    id: 1,
    client: "cozy",
    role: "Head Chef",
    content: "Review video of an Italian restaurant Head Chef.",
    thumbnail: "https://i.postimg.cc/t4mYjS24/video-capture-t0006-51seg-3115.png",
    youtubeUrl: "https://www.youtube.com/embed/1YlvpCCTWls?rel=0",
    rating: 5
  },
  {
    id: 2,
    client: "Marcus Chen",
    role: "Content Creator",
    content: "My retention rates skyrocketed after we started working on my Reels. Fast, reliable, and incredibly creative.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    rating: 5
  },
  {
    id: 3,
    client: "Elena Rodriguez",
    role: "Marketing Director",
    content: "A master of storytelling. Our Talking Head looked like a high-budget Hollywood production. Incredible work!",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=F3SpxOLeq0U",
    rating: 5
  },
  {
    id: 4,
    client: "David Wilson",
    role: "Founder, Peak Performance",
    content: "The level of professionalism and artistic direction is unmatched. Our brand engagement has doubled since we updated our content.",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    rating: 5
  }
];

const DEFAULT_MESSAGES: ContactMessage[] = [
  {
    id: "msg_1",
    name: "Alex Vance",
    email: "alex@vancemedia.co",
    ventureNature: "Talking Head Masterpiece",
    message: "Hey Rehman! We are launching a new tech gadget and need a 60-second high energy Talking Head ad. Loved your podcast hook edits!",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    read: false
  }
];

const DEFAULT_SETTINGS: ProfileSettings = {
  name: "Ariyan Shihab",
  title: "Video Editor & Motion Designer",
  tagline: "Turn Raw Footage into High-Impact Visual Stories",
  email: "ariyanshihab.edit@gmail.com",
  whatsapp: "+8801315067707",
  instagram: "https://www.instagram.com/ariyanshihabeditz/",
  facebook: "https://www.facebook.com/ariyanshihabeditz",
  linkedin: "https://linkedin.com/in/ariyanshihabeditz",
  yearsExperience: "2+",
  projectsCompleted: "183+",
  happyClients: "47+"
};

const STORAGE_KEYS = {
  PROJECTS: "rh_portfolio_projects_v1",
  REVIEWS: "rh_portfolio_reviews_v1",
  MESSAGES: "rh_portfolio_messages_v1",
  SETTINGS: "rh_portfolio_settings_v1",
  ADMIN_PASS: "rh_portfolio_admin_pass_v1",
};

const notifyUpdate = () => {
  try {
    window.dispatchEvent(new Event("rh_data_updated"));
  } catch {
    // no-op if window/events unavailable
  }
};

export const dataStore = {
  // Projects
  getProjects(): Project[] {
    try {
      const saved = safeStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
    } catch {
      return DEFAULT_PROJECTS;
    }
  },
  saveProject(project: Partial<Project> & { id?: number | string }): Project[] {
    const projects = this.getProjects();
    if (project.id) {
      const idx = projects.findIndex(p => p.id === project.id);
      if (idx !== -1) {
        projects[idx] = { ...projects[idx], ...project };
      } else {
        projects.unshift(project as Project);
      }
    } else {
      const newProj: Project = {
        id: Date.now(),
        title: project.title || "Untitled Project",
        category: project.category || "Reels",
        description: project.description || "",
        image: project.image || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
        youtubeUrl: project.youtubeUrl || "",
        duration: project.duration || "0:30",
        featured: project.featured ?? true
      };
      projects.unshift(newProj);
    }
    safeStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    notifyUpdate();
    return projects;
  },
  deleteProject(id: number | string): Project[] {
    const projects = this.getProjects().filter(p => p.id !== id);
    safeStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    notifyUpdate();
    return projects;
  },

  // Reviews
  getReviews(): ClientReview[] {
    try {
      const saved = safeStorage.getItem(STORAGE_KEYS.REVIEWS);
      return saved ? JSON.parse(saved) : DEFAULT_REVIEWS;
    } catch {
      return DEFAULT_REVIEWS;
    }
  },
  saveReview(review: Partial<ClientReview> & { id?: number | string }): ClientReview[] {
    const reviews = this.getReviews();
    if (review.id) {
      const idx = reviews.findIndex(r => r.id === review.id);
      if (idx !== -1) {
        reviews[idx] = { ...reviews[idx], ...review };
      } else {
        reviews.unshift(review as ClientReview);
      }
    } else {
      const newRev: ClientReview = {
        id: Date.now(),
        client: review.client || "Client",
        role: review.role || "Client",
        content: review.content || "",
        thumbnail: review.thumbnail || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        youtubeUrl: review.youtubeUrl || "",
        rating: review.rating || 5
      };
      reviews.unshift(newRev);
    }
    safeStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    notifyUpdate();
    return reviews;
  },
  deleteReview(id: number | string): ClientReview[] {
    const reviews = this.getReviews().filter(r => r.id !== id);
    safeStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    notifyUpdate();
    return reviews;
  },

  // Messages
  getMessages(): ContactMessage[] {
    try {
      const saved = safeStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : DEFAULT_MESSAGES;
    } catch {
      return DEFAULT_MESSAGES;
    }
  },
  addMessage(msg: { name: string; email: string; ventureNature: string; message: string }): ContactMessage {
    const messages = this.getMessages();
    const newMsg: ContactMessage = {
      id: `msg_${Date.now()}`,
      ...msg,
      createdAt: new Date().toISOString(),
      read: false
    };
    messages.unshift(newMsg);
    safeStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    notifyUpdate();
    return newMsg;
  },
  markMessageRead(id: string): ContactMessage[] {
    const messages = this.getMessages().map(m => m.id === id ? { ...m, read: true } : m);
    safeStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    notifyUpdate();
    return messages;
  },
  deleteMessage(id: string): ContactMessage[] {
    const messages = this.getMessages().filter(m => m.id !== id);
    safeStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    notifyUpdate();
    return messages;
  },

  // Settings
  getSettings(): ProfileSettings {
    try {
      const saved = safeStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },
  saveSettings(settings: Partial<ProfileSettings>): ProfileSettings {
    const current = this.getSettings();
    const updated = { ...current, ...settings };
    safeStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    notifyUpdate();
    return updated;
  },

  // Password
  getAdminPassword(): string {
    return safeStorage.getItem(STORAGE_KEYS.ADMIN_PASS) || "shehabmia00";
  },
  setAdminPassword(pass: string): void {
    safeStorage.setItem(STORAGE_KEYS.ADMIN_PASS, pass);
  },

  // Reset
  resetAllToDefault(): void {
    safeStorage.removeItem(STORAGE_KEYS.PROJECTS);
    safeStorage.removeItem(STORAGE_KEYS.REVIEWS);
    safeStorage.removeItem(STORAGE_KEYS.MESSAGES);
    safeStorage.removeItem(STORAGE_KEYS.SETTINGS);
    safeStorage.removeItem(STORAGE_KEYS.ADMIN_PASS);
    notifyUpdate();
  }
};
