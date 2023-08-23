function App() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Items mais vendidos</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          <div className="group relative">
            <div
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Camiseta Básica
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Preta</p>
              </div>
              <p className="text-sm font-medium text-gray-900">R$ 35</p>
            </div>
          </div>

          <div className="group relative">
            <div
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Camiseta Básica
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Branco Aspen</p>
              </div>
              <p className="text-sm font-medium text-gray-900">R$ 40</p>
            </div>
          </div>

          <div className="group relative">
            <div
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Camiseta Básica
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Carvão</p>
              </div>
              <p className="text-sm font-medium text-gray-900">R$ 39</p>
            </div>
          </div>

          <div className="group relative">
            <div
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Camiseta Básica
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Pontos</p>
              </div>
              <p className="text-sm font-medium text-gray-900">R$ 35</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App
