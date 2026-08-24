const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    const requestUrl = new URL(req.url);

    const searchQuery = requestUrl.searchParams.get("q");
    const id = requestUrl.searchParams.get("id");

    let targetUrl: URL;

    // =========================
    // Alooy Details
    // ?id=48949
    // =========================

    if (id) {
      targetUrl = new URL(
        "https://api.dfkz.site/alooy/series.php",
      );

      targetUrl.searchParams.set("id", id);
    }

    // =========================
    // Alooy Search
    // ?q=المداح
    // =========================

    else {
      targetUrl = new URL(
        "https://api.dfkz.site/alooy/",
      );

      if (searchQuery) {
        targetUrl.searchParams.set("q", searchQuery);
      }
    }

    const response = await fetch(targetUrl.toString());

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          status: response.status,
          message: "Alooy API request failed",
        }),
        {
          status: 502,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        },
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Alooy proxy error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch Alooy API",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      },
    );
  }
});