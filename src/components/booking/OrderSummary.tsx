import React from 'react';

interface BookingDetails {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
}

interface OrderSummaryProps {
    bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Review Order Details</h2>
        <div className="flex items-center mt-4">
            <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=300&fit=crop"
                alt="Property"
                className="w-32 h-32 object-cover rounded-md"
            />
            <div className="ml-4">
                <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
                <p className="text-sm text-gray-500">⭐ 4.76 (345 reviews)</p>
                <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
            </div>
        </div>

        {/* Price Breakdown */}
        <div className="mt-6 space-y-2">
            <div className="flex justify-between">
                <p className="text-gray-600">Booking Fee</p>
                <p className="font-medium">${bookingDetails.bookingFee}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${bookingDetails.price}</p>
            </div>
            <div className="border-t pt-2 mt-2">
                <div className="flex justify-between">
                    <p className="text-lg font-semibold">Grand Total</p>
                    <p className="text-lg font-semibold">${bookingDetails.bookingFee + bookingDetails.price}</p>
                </div>
            </div>
        </div>
    </div>
);

export default OrderSummary;
