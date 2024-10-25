import axios, { AxiosError } from "axios";

const apiKey = process.env.TMDB_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const list = searchParams.get("list") || "";

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TMDB_API_URL}/genre/${list}/list?language=en`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );
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
