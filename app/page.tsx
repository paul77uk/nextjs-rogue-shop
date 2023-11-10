import Home from "@/components/Home";

export const dynamic = "force-dynamic"

const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products`);
  return res.json();
};

export default async function HomePage() {
  const data = await getProducts();

  return (
    <>
      <Home data={data} />
    </>
  );
}
