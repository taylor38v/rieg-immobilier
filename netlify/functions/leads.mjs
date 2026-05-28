// Netlify Function — proxy vers l'API Netlify Forms.
// Sert le dashboard admin (/admin/leads.html) avec authentification par mot de passe partagé.
//
// Variables d'env requises (configurer dans Netlify dashboard) :
//   - NETLIFY_API_TOKEN : Personal Access Token (User settings > Applications > Personal access tokens)
//   - ADMIN_PASSWORD    : mot de passe partagé pour le dashboard
//   - NETLIFY_SITE_ID   : injecté automatiquement par Netlify

export default async (request, context) => {
  // 1. Auth simple par mot de passe partagé (header X-Admin-Password)
  const provided = request.headers.get("x-admin-password") || "";
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) {
    return new Response(JSON.stringify({ error: "ADMIN_PASSWORD non configuré côté serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (provided !== expected) {
    return new Response(JSON.stringify({ error: "Mot de passe incorrect" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2. Récupérer le PAT et l'ID du site
  const token = process.env.NETLIFY_API_TOKEN;
  const siteId = process.env.NETLIFY_SITE_ID || context.site?.id;

  if (!token) {
    return new Response(JSON.stringify({ error: "NETLIFY_API_TOKEN manquant côté env" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 3. Parser les paramètres de query
  const url = new URL(request.url);
  const formId = url.searchParams.get("form_id");
  const state = url.searchParams.get("state") || "";
  const perPage = url.searchParams.get("per_page") || "100";

  // 4. Construire l'URL de l'API Netlify
  const params = new URLSearchParams({ per_page: perPage });
  if (state) params.set("state", state);

  const endpoint = formId
    ? `https://api.netlify.com/api/v1/forms/${formId}/submissions?${params}`
    : `https://api.netlify.com/api/v1/sites/${siteId}/submissions?${params}`;

  try {
    const res = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ error: `Netlify API ${res.status}`, detail: text }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const submissions = await res.json();
    return new Response(JSON.stringify({ count: submissions.length, submissions }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Fetch error", detail: String(e) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/leads",
};
