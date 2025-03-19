import Image from "next/image";

export default async function CheckoutPage({ params }) {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
    const data = await res.json();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Banner Section */}
            <section className="flex justify-center">
                <figure className="mt-2 relative">
                    <Image
                        src={"/assets/images/checkout/checkout.png"}
                        alt="banner"
                        width={1350}
                        height={200}
                        className="rounded-xl shadow-lg"
                    />
                    <div className="absolute w-full h-full top-0 bg-black/60 flex justify-center items-center">
                        <h1 className="text-5xl font-extrabold text-white drop-shadow-md">Checkout</h1>
                    </div>
                </figure>
            </section>

            {/* Form Section */}
            <section className="flex justify-center mt-12">
                <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-4xl lg:w-[1140px] lg:h-[700px] border border-gray-100/50 backdrop-blur-sm">
                    <form className="h-full flex flex-col justify-between">
                        <div>
                            <div className="flex gap-6 mb-8">
                                <div className="flex-1">
                                    <label className="block text-gray-600 text-sm font-medium mb-2">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-600 text-sm font-medium mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex gap-6 mb-8">
                                <div className="flex-1">
                                    <label className="block text-gray-600 text-sm font-medium mb-2">Your Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="Your Phone"
                                        className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-600 text-sm font-medium mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-8">
                                <label className="block text-gray-600 text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    placeholder="Your Message"
                                    rows="8"
                                    className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-500 to-red-700 
                                text-white font-semibold 
                                px-4 py-3 
                                rounded-full 
                                w-full 
                                shadow-md 
                                hover:from-red-600 hover:to-red-800 
                                transition duration-300"
                        >
                            Order Confirm
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}