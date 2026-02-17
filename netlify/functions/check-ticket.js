export const handler = async (event, context) => {
   // Standard CORS headers
   const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
   };

   // Only allow POST
   if (event.httpMethod !== "POST") {
      return { statusCode: 405, headers, body: "Method Not Allowed" };
   }

   const { email } = JSON.parse(event.body);

   if (!email) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Email is required" }) };
   }

   // Mock for testing UI (Remove in production)
   if (email === "test@tedx.com") {
      return {
         statusCode: 200,
         headers,
         body: JSON.stringify({
            attendee_name: "Test User",
            ticket_name: "VIP Access",
            booking_id: "TEDX-TEST-123",
            status: "Confirmed",
            qr_code: "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=TEDX-TEST-123"
         })
      };
   }

   // Configuration
   const API_KEY = "23751c8e-f8bf-47fa-b0d8-ce9fd5ce1204";
   const EVENT_UUID = "fb8a0c98-b807-4e9e-a218-d60f84aa1564";
   // Trying the Organizer Search Endpoint
   const BASE_URL = `https://api.konfhub.com/event/attendees/search`;

   // Construct URL with query params
   const url = `${BASE_URL}?event_id=${EVENT_UUID}&search_query=${encodeURIComponent(email)}`;

   try {
      const response = await fetch(url, {
         method: "GET",
         headers: {
            "x-api-key": API_KEY,
            "Content-Type": "application/json"
         }
      });

      if (!response.ok) {
         const errorText = await response.text();
         console.error("KonfHub API Error:", response.status, errorText);

         // Helpful error message for frontend
         let errorMsg = "Ticket not found or System Error";
         if (response.status === 403 || response.status === 401) {
            errorMsg = "Authentication failed. Please verify API Key permissions.";
         } else if (response.status === 404) {
            errorMsg = "No ticket found for this email.";
         }

         return {
            statusCode: response.status,
            headers,
            body: JSON.stringify({ error: errorMsg, details: errorText })
         };
      }

      const data = await response.json();

      // Normalize data (KonfHub search returns array 'data' or 'attendees')
      let ticket = null;
      if (Array.isArray(data)) ticket = data[0];
      else if (data.data && Array.isArray(data.data)) ticket = data.data[0];
      else if (data.attendees && Array.isArray(data.attendees)) ticket = data.attendees[0];
      else ticket = data;

      if (!ticket) {
         return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: "No ticket found for this email." })
         };
      }

      return {
         statusCode: 200,
         headers,
         body: JSON.stringify(ticket)
      };

   } catch (error) {
      console.error("Function/Network Error:", error);
      return {
         statusCode: 500,
         headers,
         body: JSON.stringify({ error: "Internal Server Error", details: error.message })
      };
   }
};
