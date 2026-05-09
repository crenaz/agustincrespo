import * as React from "react";
import SingleImage from "../../components/SingleImage";
import { images } from "../../constants";

const Page = ({ image }) => {
  return <SingleImage image={image} />;
};

export async function getStaticProps({ params }) {
  const image = images.find((img) => img.slug === params.slug);

  return {
    props: {
      image,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: images.map((image) => ({
        params: {
          slug: image.slug,
        },
    })),
    fallback: false,
  };
}

export default Page;
