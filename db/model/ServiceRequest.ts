// models/ServiceRequest.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Enums
export const ServiceTypeEnum = ["SchoolShuttle", "BusRental"];
export const ShuttleTypeEnum = ["Ashesi", "AburiGirls", "MaryMother"];
export const ShuttleTripTypeEnum = ["roundTripShuttle", "onewayDepatureShuttle"];
export const BusRentalTypeEnum = ["directBooking", "backofficeBooking"];
export const BusTripTypeEnum = ["roundtripBus", "onewayDeptureBus"];

const ServiceRequestSchema = new Schema({
    // Legacy / Generic fields
    tripType: String,
    departureDate: Date,
    departureTime: String,
    deptpickupLocation: String,
    deptdropoffLocation: String,
    returnDate: Date,
    returnTime: String,
    retnpickupLocation: String,
    retndropoffLocation: String,

    // Service selector
    serviceType: { type: String, enum: ServiceTypeEnum },

    // School-shuttle fields
    shuttleType: { type: String, enum: ShuttleTypeEnum },
    shuttleTripType: { type: String, enum: ShuttleTripTypeEnum },

    // Round-trip shuttle
    departureDateShuttle: Date,
    departureTimeShuttle: String,
    deptpickupShuttle1: String,
    deptdropoffShuttle1: String,
    departureLuggage: Boolean,
    departureLuggageQty: Number,
    returnDateShuttle: Date,
    returnTimeShuttle: String,
    retnpickupShuttle1: String,
    retndropoffShuttle1: String,
    returnLuggage: Boolean,
    returnLuggageQty: Number,

    // One-way shuttle
    departureDateShuttleOW: Date,
    departureTimeShuttleOW: String,
    owdeptpickupShuttle1: String,
    owdeptdropoffShuttle1: String,
    owdepartureLuggage: Boolean,
    owdepartureLuggageQty: Number,

    // Bus-rental fields
    busrentalType: { type: String, enum: BusRentalTypeEnum },
    busTripType: { type: String, enum: BusTripTypeEnum },

    // Round-trip bus
    departureDateBus: Date,
    departureTimeBus: String,
    deptpickupLocationBus: String,
    deptdropoffLocationBus: String,
    returnDateBus: Date,
    returnTimeBus: String,
    retnpickupLocationBus: String,
    retndropoffLocationBus: String,

    // One-way bus
    owdepartureDateBus: Date,
    owdepartureTimeBus: String,
    owdeptpickupLocationBus: String,
    owdeptdropoffLocationBus: String,

    // Contact & payment
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    alternatePhoneNumber: String,

    paymentMade: { type: Boolean, required: true },
    paymentMethod: String,
    paymentID: String,

    // Auto timestamp
    timestamp: { type: Date, default: () => new Date() }
}, {
    versionKey: false
});

// Ensure model is not recompiled on hot-reload
const ServiceRequest = mongoose.models.ServiceRequest || model('ServiceRequest', ServiceRequestSchema);
export default ServiceRequest;
