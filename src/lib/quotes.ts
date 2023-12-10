type Quote = {
  text: string;
  author: string;
};

export const quotes: Quote[] = [
  {
    text: '"La tecnología es mejor cuando nos une en lugar de dividirnos."',
    author: '- Matt Mullenweg'
  },
  {
    text: '"El software está comiendo el mundo."',
    author: '- Marc Andreessen'
  },
  {
    text: '"La programación es el arte de organizar y dominar el caos."',
    author: '- Brian Kernighan'
  },
  {
    text: '"Cada línea de código debería tener un propósito claro y no existir a menos que mejore el programa."',
    author: '- Uncle Bob (Robert C. Martin)'
  },
  {
    text: '"La calidad no es un acto, es un hábito."',
    author: '- Aristóteles (adaptado para el desarrollo de software)'
  },
  {
    text: '"El software, como el arte, se realiza mejor cuando se construye con pasión."',
    author: '- Linus Torvalds'
  }
];

export const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
