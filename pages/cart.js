import Layout from "../src/components/layout";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import axios from "axios";
import CartItemsContainer from "../src/components/cart/cart-items-container";

export default function Cart({ headerFooter }) {
  return (
    <Layout headerFooter={headerFooter || {}}>
      <div className="container mx-auto py-4 min-h-50vh mt-12">
        <h1 className="uppercase tracking-0.5px">Carrinho</h1>
        <CartItemsContainer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
