export const json = {
  title: "OkesBan Service Request Form",
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
                {
                  value: "SchoolShuttle",
                  text: "School Shuttle Service",
                },
                {
                  value: "BusRental",
                  text: "Bus Rental Service",
                },
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
                {
                  value: "Ashesi",
                  text: "Ashesi Shuttles",
                },
                {
                  value: "AburiGirls",
                  text: "Aburi Girls' Shuttles",
                },
                {
                  value: "SchoolBus",
                  text: "School Bus Shuttles",
                },
              ],
            },
            {
              type: "radiogroup",
              name: "schoolbusShuttleSchoolList",
              visibleIf: "{shuttleType} = 'SchoolBus'",
              startWithNewLine: false,
              title: "Select Your School",
              isRequired: true,
              choices: [
                {
                  value: "MaarifInternational",
                  text: "Maarif International",
                },
                {
                  value: "MaryMother",
                  text: "Mary Mother",
                },
              ],
              allowClear: true,
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
                {
                  value: "onewayDepatureShuttle",
                  text: "One-Way (Departure)",
                },
                {
                  value: "onewayReturn",
                  text: "One-Way (Return)",
                },
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
                      type: "dropdown",
                      name: "departurePeriodShuttle",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      startWithNewLine: false,
                      title: "Departure Period",
                      isRequired: true,
                      choices: [
                        {
                          value: "Morning",
                          visibleIf: "weekday({departureDateShuttle})!=5",
                        },
                        "Afternoon",
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptpickupShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Ashesi Shuttle",
                      description: "Pickup Location from Campus (Outbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                        },
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "AdentaBarrier",
                          text: "Adenta Barrier (TOTAL Filling Station)",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "PresecBusStop",
                          text: "PRESEC Bus Stop",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "departTimeShuttleAshesi",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Departure Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "08:00",
                          visibleIf: "{departurePeriodShuttle} = 'Morning'",
                        },
                        {
                          value: "10:30",
                          visibleIf: "{departurePeriodShuttle} = 'Morning'",
                        },
                        {
                          value: "11:00",
                          visibleIf: "{departurePeriodShuttle} = 'Morning'",
                        },
                        {
                          value: "14:30",
                          visibleIf: "{departurePeriodShuttle} = 'Afternoon'",
                          enableIf: "weekday({departureDateShuttle})!='5'",
                        },
                        {
                          value: "16:00",
                          visibleIf: "{departurePeriodShuttle} = 'Afternoon'",
                          enableIf: "weekday({departureDateShuttle})!='5'",
                        },
                        {
                          value: "17:30",
                          visibleIf: "{departurePeriodShuttle} = 'Afternoon'",
                          enableIf: "weekday({departureDateShuttle})='5'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptpickupShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Aburi Girls",
                      description: "Pickup from School (Outbound)",
                      choices: [
                        {
                          value: "MainCampus",
                          text: "Main Campus",
                        },
                        {
                          value: "CampusAnnex",
                          text: "Campus Annex",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "departTimeShuttleAburiGirls",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Departure Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "06:30",
                          visibleIf: "{deptpickupShuttle2} = 'MainCampus'",
                        },
                        {
                          value: "07:00",
                          visibleIf: "{deptpickupShuttle2} = 'CampusAnnex'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptpickupShuttleMaarif",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaarifInternational' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Maarif International",
                      description:
                        "Pickup from Residential Community (Inbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "LocationA",
                          text: "Location (A) - Criterion (Regimanuel), Manet Ville, Manet Court, Aglizah/Green Hotel Road, Comm. 18 Spintex Road, Sakumono",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptpickupShuttleMaryMother",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaryMother' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Mary Mother",
                      description:
                        "Pickup from Residential Community (Inbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "LocationA",
                          text: "Location (A) - Achimota, Dome, Kwabenya, Pokuase",
                          visibleIf:
                            "{schoolbusShuttleSchoolList} = 'MaarifInternational'",
                        },
                        {
                          value: "LocationB",
                          text: "Location (B) - Manet Spintex Road, Comm. 18 Spintex Road, Sakumono",
                        },
                        {
                          value: "LocationC",
                          text: "Location (C) - East Legon/Medina Road, Medina/Medina Road, Adenta/Medina Road, Oyarifa/Medina Road",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "departTimeShuttleSchBus",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} anyof ['MaarifInternational', 'MaryMother'] and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Departure Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "05:45",
                          text: "05:45 - 06:30",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptdropoffShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Aburi Girls",
                      description: "Drop-Off from School (Outbound)",
                      choices: [
                        "Madina",
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                        },
                        {
                          value: "AtomicOverpass",
                          text: "Atomic Overpass",
                        },
                        {
                          value: "OkpongloLegon",
                          text: "Okponglo Legon",
                        },
                        {
                          value: "AfricanRegent",
                          text: "African Regent (Spanner Junction)",
                        },
                        {
                          value: "37MilitaryHospital",
                          text: "37 Military Hospital",
                        },
                        {
                          value: "NationalTheatre",
                          text: "National Theatre",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptdropoffShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Ashesi",
                      description: "Drop-Off from Campus (Outbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                        },
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "KwabenyaShell",
                          text: "Kwabenya SHELL",
                        },
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
                      type: "dropdown",
                      name: "deptdropoffShuttleMaarif",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaarifInternational' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Maarif International",
                      description: "Drop-Off to School (Inbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "MaarifInternational",
                          text: "Maarif International",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "deptdropoffShuttleMaryMother",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaryMother' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Mary Mother",
                      description: "Drop-Off to School (Inbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "MaryMotherSchool",
                          text: "Mary Mother",
                          visibleIf:
                            "{schoolbusShuttleSchoolList} = 'MaarifInternational'",
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
                      isRequired: true,
                      inputType: "date",
                    },
                    {
                      type: "dropdown",
                      name: "returnPeriodShuttle",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      startWithNewLine: false,
                      title: "Return Period",
                      isRequired: true,
                      choices: [
                        {
                          value: "Morning",
                          visibleIf: "weekday({returnDateShuttle})!=0",
                        },
                        "Afternoon",
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retnpickupShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Ashesi",
                      description:
                        "Pickup Location for Return to Campus (Inbound)",
                      choices: [
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                        },
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                        },
                        {
                          value: "AdentaBarrier",
                          text: "Adenta Barrier (TOTAL Filling Station)",
                        },
                        {
                          value: "PresecBusStop",
                          text: "PRESEC Bus Stop",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "returnTimeShuttleAshesi",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Return Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "08:00",
                          visibleIf: "{returnPeriodShuttle} = 'Morning'",
                        },
                        {
                          value: "10:30",
                          visibleIf: "{returnPeriodShuttle} = 'Morning'",
                        },
                        {
                          value: "11:00",
                          visibleIf: "{returnPeriodShuttle} = 'Morning'",
                        },
                        {
                          value: "14:30",
                          visibleIf: "{returnPeriodShuttle} = 'Afternoon'",
                          enableIf: "weekday({returnDateShuttle})!='0'",
                        },
                        {
                          value: "16:00",
                          visibleIf: "{returnPeriodShuttle} = 'Afternoon'",
                          enableIf: "weekday({returnDateShuttle})='0'",
                        },
                        {
                          value: "17:30",
                          visibleIf: "{returnPeriodShuttle} = 'Afternoon'",
                          enableIf: "weekday({returnDateShuttle})!='0'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retnpickupShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Aburi Girls",
                      choices: [
                        "Madina",
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                        },
                        {
                          value: "AtomicOverpass",
                          text: "Atomic Overpass",
                        },
                        {
                          value: "OkpongloLegon",
                          text: "Okponglo Legon",
                        },
                        {
                          value: "AfricanRegent",
                          text: "African Regent (Spanner Junction)",
                        },
                        {
                          value: "37MilitaryHospital",
                          text: "37 Military Hospital",
                        },
                        {
                          value: "NationalTheatre",
                          text: "National Theatre",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "returnTimeShuttleAburiGirls",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Return Time",
                      isRequired: true,
                      choices: ["06:00", "07:00"],
                    },
                    {
                      type: "dropdown",
                      name: "retnpickupShuttleMaarif",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaarifInternational' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Maarif International",
                      isRequired: true,
                      choices: [
                        {
                          value: "MaarifInternational",
                          text: "Maarif International",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retnpickupShuttleMaryMother",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaryMother' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Pickup Location::Mary Mother",
                      isRequired: true,
                      choices: [
                        {
                          value: "MaryMotherSchool",
                          text: "Mary Mother",
                          visibleIf:
                            "{schoolbusShuttleSchoolList} = 'MaarifInternational'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "returnTimeShuttleSchBus",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} anyof ['MaarifInternational', 'MaryMother'] and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Return Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "13:30",
                          text: "13:30 - 14:30",
                        },
                        {
                          value: "15:30",
                          text: "15:30 - 16:30",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retndropoffShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Aburi Girls",
                      choices: [
                        {
                          value: "MainCampus",
                          text: "Main Campus",
                        },
                        {
                          value: "CamousAnnex",
                          text: "Camous Annex",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retndropoffShuttleMaryMother",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaryMother' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Mary Mother",
                      isRequired: true,
                      choices: [
                        {
                          value: "LocationA",
                          text: "Location (A) - Achimota, Dome, Kwabenya, Pokuase",
                          visibleIf:
                            "{schoolbusShuttleSchoolList} = 'MaarifInternational'",
                        },
                        {
                          value: "LocationB",
                          text: "Location (B) - Manet Spintex Road, Comm. 18 Spintex Road, Sakumono",
                        },
                        {
                          value: "LocationC",
                          text: "Location (C) - East Legon/Medina Road, Medina/Medina Road, Adenta/Medina Road, Oyarifa/Medina Road",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retndropoffShuttleMaarif",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} = 'MaarifInternational' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Maarif International",
                      isRequired: true,
                      choices: [
                        {
                          value: "LocationA",
                          text: "Location (A) - Criterion (Regimanuel), Manet Ville, Manet Court, Aglizah/Green Hotel Road, Comm. 18 Spintex Road, Sakumono",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "retndropoffShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'roundTripShuttle'",
                      title: "Drop-Off Location::Ashesi",
                      description:
                        "Drop-Off Location for Return to Campus (Inbound)",
                      choices: [
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                          enableIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                        },
                        {
                          value: "KwabenyaShell",
                          text: "Kwabenya SHELL",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "AtomicJunction",
                          text: "Atomic Junction/Overpass",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
                        },
                        {
                          value: "LegonOkponglo",
                          text: "Legon - Okponglo Bus Stop",
                          visibleIf: "{shuttleTripType} != 'roundTripShuttle'",
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
              visibleIf:
                "{shuttleTripType} anyof ['onewayDepatureShuttle', 'onewayReturn']",
              title: "One-Way Trip Details",
              elements: [
                {
                  type: "panel",
                  name: "departPanelShuttleOW",
                  visibleIf: "{shuttleTripType} = 'onewayDepatureShuttle'",
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
                      type: "dropdown",
                      name: "departurePeriodShuttleOW",
                      visibleIf:
                        "{shuttleTripType} = 'onewayDepatureShuttle' and {shuttleType} = 'Ashesi'",
                      startWithNewLine: false,
                      title: "Departure Period",
                      isRequired: true,
                      choices: [
                        {
                          value: "Morning",
                          visibleIf: "weekday({departureDateShuttleOW})!=5",
                        },
                        "Afternoon",
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "departTimeShuttleAsheshiOW",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Departure Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "08:00",
                          visibleIf: "{departurePeriodShuttleOW}='Morning'",
                        },
                        {
                          value: "10:30",
                          visibleIf: "{departurePeriodShuttleOW}='Morning'",
                        },
                        {
                          value: "11:00",
                          visibleIf: "{departurePeriodShuttleOW}='Morning'",
                        },
                        {
                          value: "14:30",
                          visibleIf: "{departurePeriodShuttleOW}='Afternoon'",
                          enableIf: "weekday({departureDateShuttleOW})!='5'",
                        },
                        {
                          value: "16:00",
                          visibleIf: "{departurePeriodShuttleOW}='Afternoon'",
                          enableIf: "weekday({departureDateShuttleOW})!='5'",
                        },
                        {
                          value: "17:30",
                          visibleIf: "{departurePeriodShuttleOW}='Afternoon'",
                          enableIf: "weekday({departureDateShuttleOW})='5'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "departTimeShuttleAburiGirlsOW",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Departure Time",
                      isRequired: true,
                      choices: ["06:30", "07:00"],
                    },
                    {
                      type: "dropdown",
                      name: "departTimeShuttleSchBusOW",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} anyof ['MaarifInternational', 'MaryMother'] and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Departure Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "05:45",
                          text: "05:45 - 06:30",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owdeptpickupShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Pickup Location::Aburi Girls",
                      choices: [
                        {
                          value: "MainCampus",
                          text: "Main Campus",
                        },
                        {
                          value: "CamousAnnex",
                          text: "Camous Annex",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owdeptpickupShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Pickup Location::Ashesi Shuttle",
                      description:
                        "Pickup Location for Departure from Campus (Outbound)",
                      choices: [
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                        },
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                          visibleIf:
                            "{shuttleTripType} != 'onewayDepatureShuttle'",
                        },
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                          visibleIf:
                            "{shuttleTripType} != 'onewayDepatureShuttle'",
                        },
                        {
                          value: "AdentaBarrier",
                          text: "Adenta Barrier (TOTAL Filling Station)",
                          visibleIf:
                            "{shuttleTripType} != 'onewayDepatureShuttle'",
                        },
                        {
                          value: "PresecBusStop",
                          text: "PRESEC Bus Stop",
                          visibleIf:
                            "{shuttleTripType} != 'onewayDepatureShuttle'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owdeptdropoffShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Drop-Off Location::Aburi Girls",
                      isRequired: true,
                      choices: [
                        "Madina",
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                        },
                        {
                          value: "AtomicOverpass",
                          text: "Atomic Overpass",
                        },
                        {
                          value: "OkpongloLegon",
                          text: "Okponglo Legon",
                        },
                        {
                          value: "AfricanRegent",
                          text: "African Regent (Spanner Junction)",
                        },
                        {
                          value: "37MilitaryHospital",
                          text: "37 Military Hospital",
                        },
                        {
                          value: "NationalTheatre",
                          text: "National Theatre",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owdeptdropoffShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayDepatureShuttle'",
                      title: "Drop-Off Location::Ashesi",
                      description:
                        "Drop-Off Location for Departure from Campus (Outbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                        },
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                          visibleIf:
                            "{shuttleTripType} != 'onewayDepatureShuttle'",
                        },
                        {
                          value: "KwabenyaShell",
                          text: "Kwabenya SHELL",
                        },
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
                {
                  type: "panel",
                  name: "returnPanelShuttleOW",
                  visibleIf: "{shuttleTripType} = 'onewayReturn'",
                  title: "Return Details",
                  elements: [
                    {
                      type: "text",
                      name: "returnDateShuttleOW",
                      title: "Return Date",
                      isRequired: true,
                      inputType: "date",
                    },
                    {
                      type: "dropdown",
                      name: "returnPeriodShuttleOW",
                      visibleIf:
                        "{shuttleTripType} = 'onewayReturn' and {shuttleType} = 'Ashesi'",
                      startWithNewLine: false,
                      title: "Return Period",
                      choices: [
                        {
                          value: "Morning",
                          visibleIf: "weekday({returnDateShuttleOW})!=0",
                        },
                        "Afternoon",
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "returnTimeShuttleAsheshiOW",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayReturn'",
                      title: "Return Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "08:00",
                          visibleIf: "{returnPeriodShuttleOW}='Morning'",
                        },
                        {
                          value: "10:30",
                          visibleIf: "{returnPeriodShuttleOW}='Morning'",
                        },
                        {
                          value: "11:00",
                          visibleIf: "{returnPeriodShuttleOW}='Morning'",
                        },
                        {
                          value: "14:30",
                          visibleIf: "{returnPeriodShuttleOW}='Afternoon'",
                          enableIf: "weekday({returnDateShuttleOW})!='0'",
                        },
                        {
                          value: "16:00",
                          visibleIf: "{returnPeriodShuttleOW}='Afternoon'",
                          enableIf: "weekday({returnDateShuttleOW})='0'",
                        },
                        {
                          value: "17:30",
                          visibleIf: "{returnPeriodShuttleOW}='Afternoon'",
                          enableIf: "weekday({returnDateShuttleOW})!='0'",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "returnTimeShuttleAburiOW",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'onewayReturn'",
                      title: "Return Time",
                      isRequired: true,
                      choices: ["06:00", "07:00"],
                    },
                    {
                      type: "dropdown",
                      name: "returnTimeShuttleSchBusOW",
                      visibleIf:
                        "{schoolbusShuttleSchoolList} anyof ['MaarifInternational', 'MaryMother'] and {shuttleTripType} = 'onewayReturn'",
                      title: "Return Time",
                      isRequired: true,
                      choices: [
                        {
                          value: "13:30",
                          text: "13:30 - 14:30",
                        },
                        {
                          value: "15:30",
                          text: "15:30 - 16:30",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owretnpickupShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'onewayReturn'",
                      title: "Pickup Location::Aburi Girls",
                      isRequired: true,
                      choices: [
                        {
                          value: "MainCampus",
                          text: "Main Campus",
                        },
                        {
                          value: "CamousAnnex",
                          text: "Camous Annex",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owretnpickupShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayReturn'",
                      title: "Pickup Location::Ashesi",
                      description:
                        "Pickup Location for Return to Campus (Inbound)",
                      isRequired: true,
                      choices: [
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                          visibleIf: "{shuttleTripType} != 'onewayReturn'",
                        },
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                        },
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                        },
                        {
                          value: "AdentaBarrier",
                          text: "Adenta Barrier (TOTAL Filling Station)",
                        },
                        {
                          value: "PresecBusStop",
                          text: "PRESEC Bus Stop",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owretndropoffShuttle2",
                      visibleIf:
                        "{shuttleType} = 'AburiGirls' and {shuttleTripType} = 'onewayReturn'",
                      title: "Drop-Off Location::Aburi Girls",
                      isRequired: true,
                      choices: [
                        "Madina",
                        {
                          value: "RitzJunction",
                          text: "Ritz Junction",
                        },
                        {
                          value: "AtomicOverpass",
                          text: "Atomic Overpass",
                        },
                        {
                          value: "OkpongloLegon",
                          text: "Okponglo Legon",
                        },
                        {
                          value: "AfricanRegent",
                          text: "African Regent (Spanner Junction)",
                        },
                        {
                          value: "37MilitaryHospital",
                          text: "37 Military Hospital",
                        },
                        {
                          value: "NationalTheatre",
                          text: "National Theatre",
                        },
                      ],
                    },
                    {
                      type: "dropdown",
                      name: "owretndropoffShuttle1",
                      visibleIf:
                        "{shuttleType} = 'Ashesi' and {shuttleTripType} = 'onewayReturn'",
                      title: "Drop-Off Location::Ashesi",
                      description: "Drop-Off Location for Return",
                      isRequired: true,
                      choices: [
                        {
                          value: "AccraMall",
                          text: "Accra Mall",
                          visibleIf: "{shuttleTripType} != 'onewayReturn'",
                        },
                        {
                          value: "AshesiCampus",
                          text: "Ashesi Campus",
                        },
                        {
                          value: "KwabenyaShell",
                          text: "Kwabenya SHELL",
                          visibleIf: "{shuttleTripType} != 'onewayReturn'",
                        },
                        {
                          value: "AtomicJunction",
                          text: "Atomic Junction/Overpass",
                          visibleIf: "{shuttleTripType} != 'onewayReturn'",
                        },
                        {
                          value: "LegonOkponglo",
                          text: "Legon - Okponglo Bus Stop",
                          visibleIf: "{shuttleTripType} != 'onewayReturn'",
                        },
                      ],
                    },
                    {
                      type: "boolean",
                      name: "owreturnLuggage",
                      title: "I have Luggage",
                      isRequired: true,
                    },
                    {
                      type: "dropdown",
                      name: "owreturnLuggageQty",
                      visibleIf:
                        "{owreturnLuggage} = true and {shuttleTripType} = 'roundTripShuttle'",
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
                {
                  value: "directBooking",
                  text: "Direct Booking",
                },
                {
                  value: "backofficeBooking",
                  text: "Backoffice Booking",
                },
              ],
            },
            {
              type: "radiogroup",
              name: "busTripType",
              title: "Trip Type",
              isRequired: true,
              choices: [
                {
                  value: "roundtripBus",
                  text: "Round Trip (Departure/Return)",
                },
                {
                  value: "onewayDeptureBus",
                  text: "One-Way (Departure)",
                },
                {
                  value: "onewayReturnBus",
                  text: "One-Way (Return)",
                },
              ],
              allowClear: true,
            },
            {
              type: "panel",
              name: "roundTripBusPanel",
              visibleIf: "{busTripType} = 'roundtripBus'",
              title: "Round Trip::Bus Rental",
              elements: [
                {
                  type: "panel",
                  name: "departPanelBus",
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
                      isRequired: true,
                      inputType: "date",
                    },
                    {
                      type: "text",
                      name: "departureTimeBus",
                      startWithNewLine: false,
                      title: "Departure Time",
                      isRequired: true,
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
                      isRequired: true,
                    },
                    {
                      type: "text",
                      name: "deptdropoffLocationBus",
                      title: "Drop-Off Location",
                      description:
                        "Provide location name, street or address, and closest landmark if any. (Example: Pokuasi, behind Main Station)",
                      isRequired: true,
                    },
                  ],
                },
                {
                  type: "panel",
                  name: "returnPanelBus",
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
                      isRequired: true,
                      inputType: "date",
                    },
                    {
                      type: "text",
                      name: "returnTimeBus",
                      startWithNewLine: false,
                      title: "Return Time",
                      isRequired: true,
                      inputType: "time",
                      min: "06:00",
                      max: "16:30",
                    },
                    {
                      type: "text",
                      name: "retnpickupLocationBus",
                      title: "Pickup Location",
                      description:
                        "Provide location name, street or address, and closest landmark if any. (Example: Kaneshie, behind Market)",
                      isRequired: true,
                    },
                    {
                      type: "text",
                      name: "retndropoffLocationBus",
                      title: "Drop-Off Location",
                      description:
                        "Provide location name, street or address, and closest landmark if any. (Example: Pokuasi, behind Main Station)",
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              type: "panel",
              name: "onewayTripBusPanel",
              visibleIf:
                "{busTripType} anyof ['onewayDeptureBus', 'onewayReturnBus']",
              title: "One-Way::Bus Rental",
              elements: [
                {
                  type: "panel",
                  name: "owdepartrenturnPanelBus",
                  title: "Departure/Return::Bus Rental",
                  elements: [
                    {
                      type: "html",
                      name: "owTermsConditions1",
                      html: "<b>Please Note:</b> To ensure the safety of our staff and passengers we adhere to strict operating times as stipulated in our T&Cs. <i>Click here</i> for more information on our allowable time schedules for rentals.",
                    },
                    {
                      type: "text",
                      name: "owdepartreturnDateBus",
                      title: "Date",
                      isRequired: true,
                      inputType: "date",
                    },
                    {
                      type: "text",
                      name: "owdepartreturnTimeBus",
                      startWithNewLine: false,
                      title: "Time",
                      isRequired: true,
                      inputType: "time",
                      min: "06:00",
                      max: "16:30",
                    },
                    {
                      type: "text",
                      name: "owpickupLocationBus",
                      title: "Pickup Location",
                      description:
                        "Provide location name, street or address, and closest landmark if any. (Example: Kaneshie, behind Market)",
                      isRequired: true,
                    },
                    {
                      type: "text",
                      name: "owdropoffLocationBus",
                      title: "Drop-Off Location",
                      description:
                        "Provide location name, street or address, and closest landmark if any. (Example: Pokuasi, behind Main Station)",
                      isRequired: true,
                    },
                  ],
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
              placeholder: "requesting@mail.xyz",
            },
            {
              type: "text",
              name: "phoneNumber",
              title: "Phone Number",
              description: "Provide a valid phone number",
              isRequired: true,
              inputType: "tel",
              placeholder: "0901234567",
            },
            {
              type: "text",
              name: "alternatePhoneNumber",
              startWithNewLine: false,
              title: "Phone Number",
              description: "Provide an alternate phone number",
              inputType: "tel",
              placeholder: "0901234567",
            },
          ],
        },
        {
          type: "panel",
          name: "paymentPanel",
          visibleIf:
            "{serviceType} = 'SchoolShuttle' or {serviceType} = 'BusRental'",
          title: "Payment Confirmation",
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
              validators: [
                {
                  type: "expression",
                  text: "Please complete payment to proceed.",
                  expression: "{paymentMade} = true",
                },
              ],
              choices: [
                {
                  value: "MTNMomo",
                  text: "MTN MoMo",
                },
                {
                  value: "VodaCash",
                  text: "Vodafone Cash",
                },
                {
                  value: "ATCash",
                  text: "AT Cash",
                },
                {
                  value: "BankTransfer",
                  text: "Bank Transfer",
                },
              ],
            },
            {
              type: "text",
              name: "paymentID",
              visibleIf: "{paymentMade} = true",
              startWithNewLine: false,
              title: "Payment ID",
              description:
                "Provide the payment or transaction reference code here. This will be confirmed by backoffice team.",
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
              imageLink:
                "https://api.surveyjs.io/private/Surveys/files?name=235229bf-8d68-4c6d-99a0-1b157351f777",
              imageHeight: "auto",
              imageWidth: "100%",
            },
          ],
        },
      ],
    },
    {
      name: "TripConfirmation",
      title: "Information Confirm",
      elements: [
        {
          type: "panel",
          name: "confirmationPanel",
          elements: [
            {
              type: "html",
              name: "confirmationPage",
              html: "<b>Complete Submission</b>\n<br><br>\n<p>I confirm that the information I have provided on this form is accurate. By submitting this form you agree to the terms and conditions of Okesban Shuttle/Bus Rental terms and conditions of service.</p>",
            },
            {
              type: "boolean",
              name: "confirmSubmission",
              title: "I confirm",
              isRequired: true,
            },
          ],
        },
        {
          type: "panel",
          name: "captchaPanel",
          elements: [
            {
              type: "html",
              name: "captchaText",
              html: "<b>I am not a robot</b>\n<br>\n<p>Please provide the sum of any two numbers from lists A and B below:</P",
            },
            {
              type: "dropdown",
              name: "adderA",
              title: "A",
              isRequired: true,
              choices: ["3", "5", "7"],
            },
            {
              type: "dropdown",
              name: "adderB",
              startWithNewLine: false,
              title: "B",
              isRequired: true,
              choices: ["2", "4", "6"],
            },
            {
              type: "text",
              name: "sumAB",
              title: "Sum of A and B",
              isRequired: true,
              inputType: "number",
              min: 5,
              max: 13,
            },
          ],
        },
      ],
    },
  ],
  gridLayoutEnabled: true,
  headerView: "advanced",
};
