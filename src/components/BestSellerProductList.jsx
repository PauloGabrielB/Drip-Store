import BestSellerProductCard from './BestSellerProductCard'
import tenis2 from '../assets/images/tenis2.png'

export default function BestSellerProductList() {
    return (
        <section className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Best sellers</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                <BestSellerProductCard imgSrc={tenis2} />
                <BestSellerProductCard imgSrc={tenis2} />
                <BestSellerProductCard imgSrc={tenis2} />
                <BestSellerProductCard imgSrc={tenis2} />
            </div>
        </section>
    );
}