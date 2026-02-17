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
   const EVENT_ID = "tedxkkwieer"; // Assuming slug is the ID based on widget URL
   const BASE_URL = `https://api.konfhub.com/developers/event/${EVENT_ID}/attendees/private`;

   let searchParam = "";
   if (email) searchParam = `check_in_by_email=${encodeURIComponent(email)}`;
   else if (phone) searchParam = `check_in_by_phone=${encodeURIComponent(phone)}`;

   const url = `${BASE_URL}?${searchParam}`;

   try {
      const response = await fetch(url, {
         headers: {
            "x-api-key": API_KEY,
            "bg_color": "#000000" // Sometimes required/optional
         }
      });

      if (!response.ok) {
         console.error("KonfHub API Error:", response.status, response.statusText);
         return {
            statusCode: response.status,
            body: JSON.stringify({ error: "Failed to fetch ticket details or attendee not found." })
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
