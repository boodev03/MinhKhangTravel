import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

const SEOConfig = ({ title, description, keywords }: SEOProps) => (
  <Helmet async={true}>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/assets/open_graph.png" />
    <meta property="og:url" content="https://www.minhkhangtravel.vn/" />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default SEOConfig;
