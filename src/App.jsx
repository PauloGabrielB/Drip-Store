import ListaProdutos from "./ListaProdutos";


const PRODUCTS = [
  {
    id: 1,
    name: 'Camiseta Básica',
    price: '$35',
    color: 'Preta',
    image: {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      alt: 'Camiseta preta básica com gola redonda e manga curta.',
    },
  },
  {
    id: 2,
    name: 'Camiseta Básica',
    price: '$40',
    color: 'Branco Aspen',
    image: {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      alt: 'Camiseta branca básica com gola redonda e manga curta.',
    },
  },
  {
    id: 3,
    name: 'Camiseta Básica',
    price: '$39',
    color: 'Carvão',
    image: {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      alt: 'Camiseta cinza básica com gola redonda e manga curta.',
    },
  },
  {
    id: 4,
    name: 'Camiseta Básica',
    price: '$35',
    color: 'Pontos',
    image: {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      alt: 'Camiseta branca básica com gola redonda e manga curta.',
    },
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-yellow-600 via-purple-200 to-teal-200">
      <ListaProdutos listaProdutos={PRODUCTS} />
    </div>
  );
}

export default App
