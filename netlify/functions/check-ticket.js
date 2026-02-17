export const handler = async (event, context) => {
   // Only allow POST
   if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
   }

   const { email, phone } = JSON.parse(event.body);

   if (!email && !phone) {
      return { statusCode: 400, body: JSON.stringify({ error: "Email or Phone is required" }) };
   }

   // API Configuration
   const API_KEY = "23751c8e-f8bf-47fa-b0d8-ce9fd5ce1204";
   const EVENT_ID = "fb8a0c98-b807-4e9e-a218-d60f84aa1564"; // UUID from KonfHub Page Source
   const BASE_URL = `https://api.konfhub.com/developers/event/${EVENT_ID}/attendees/private`;

   let searchParam = "";
   if (email) searchParam = `check_in_by_email=${encodeURIComponent(email)}`;
   else if (phone) searchParam = `check_in_by_phone=${encodeURIComponent(phone)}`;

   const url = `${BASE_URL}?${searchParam}`;

   try {
      const response = await fetch(url, {
         method: "GET", // Explicitly GET
         headers: {
            "x-api-key": API_KEY, // Primary method
            "Authorization": API_KEY, // Fallback method
            "bg_color": "#000000",
            "Content-Type": "application/json",
            "User-Agent": "Netlify-Function/1.0"
         }
      });

      if (!response.ok) {
         const errorText = await response.text();
         console.error("KonfHub API Error:", response.status, errorText);
         return {
            statusCode: response.status,
            body: JSON.stringify({ error: "KonfHub API Error", details: errorText })
         };
      }

      const data = await response.json();

      return {
         statusCode: 200,
         body: JSON.stringify(data)
      };

   } catch (error) {
      console.error("Function Error:", error);
      return {
         statusCode: 500,
         body: JSON.stringify({ error: "Internal Server Error" })
      };
   }
};
