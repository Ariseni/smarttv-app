import axios, { AxiosError } from "axios";

const apiKey = process.env.TMDB_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url") || "";
  const page = searchParams.get("page") || "";
  const with_genres = searchParams.get("with_genres");
  const query = searchParams.get("query");
  const paramsBuilder: { [key: string]: string | null } = {
    page,
    with_genres,
  };

  if (query && query.length > 0) {
    paramsBuilder.query = query;
  }

  try {
    const response = await axios.get(url, {
      params: paramsBuilder,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    return new Response(
      JSON.stringify({
        message: "Failed to fetch genres",
        error: axiosError.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
