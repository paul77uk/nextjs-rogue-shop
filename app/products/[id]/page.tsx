import ProductDetails from "@/components/product/ProductDetails";

interface Props {
  params: {
    id: string;
  };
}

const getProduct = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/products/${id}`);
  return res.json();
};

export default async function ProductDetailsPage({ params }: Props) {
  const data = await getProduct(params?.id);

  return (
    <>
      <ProductDetails data={data} />
    </>
  );
}

export async function generateMetaData({ params }: Props) {
  const data = await getProduct(params?.id);
  return {
    title: data?.product?.name,
  };
}
