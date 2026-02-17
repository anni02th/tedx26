export const handler = async (event, context) => {
   // Debugging Tool for KonfHub API Integration
   const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
   };

   const API_KEY = "23751c8e-f8bf-47fa-b0d8-ce9fd5ce1204";
   const EVENT_SLUG = "tedxkkwieer";
   const EVENT_UUID = "fb8a0c98-b807-4e9e-a218-d60f84aa1564";

   const endpoints = [
      {
         name: "Public Slug Details (No Auth)",
         url: `https://api.konfhub.com/event/public/slug/${EVENT_SLUG}`,
         method: "GET",
         headers: {}
      },
      {
         name: "Private Attendee Search (Slug, Auth)",
         url: `https://api.konfhub.com/developers/event/${EVENT_SLUG}/attendees/private`,
         method: "GET",
         headers: { "x-api-key": API_KEY }
      },
      {
         name: "Private Attendee Search (UUID, Auth)",
         url: `https://api.konfhub.com/developers/event/${EVENT_UUID}/attendees/private`,
         method: "GET",
         headers: { "x-api-key": API_KEY }
      }
   ];

   const results = {};

   for (const ep of endpoints) {
      try {
         const res = await fetch(ep.url, { method: ep.method, headers: ep.headers });
         const text = await res.text();
         results[ep.name] = {
            status: res.status,
            ok: res.ok,
            body_preview: text.substring(0, 500) // Truncate
         };
      } catch (err) {
         results[ep.name] = { error: err.message };
      }
   }

   return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
         debug_info: "KonfHub API Connection Test",
         results
      }, null, 2)
   };
};
