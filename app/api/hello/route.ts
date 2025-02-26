export async function GET() {
    return new Response(JSON.stringify({ message : "Hello from a next js route handler" }), {
        status: 300,
    })
}

export async function POST(){
    return  new Response("Thank you for posting this handler", {
        status: 200,
    });
}