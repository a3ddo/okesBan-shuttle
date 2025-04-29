// // app/api/saveSurvey/route.ts
// import { NextResponse } from 'next/server';
// import { db } from '@/util/db';
// import { ServiceRequest } from '@/generated/prisma';

// /**
//  * POST: Save incoming survey data to MongoDB via Prisma
//  */
// export async function POST(req: Request) {
//     try {
//         const serviceData = await req.json() as ServiceRequest
//         // Create a new SurveyResponse record
//         const { owdepartureDateBus, busrentalType, busTripType, departureDateShuttle, ...others } = serviceData
//         const created = await db.serviceRequest.create({
//             data: {
//                 ...others,
//                 busrentalType: busrentalType ?? 'none',
//                 busTripType: busTripType ?? 'none',
//                 owdepartureDateBus: new Date(owdepartureDateBus ?? 0),
//                 timestamp: new Date(),
//                 departureDateShuttle: new Date(departureDateShuttle ?? 0)
//             },
//         });
//         return NextResponse.json({ message: 'Survey saved successfully', id: created.id });
//     } catch (error) {
//         console.error('Failed to save survey:', error);
//         return NextResponse.json({ error: 'Failed to save survey' }, { status: 500 });
//     }
// }

// /**
//  * GET: Retrieve all saved survey responses
//  */
// export async function GET() {
//     try {
//         const responses = await db.serviceRequest.findMany({
//             orderBy: { timestamp: 'desc' },
//         });
//         return NextResponse.json(responses);
//     } catch (error) {
//         console.error('Failed to fetch survey data:', error);
//         return NextResponse.json([], { status: 200 });
//     }
// }


// app/api/saveSurvey/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../db';
import ServiceRequest from '../../../../db/model/ServiceRequest';

/**
 * POST: Save incoming service request data to MongoDB via Mongoose
 */
export async function POST(req: Request) {
    try {
        // Ensure mongoose is connected
        await connectToDatabase();

        const serviceData = await req.json();

        const doc = new ServiceRequest(serviceData);
        const saved = await doc.save();

        return NextResponse.json({ message: 'Survey saved successfully', id: saved._id });
    } catch (error) {
        console.error('Failed to save survey:', error);
        return NextResponse.json({ error: 'Failed to save survey' }, { status: 500 });
    }
}

/**
 * GET: Retrieve all saved service requests
 */
export async function GET() {
    try {
        await connectToDatabase();
        // Fetch sorted by newest first
        const responses = await ServiceRequest.find().sort({ timestamp: -1 }).lean();

        return NextResponse.json(responses);
    } catch (error) {
        console.error('Failed to fetch survey data:', error);
        return NextResponse.json([], { status: 200 });
    }
}
