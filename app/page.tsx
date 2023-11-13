import Home from "@/components/Home";

export const metadata = {
  title: "HomePage - Rogue Shop",
};

const getProducts = async () => {
  const res = await fetch(
    `${process.env.API_URL}/api/products`
    // ,
    // {
    //   next: {
    //     revalidate: 1,
    //   },
    // }
  );
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
