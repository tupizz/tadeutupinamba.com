export interface APIResponse {
  basics: Basics;
  skills?: SkillsEntity[] | null;
  projects?: ProjectsEntity[] | null;
  work?: WorkEntity[] | null;
  publications?: null[] | null;
  education?: EducationEntity[] | null;
  volunteer?: null[] | null;
  awards?: null[] | null;
  languages?: null[] | null;
  interests?: null[] | null;
  references?: null[] | null;
}
export interface Basics {
  name: string;
  picture: string;
  label: string;
  headline: string;
  summary: string;
  website: string;
  blog?: null;
  yearsOfExperience: number;
  id: string;
  username: string;
  karma: number;
  email: string;
  region: string;
  location: LocationOrEnd;
  phone: string;
  followers: number;
  following: number;
  profiles?: ProfilesEntity[] | null;
}
export interface LocationOrEnd {}
export interface ProfilesEntity {
  network: string;
  username: string;
  url: string;
}
export interface SkillsEntity {
  name: string;
  level: string;
  rating: number;
  yearsOfExperience: number;
  keywords?: null[] | null;
}
export interface ProjectsEntity {
  name: string;
  displayName: string;
  summary: string;
  website: string;
  githubUrl: string;
  primaryLanguage: string;
  languages?: string[] | null;
  libraries?: null[] | null;
  images?: null[] | null;
  videos?: null[] | null;
}
export interface WorkEntity {
  company: string;
  position: string;
  website: string;
  location: string;
  summary: string;
  isCurrentRole: boolean;
  startDate: string;
  endDate: string;
  start: StartOrEnd;
  end: End;
  highlights?: null[] | null;
}
export interface StartOrEnd {
  year: number;
  month: number;
}
export interface End {
  year?: number | null;
  month?: number | null;
}
export interface EducationEntity {
  institution: string;
  area: string;
  studyType: string;
  website: string;
  startDate: string;
  endDate: string;
  start: StartOrEnd;
  end: StartOrEnd;
  description: string;
  activities: string;
  gpa: string;
  courses?: null[] | null;
}
