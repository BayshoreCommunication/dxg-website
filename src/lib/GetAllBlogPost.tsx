interface GetAllBlogPostParams {
  page?: number;
  limit?: number;
}

export default async function GetAllBlogPost(
  params?: GetAllBlogPostParams
) {
  const url = new URL('https://backend-dxgwebsite.vercel.app/site/blog');
  
  // Only add pagination params if they are explicitly provided
  if (params?.page) {
    url.searchParams.append('page', params.page.toString());
  }
  if (params?.limit) {
    url.searchParams.append('limit', params.limit.toString());
  }

  const bloData = await fetch(url.toString(), {
    next: { revalidate: 200 },
    cache: 'no-store', // Disable caching for fresh data
  });
  return bloData.json();
}
