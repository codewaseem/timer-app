import React from "react";
import { Helmet, HelmetProps } from "react-helmet-async";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Location } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  /** Description text for the description meta tags */
  description?: string;
  keywords?: string;
  seoImageUrl?: string;
} & HelmetProps &
  InjectedIntlProps;

type SiteMetadataQuery = {
  siteMetadata: {
    title: string;
    description: string;
    keywords: string;
    siteUrl: string;
  };
};

/**
 * An SEO component that handles all element in the head that can accept
 */
const SEO: React.FC<Props> = ({
  children,
  description = "",
  title,
  intl,
  keywords = "",
  seoImageUrl,
}) => {
  const { site }: { site?: SiteMetadataQuery } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            lang
          }
        }
      }
    `
  );

  const metaDescription = description || site?.siteMetadata.description;

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang: intl.locale,
          }}
          title={title || site?.siteMetadata.title}
          titleTemplate="%s"
          link={[
            { rel: "icon", type: "image/png", href: "/favicon-96x96.png" },
          ]}
        >
          <meta property="description" content={metaDescription} />

          <meta
            property="keywords"
            content={keywords || site?.siteMetadata.keywords}
          />

          {/* OG tags */}
          <meta
            property="og:url"
            content={site?.siteMetadata.siteUrl + location.pathname}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:locale" content={intl.locale} />
          <meta property="og:image" content={seoImageUrl || "/preview.jpg"} />
          <meta
            property="og:image:alt"
            content={seoImageUrl || "/preview.jpg"}
          />
          <meta property="twitter:card" content="summary_large_image" />
          {children}
        </Helmet>
      )}
    </Location>
  );
};

export default injectIntl(SEO);
