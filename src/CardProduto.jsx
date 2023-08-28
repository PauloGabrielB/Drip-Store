export default function CardProduto({ produto }) {
    return (
        <div className="group relative">
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={ produto.image.src } alt={ produto.image.alt }
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            { produto.name }
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{ produto.color }</p>
                </div>
                <p className="text-sm font-medium text-gray-900">R$ { produto.price }</p>
            </div>
        </div>
    );
}
