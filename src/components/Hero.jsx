import tenis3 from '../assets/images/tenis3.png'

export default function Hero() {
    return (
        <div className='relative mx-auto max-w-7xl flex'>
            {/* Texts and buttons */}
            <div className="relative mx-auto flex max-w-lg flex-col items-start px-6 py-32 text-left sm:py-64 lg:px-0">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">New arrivals are here 🔥</h1>
                <p className="mt-4 text-xl text-gray-900">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</p>
                <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-pink-700 px-8 py-3 text-base font-medium text-gray-100 hover:bg-gray-900">Shop New Arrivals</a>
            </div>
            {/* Decorative image and overlay */}
            <div aria-hidden="true" className="inset-0 overflow-hidden">
                <img src={tenis3} alt="" className="h-full w-full object-cover object-center " />
            </div>
        </div>
    );
}