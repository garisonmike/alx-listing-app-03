import BookingForm from '@/components/booking/BookingForm';
import CancellationPolicy from '@/components/booking/CancellationPolicy';
import OrderSummary from '@/components/booking/OrderSummary';

export default function BookingPage() {
    const bookingDetails = {
        propertyName: "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Booking</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <BookingForm />
                        <CancellationPolicy />
                    </div>
                    <div>
                        <OrderSummary bookingDetails={bookingDetails} />
                    </div>
                </div>
            </div>
        </div>
    );
}
