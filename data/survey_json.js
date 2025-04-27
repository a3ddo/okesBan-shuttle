export const json = {
  title: "Okesban Service Request Form",
  completedHtml: `
    <div style="text-align:center; padding:20px;">
      <h2>🎉 Awesome!</h2>
      <p>Your request has been submitted successfully. We’ll be in touch soon.</p>
    </div>
  `,
  pages: [
    {
      name: "TripDetails",
      title: "Trip Details",
      elements: [
        {
          type: "panel",
          name: "serviceSelection",
          title: "Service Selection",
          elements: [
            {
              type: "radiogroup",
              name: "serviceType",
              title: "Please select from our available services:",
              isRequired: true,
              choices: [
                { value: "SchoolShuttle", text: "School Shuttle Service" },
                { value: "BusRental", text: "Bus Rental Service" },
              ],
              allowClear: true,
            },
          ],
        },
        {
          type: "panel",
          name: "schoolshuttlePanel",
          visibleIf: "{serviceType} = 'SchoolShuttle'",
          title: "School Shuttle Service",
          elements: [
            {
              type: "dropdown",
              name: "shuttleType",
              title: "Select the School Shuttle Service:",
              isRequired: true,
              choices: [
                { value: "Ashesi", text: "Ashesi Shuttles" },
                { value: "AburiGirls", text: "Aburi Girls' Shuttles" },
                { value: "MaryMother", text: "Mary Mother Shuttles" },
              ],
            },
            {
              type: "radiogroup",
              name: "shuttleTripType",
              title: "Trip Type",
              isRequired: true,
              choices: [
                {
                  value: "roundTripShuttle",
                  text: "Round Trip (Departure/Return)",
                },
                { value: "onewayDepatureShuttle", text: "One-Way (Departure)" },
              ],
            },
            {
              type: "panel",
              name: "roundTripPanel",
              visibleIf: "{shuttleTripType} = 'roundTripShuttle'",
              title: "Round Trip Details",
              elements: [
                {
                  type: "panel",
                  name: "departPanelShuttleRT",
                  title: "Departure Details",
                  elements: [
                    {
                      type: "text",
                      name: "departureDateShuttle",
                      title: "Departure Date",
                      isRequired: true,
                      inputType: "date",
                    },
                    {
                      type: "text",
                      name: "departureTimeShuttle",
                      startWithNewLine: false,
                      title: "Departure Time",
                      isRequired: true,
                      inputType: "time",
                      min: "08:00",
                      max: "17:30",
                    },
                    {
                      type: "dropdown",
                      name: "deptpickupShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Ashesi Shuttle",
                      description: "Pickup Location for Departure",
                      choices: [
                        { value: "AshesiCampus", text: "Ashesi Campus" },
                        { value: "AccraMall", text: "Accra Mall" },
                        { value: "RitzJunction", text: "Ritz Junction" },
                        {
                          value: "AdentaBarrier",
                          text: "Adenta Barrier (TOTAL Filling Station)",
                        },
                        { value: "PresecBusStop", text: "PRESEC Bus Stop" },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptdropoffShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Ashesi",
                      description: "Drop-Off Location for Departure",
                      choices: [
                        { value: "AccraMall", text: "Accra Mall" },
                        { value: "AshesiCampus", text: "Ashesi Campus" },
                        { value: "KwabenyaShell", text: "Kwabenya SHELL" },
                        {
                          value: "AtomicJunction",
                          text: "Atomic Junction/Overpass",
                        },
                        {
                          value: "LegonOkponglo",
                          text: "Legon - Okponglo Bus Stop",
                        },
                      ],
                    },
                    {
                      type: "boolean",
                      name: "departureLuggage",
                      title: "I have Luggage",
                      isRequired: true,
                    },
                    {
                      type: "dropdown",
                      name: "departureLuggageQty",
                      visibleIf:
                        "{departureLuggage} = true and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Number of Luggage",
                      description:
                        "It is important for planning purposes you give an accurate information on the number of luggage.",
                      isRequired: true,
                      choices: ["1", "2", "3"],
                    },
                  ],
                },
                {
                  type: "panel",
                  name: "returnPanelShuttleRT",
                  title: "Return Details",
                  elements: [
                    {
                      type: "text",
                      name: "returnDateShuttle",
                      title: "Return Date",
                      inputType: "date",
                    },
                    {
                      type: "text",
                      name: "returnTimeShuttle",
                      startWithNewLine: false,
                      title: "Return Time",
                      inputType: "time",
                      min: "12:00",
                      max: "16:30",
                    },
                    {
                      type: "dropdown",
                      name: "retnpickupShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Ashesi",
                      description: "Pickup Location for Return",
                      choices: [
                        { value: "AshesiCampus", text: "Ashesi Campus" },
                        { value: "AccraMall", text: "Accra Mall" },
                        { value: "RitzJunction", text: "Ritz Junction" },
                        {
                          value: "AdentaBarrier",
                          text: "Adenta Barrier (TOTAL Filling Station)",
                        },
                        { value: "PresecBusStop", text: "PRESEC Bus Stop" },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retndropoffShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Ashesi",
                      description: "Drop-Off Location for Return",
                      choices: [
                        { value: "AccraMall", text: "Accra Mall" },
                        { value: "AshesiCampus", text: "Ashesi Campus" },
                        { value: "KwabenyaShell", text: "Kwabenya SHELL" },
                        {
                          value: "AtomicJunction",
                          text: "Atomic Junction/Overpass",
                        },
                        {
                          value: "LegonOkponglo",
                          text: "Legon - Okponglo Bus Stop",
                        },
                      ],
                    },
                    {
                      type: "boolean",
                      name: "returnLuggage",
                      title: "I have Luggage",
                      isRequired: true,
                    },
                    {
                      type: "dropdown",
                      name: "returnLuggageQty",
                      visibleIf:
                        "{returnLuggage} = true and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Number of Luggage",
                      description:
                        "It is important for planning purposes you give an accurate information on the number of luggage.",
                      isRequired: true,
                      choices: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
            {
              type: "panel",
              name: "onewayPanel",
              visibleIf: "{shuttleTripType} = 'onewayDepatureShuttle'",
              title: "One-Way Trip Details",
              elements: [
                {
                  type: "panel",
                  name: "departPanelShuttleOW",
                  title: "Departure Details",
                  elements: [
                    {
                      type: "text",
                      name: "departureDateShuttleOW",
                      title: "Departure Date",
                      isRequired: true,
                      inputType: "date",
                    },
                    {
                      type: "text",
                      name: "departureTimeShuttleOW",
                      startWithNewLine: false,
                      title: "Departure Time",
                      isRequired: true,
                      inputType: "time",
                      min: "08:00",
                      max: "17:30",
                    },
                    {
                      type: "dropdown",
                      name: "owdeptpickupShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Pickup Location::Ashesi Shuttle",
                      description: "Pickup Location for Departure",
                      choices: [
                        { value: "AshesiCampus", text: "Ashesi Campus" },
                        { value: "AccraMall", text: "Accra Mall" },
                        { value: "RitzJunction", text: "Ritz Junction" },
                        {
                          value: "AdentaBarrier",
                          text: "Adenta Barrier (TOTAL Filling Station)",
                        },
                        { value: "PresecBusStop", text: "PRESEC Bus Stop" },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owdeptdropoffShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Drop-Off Location::Ashesi",
                      description: "Drop-Off Location for Departure",
                      choices: [
                        { value: "AccraMall", text: "Accra Mall" },
                        { value: "AshesiCampus", text: "Ashesi Campus" },
                        { value: "KwabenyaShell", text: "Kwabenya SHELL" },
                        {
                          value: "AtomicJunction",
                          text: "Atomic Junction/Overpass",
                        },
                        {
                          value: "LegonOkponglo",
                          text: "Legon - Okponglo Bus Stop",
                        },
                      ],
                    },
                    {
                      type: "boolean",
                      name: "owdepartureLuggage",
                      title: "I have Luggage",
                      isRequired: true,
                    },
                    {
                      type: "dropdown",
                      name: "owdepartureLuggageQty",
                      visibleIf:
                        "{owdepartureLuggage} = true and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Number of Luggage",
                      description:
                        "It is important for planning purposes you give an accurate information on the number of luggage.",
                      isRequired: true,
                      choices: ["1", "2", "3"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "busrentalPanel",
          visibleIf: "{serviceType} = 'BusRental'",
          title: "Bus Rental Service",
          elements: [
            {
              type: "dropdown",
              name: "busrentalType",
              title: "How are you booking for the Bus Rental:",
              isRequired: true,
              choices: [
                { value: "directBooking", text: "Direct Booking" },
                { value: "backofficeBooking", text: "Backoffice Booking" },
              ],
            },
            {
              type: "radiogroup",
              name: "busTripType",
              title: "Trip Type",
              choices: [
                {
                  value: "roundtripBus",
                  text: "Round Trip (Departure/Return)",
                },
                { value: "onewayDeptureBus", text: "One-Way (Departure)" },
              ],
              allowClear: true,
            },
            {
              type: "panel",
              name: "departPanelBus",
              visibleIf: "{busTripType} = 'roundtripBus'",
              title: "Departure::Bus Rental",
              elements: [
                {
                  type: "html",
                  name: "TermsConditions1",
                  html: "<b>Please Note:</b> To ensure the safety of our staff and passengers we adhere to strict operating times as stipulated in our T&Cs. <i>Click here</i> for more information on our allowable time schedules for rentals.",
                },
                {
                  type: "text",
                  name: "departureDateBus",
                  title: "Departure Date",
                  inputType: "date",
                },
                {
                  type: "text",
                  name: "departureTimeBus",
                  startWithNewLine: false,
                  title: "Departure Time",
                  inputType: "time",
                  min: "06:00",
                  max: "16:30",
                },
                {
                  type: "text",
                  name: "deptpickupLocationBus",
                  visible: false,
                  title: "Pickup Location",
                  description:
                    "Provide location name, street or address, and closest landmark if any. (Example: Kaneshie, behind Market)",
                },
                {
                  type: "text",
                  name: "deptdropoffLocationBus",
                  title: "Drop-Off Location",
                  description:
                    "Provide location name, street or address, and closest landmark if any. (Example: Pokuasi, behind Main Station)",
                },
              ],
            },
            {
              type: "panel",
              name: "owdepartPanelBus",
              visibleIf: "{busTripType} = 'onewayDeptureBus'",
              title: "Departure::Bus Rental",
              elements: [
                {
                  type: "html",
                  name: "owTermsConditions1",
                  html: "<b>Please Note:</b> To ensure the safety of our staff and passengers we adhere to strict operating times as stipulated in our T&Cs. <i>Click here</i> for more information on our allowable time schedules for rentals.",
                },
                {
                  type: "text",
                  name: "owdepartureDateBus",
                  title: "Departure Date",
                  inputType: "date",
                },
                {
                  type: "text",
                  name: "owdepartureTimeBus",
                  startWithNewLine: false,
                  title: "Departure Time",
                  inputType: "time",
                  min: "06:00",
                  max: "16:30",
                },
                {
                  type: "text",
                  name: "owdeptpickupLocationBus",
                  visible: false,
                  title: "Pickup Location",
                  description:
                    "Provide location name, street or address, and closest landmark if any. (Example: Kaneshie, behind Market)",
                },
                {
                  type: "text",
                  name: "owdeptdropoffLocationBus",
                  title: "Drop-Off Location",
                  description:
                    "Provide location name, street or address, and closest landmark if any. (Example: Pokuasi, behind Main Station)",
                },
              ],
            },
            {
              type: "panel",
              name: "returnPanelBus",
              visibleIf: "{busTripType} = 'roundtripBus'",
              title: "Return::Bus Rental",
              elements: [
                {
                  type: "html",
                  name: "TermsConditions2",
                  html: "<b>Please Note:</b> To ensure the safety of our staff and passengers we adhere to strict operating times as stipulated in our T&Cs. <i>Click here</i> for more information on our allowable time schedules for rentals.",
                },
                {
                  type: "text",
                  name: "returnDateBus",
                  title: "Return Date",
                  inputType: "date",
                },
                {
                  type: "text",
                  name: "returnTimeBus",
                  startWithNewLine: false,
                  title: "Return Time",
                  inputType: "time",
                  min: "06:00",
                  max: "16:30",
                },
                {
                  type: "text",
                  name: "retnpickupLocationBus",
                  title: "Pickup Location",
                },
                {
                  type: "text",
                  name: "retndropoffLocationBus",
                  title: "Drop-Off Location",
                },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "contactInformation",
          visibleIf:
            "{serviceType} = 'SchoolShuttle' or {serviceType} = 'BusRental'",
          title: "Contact Information",
          elements: [
            {
              type: "text",
              name: "firstName",
              title: "First Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "lastName",
              startWithNewLine: false,
              title: "Last Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "emailAddress",
              title: "Email",
              description: "Provide a valid email to address",
              inputType: "email",
            },
            {
              type: "text",
              name: "phoneNumber",
              title: "Phone Number",
              description: "Provide a valid phone number",
              isRequired: true,
              inputType: "tel",
            },
            {
              type: "text",
              name: "alternatePhoneNumber",
              startWithNewLine: false,
              title: "Phone Number",
              description: "Provide an alternate phone number",
              inputType: "tel",
            },
          ],
        },
        {
          type: "panel",
          name: "paymentPanel",
          visibleIf:
            "{serviceType} = 'SchoolShuttle' or {serviceType} = 'BusRental'",
          title: "Payment Confirmation",
          validators: [
            {
              type: "expression",
              text: "This service is only available to those who have paid.",
              expression: "{paymentPanel} === true",
            },
          ],
          elements: [
            {
              type: "boolean",
              name: "paymentMade",
              title: "Have you made payment?",
              isRequired: true,
            },
            {
              type: "dropdown",
              name: "paymentMethod",
              visibleIf: "{paymentMade} = true",
              title: "Payment Method",
              description:
                "Select the method by which you made or completed payment.",
              isRequired: true,
              choices: [
                { value: "MTNMomo", text: "MTN MoMo" },
                { value: "VodaCash", text: "Vodafone Cash" },
                { value: "ATCash", text: "AT Cash" },
                { value: "BankTransfer", text: "Bank Transfer" },
              ],
            },
            {
              type: "text",
              name: "paymentID",
              visibleIf: "{paymentMade} = true",
              startWithNewLine: false,
              title: "Payment ID",
              description:
                "Provide the payment or transaction reference code here. This will be confirmed by backoffice team and not automatically.",
              isRequired: true,
            },
            {
              type: "html",
              name: "paymentInstruction",
              visibleIf: "{paymentMade} = false",
              html: "<b> How do I make or complete payment?</b>\n<br>\n<p>Please follow the instructions below and complete your payment, select <b>YES</b> under the previous question and provide the payment details.</p>",
            },
            {
              type: "image",
              name: "paymentInfoSheet",
              visibleIf: "{paymentMade} = false",
              imageFit: "cover",
              imageHeight: "auto",
              imageWidth: "100%",
            },
          ],
        },
      ],
    },
  ],
  gridLayoutEnabled: true,
  headerView: "advanced",
};
