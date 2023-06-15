import type {PageLoad} from "./$types";

export const prerender = true
export const csr = true  // this will not work if set to false in development mode
export const ssr = true

export const load: PageLoad = async ({fetch, depends}) => {
  const response = await fetch('https://dummyjson.com/posts'),
    {posts} = await response.json()

  const random = Math.round(Math.random() * 15)
  const postsSlice = posts.slice(0, random)

  depends("app:posts")

  return {posts: postsSlice}
}
