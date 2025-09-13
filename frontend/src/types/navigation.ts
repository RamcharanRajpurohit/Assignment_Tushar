export interface NavigationSubItem {
  title: string;
  href: string;
}

export interface NavigationItem {
  id: string;
  title: string;
  items: NavigationSubItem[];
}

export interface StandaloneLink {
  title: string;
  href: string;
}