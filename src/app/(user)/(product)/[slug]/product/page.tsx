import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import SingleProduct12 from "@/components/singleProduct/SingleProduct12";

interface Props {
  params?: { slug?: string };
}

export default function Product(props: Props) {
  const { params } = props;

  return (
    <>
      <Header1 showBreadcrumb />

      <main
        className="lg:tw-mt-10 tw-pt-[60px] lg:tw-pt-[90px]"
        style={{ paddingBottom: 64 }}
      >
        <div className="tw-bg-[#F3F3F3] tw-h-4"></div>
        <div className="tw-block lg:tw-hidden tw-mt-2">
          <Breadcrumb />
        </div>
        {/* <SingleProduct12 slug={params?.slug} /> */}
        <SingleProduct slug={params?.slug as string} />
      </main>
      <Footer1 />
    </>
  );
}
