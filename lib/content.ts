import blogData from './blogs.json'
import projectData from './projects.json'

export type BlogPost = (typeof blogData)[number]
export type Project = (typeof projectData)[number]

export const blogPosts = blogData
export const projects = projectData
