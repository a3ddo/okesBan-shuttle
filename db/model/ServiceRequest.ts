import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ServiceRequestSchema = new Schema({
    // Legacy / Generic trip fields
    tripType: String,
    departureDate: Date,
    departureTime: String,
    deptpickupLocation: String,
    deptdropoffLocation: String,
    returnDate: Date,
    returnTime: String,
    retnpickupLocation: String,
    retndropoffLocation: String,

    // Service selection
    serviceType: String,

    // === School Shuttle Fields ===
    shuttleType: String,
    shuttleTripType: String,

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

    // === Bus Rental Fields ===
    busrentalType: String,
    busTripType: String,

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

    // === Contact & Payment ===
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    alternatePhoneNumber: String,

    paymentMade: { type: Boolean, required: true },
    paymentMethod: String,
    paymentID: String,

    // === Metadata ===
    timestamp: { type: Date, default: () => new Date() }
}, {
    versionKey: false,
});

const ServiceRequest = mongoose.models.ServiceRequest || model('ServiceRequest', ServiceRequestSchema);
export default ServiceRequest;
