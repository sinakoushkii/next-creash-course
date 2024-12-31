import users from "../db";

export async function GET(request) {
    // You can access query parameters or headers from the request object
    return new Response(
      JSON.stringify(users),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  