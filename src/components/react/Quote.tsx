import { getRandomQuote } from '@lib/quotes';

const Quote: React.FC = () => {
  const quote = getRandomQuote();

  return (
    <>
      <p className={"text-white/70 text-center mt-24"}>{quote.text}</p>
      <span className={"w-2/3 text-center text-white/40 text-base leading-5"}>{quote.author}</span>
    </>
  );
};

export default Quote;
