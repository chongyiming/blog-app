import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");


  const blogs = await BlogModel.find({ "author":email });
  return NextResponse.json(blogs);
  
}
