import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

interface AssetLink {
  block: Asset[];
}

export interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}

function RichTextAsset({
  id,
  assets,
  className,
}: {
  id: string;
  assets: Asset[] | undefined;
  className: string;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);
  if (asset?.url)
    return (
      <div className={className}>
        <Image src={asset.url} layout="fill" alt={asset.description} />
      </div>
    );

  return null;
}

export function Markdown({
  content,
  className = "",
}: {
  content: Content;
  className?: string;
}) {
  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          className={className}
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),

      [BLOCKS.PARAGRAPH]: (node, children) => {
        const isEmptyChildren = children?.toString().trim() === "";
        if (isEmptyChildren) return null;

        return <p>{children}</p>;
      },
    },
  });
}