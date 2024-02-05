export default async function GetAllBlogPost() {
  const bloData = await fetch(
    'https://backend-dxgwebsite.vercel.app/site/blog',
    {
      next: { revalidate: 200 },
    }
  );
  return bloData.json();
}
