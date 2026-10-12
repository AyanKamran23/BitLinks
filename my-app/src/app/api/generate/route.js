import clientPromise from "@/app/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json()
        const client = await clientPromise;
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        // check if short url exist
        const doc = await collection.findOne({ shorturl: body.shorturl })
        if (doc) {
            return Response.json({ success: false, error: true, message: 'URL is already exists' }, { status: 400 })
        }


        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })

        return Response.json({ success: true, error: false, message: 'URL Generated Successfully' }, { status: 200 })
    } catch (error) {
        console.error("API Error:", error);
        return Response.json({ success: false, error: true, message: 'URL is already exists' }, { status: 500 })


    }
}