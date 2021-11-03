export const getBlogs = async () => {
  const res = await fetch('https://dev.to/api/articles?username=luisfosg')
  return await res.json()
}
