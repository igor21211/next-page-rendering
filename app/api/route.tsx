export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  return new Response(`Hello, ${name}!`);
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  return new Response("Hello, world!");
}

export async function PUT(request: Request) {
  const data = await request.json();
  console.log(data);
  return new Response("Hello, world!");
}
