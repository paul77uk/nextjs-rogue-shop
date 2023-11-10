import dbConnect from "@/backend/config/dbConnect";
import { allProducts } from "@/backend/controllers/productControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allProducts);

export async function GET(req: NextRequest, ctx: RequestContext) {
  return router.run(req, ctx);
}