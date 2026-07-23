import { NextResponse } from "next/server";
import { dtp } from "@/lib/dtp";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { genes } = body;

    // Basic placeholder check/response
    return NextResponse.json({
      status: "success",
      message: "API route active",
      receivedGenes: genes || [],
    });
  } catch (error) {
    console.error("Error in analyse route:", error);
    return NextResponse.json(
      { error: "An error occurred during processing." },
      { status: 500 }
    );
  }
}