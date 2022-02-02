const API_BASED_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASED_URL}${queryString}`).then(r =>
    r.json()
  );
  return response;
}
