export type Nav = {
  title: string;
  href: string;
  aos: { [key: string]: any };
};

export type Contact = {
  title: string;
  icon: string;
  href: string;
  aos: { [key: string]: any };
};

export type About = {
  title: any;
  description: string;
  icon: string;
  aos: { [key: string]: string };
};

export type Skills = {
  frontend: string[];
  backend: string[];
  tools: string[];
  others: string[];
};

export enum ProjectType {
  EXPERIMENTAL,
  REAL,
}

export enum ProjectPlatform {
  WEB,
  MOBILE,
  DESKTOP,
}

export type Project = {
  id: string;
  title: string;
  subTitle: string;
  shortDescription: string;
  description: React.ReactNode;
  thumbnailUrl: string | null;
  imageUrls: string[];
  projectUrl: string | null;
  sourceUrl: string | null;
  year: number;
  techs: string[];
  platforms: Set<ProjectPlatform>;
  type: ProjectType;
};
