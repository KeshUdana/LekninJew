import { groq } from "next-sanity";

export const collectionsQuery = groq`*[_type == "collection"] | order(_createdAt desc){
  title,
  "slug": slug.current,
  description,
  heroImage
}`;

export const gemstonesQuery = groq`*[_type == "gemstone"] | order(name asc){
  name,
  "slug": slug.current,
  color,
  description,
  image
}`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc){
  title,
  "slug": slug.current,
  excerpt,
  publishedAt
}`;
