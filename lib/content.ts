import blogData from './blogs.json'
import projectData from './projects.json'

export type BlogSection = {
  heading: string
  body: string[]
}

export type EditorialContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption: string }

export type BlogPost = (typeof blogData)[number] & {
  sections?: BlogSection[]
  content?: EditorialContentBlock[]
}

export type ProjectContentBlock = EditorialContentBlock

export type ProjectLink = {
  label: string
  href: string
  external?: boolean
  icon?: 'github'
  placement?: 'top'
}

export type Project = (typeof projectData)[number] & {
  content?: ProjectContentBlock[]
  links?: ProjectLink[]
}

export const blogPosts = blogData as BlogPost[]
export const projects = projectData as Project[]
