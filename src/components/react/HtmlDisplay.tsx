'use client';

type Props = {
  htmlCode: string
}

const HtmlDisplay: React.FC<Props> = ({ htmlCode }: Props) => {
  return <div className="text-center" dangerouslySetInnerHTML={{ __html: htmlCode }} />;
};

export default HtmlDisplay;
