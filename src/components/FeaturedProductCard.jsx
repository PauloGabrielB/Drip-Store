export default function FeaturedProductCard({ imgSrc }) {
    return (
        <div href="#" className="relative flex space-y-10 h-80 w-96 flex-col overflow-hidden rounded-lg p-6 xl:w-auto bg-indigo-100">
            <span aria-hidden="true" className="absolute inset-0">
                <img src={imgSrc} alt="" className="h-full w-full object-cover object-center" />
            </span>
            <span className="absolute top-0 left-4 items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">30% OFF</span>
            <div className='absolute bottom-8 flex flex-col space-y-4'>
                <span className="text-left text-3xl font-bold text-gray-900">New Arrivals</span>
                <span className="justify-start" aria-hidden="true">
                    <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-700 hover:bg-gray-900">Take a look</a>
                </span>
            </div>
        </div>
    );
}