import CheckoutForm from "@/Components/forms/CheckoutForm";
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
            <CheckoutForm data={data} />
        </div>
    );
}