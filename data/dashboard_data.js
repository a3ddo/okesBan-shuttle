// export const json = {
//   title: "OkesBan Shuttle Service - User Feedback Dashboard",
//   description:
//     "We'd love to hear how we’re doing. Please answer a few questions to help us improve our services.",
//   showQuestionNumbers: "off",
//   completedHtml:
//     "<h3>🎉 Thank you for your feedback!</h3><p>Your input helps us serve you better.</p>",
//   pages: [
//     {
//       name: "dashboard_feedback",
//       elements: [
//         {
//           type: "rating",
//           name: "satisfaction",
//           title: "How satisfied are you with our shuttle services?",
//           rateMin: 1,
//           rateMax: 5,
//           minRateDescription: "Very Dissatisfied",
//           maxRateDescription: "Very Satisfied",
//         },
//         {
//           type: "checkbox",
//           name: "services_used",
//           title: "Which of our services have you used?",
//           isRequired: true,
//           choices: ["Ashesi Shuttle", "Bus Rentals", "SchoolBus Pickup"],
//         },
//         {
//           type: "comment",
//           name: "feature_requests",
//           title: "What features or improvements would you like to see?",
//         },
//         {
//           type: "radiogroup",
//           name: "booking_experience",
//           title: "How easy was it to book a ride?",
//           isRequired: true,
//           choices: [
//             "Very Easy",
//             "Somewhat Easy",
//             "Neutral",
//             "Somewhat Difficult",
//             "Very Difficult",
//           ],
//         },
//         {
//           type: "boolean",
//           name: "recommendation",
//           title: "Would you recommend us to others?",
//           labelTrue: "Yes",
//           labelFalse: "No",
//         },
//       ],
//     },
//   ],
// };

// // Survey results
// const firstResult = {
//   organization_type: "In-house",
//   developer_count: "1",
//   vertical_market: "Education",
//   product_discovering: "GitHub",
//   javascript_frameworks: ["jQuery"],
//   backend_language: ["Ruby"],
//   useproduct: "Yes",
//   usecomponents: ["Survey Library (Runner)"],
//   supported_devices: ["Desktop", "Tablet", "Mobile"],
//   native_mobile_support: 2,
//   product_alternative: "Self-developed solution",
//   product_recommend: "Yes",
//   nps_score: 6,
//   product_improvement:
//     "The lack of accessibility is a huge disadvantage. That's one reason why I cannot use it in all my projects.",
//   native_framework: "",
//   survey_cloud_platform: "",
//   favorite_functionality: "",
// };

// const secondResult = {
//   organization_type: "Consulting",
//   developer_count: "3-5",
//   vertical_market: "Government (federal, state, local)",
//   product_discovering: "Search engine",
//   javascript_frameworks: ["Vue", "jQuery", "other"],
//   backend_language: ["Python", "Node.js"],
//   useproduct: "Yes",
//   usecomponents: ["Survey Library (Runner)"],
//   supported_devices: ["Desktop"],
//   product_alternative: "Develop ourselves",
//   product_recommend: "Yes",
//   nps_score: 8,
//   native_mobile_support: "",
//   native_framework: "",
//   survey_cloud_platform: "",
//   favorite_functionality: "",
//   product_improvement: "",
// };

// export const data = [firstResult, secondResult];

export const json = {
  title: "OkesBan Shuttle Service - User Feedback Dashboard",
  description:
    "We'd love to hear how we’re doing. Please answer a few questions to help us improve our services.",
  showQuestionNumbers: "off",
  completedHtml:
    "<h3>🎉 Thank you for your feedback!</h3><p>Your input helps us serve you better.</p>",
  pages: [
    {
      name: "dashboard_feedback",
      elements: [
        // Demographics
        {
          type: "dropdown",
          name: "organization_type",
          title: "What type of organization do you work for?",
          isRequired: true,
          choices: ["In-house", "Consulting", "Other"],
        },
        {
          type: "radiogroup",
          name: "developer_count",
          title: "How many developers are on your team?",
          isRequired: true,
          choices: ["1", "3-5", "Other"],
        },
        {
          type: "dropdown",
          name: "vertical_market",
          title: "Which vertical market do you operate in?",
          isRequired: true,
          choices: ["Education", "Government (federal, state, local)", "Other"],
        },

        // Product discovery & tech stack
        {
          type: "dropdown",
          name: "product_discovering",
          title: "How did you discover our product?",
          isRequired: true,
          choices: ["GitHub", "Search engine", "Other"],
        },
        {
          type: "checkbox",
          name: "javascript_frameworks",
          title: "Which JavaScript frameworks do you use?",
          isRequired: true,
          choices: ["jQuery", "Vue", "Other"],
        },
        {
          type: "checkbox",
          name: "backend_language",
          title: "Which backend languages do you use?",
          isRequired: true,
          choices: ["Ruby", "Python", "Node.js", "Other"],
        },

        // Product usage
        {
          type: "boolean",
          name: "useproduct",
          title: "Are you using our product?",
          isRequired: true,
          labelTrue: "Yes",
          labelFalse: "No",
        },
        {
          type: "checkbox",
          name: "usecomponents",
          title: "Which components of our product are you using?",
          visibleIf: "{useproduct} = true",
          isRequired: true,
          choices: ["Survey Library (Runner)", "Other"],
        },
        {
          type: "checkbox",
          name: "supported_devices",
          title: "Which devices do you support?",
          visibleIf: "{useproduct} = true",
          isRequired: true,
          choices: ["Desktop", "Tablet", "Mobile"],
        },
        {
          type: "rating",
          name: "native_mobile_support",
          title: "How would you rate our native mobile support?",
          visibleIf: "{useproduct} = true",
          rateMin: 1,
          rateMax: 5,
          minRateDescription: "Poor",
          maxRateDescription: "Excellent",
        },

        // Alternatives & recommendation
        {
          type: "radiogroup",
          name: "product_alternative",
          title: "What alternative did you consider before ours?",
          isRequired: true,
          choices: ["Self-developed solution", "Develop ourselves", "Other"],
        },
        {
          type: "boolean",
          name: "product_recommend",
          title: "Would you recommend our product to others?",
          isRequired: true,
          labelTrue: "Yes",
          labelFalse: "No",
        },

        // Net Promoter Score
        {
          type: "rating",
          name: "nps_score",
          title: "On a scale from 0 to 10, how likely are you to recommend us?",
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Not at all likely",
          maxRateDescription: "Extremely likely",
        },

        // Open-ended feedback
        {
          type: "comment",
          name: "product_improvement",
          title: "What improvements would you like to see?",
        },
        {
          type: "comment",
          name: "favorite_functionality",
          title: "What is your favorite functionality?",
        },
        {
          type: "text",
          name: "native_framework",
          title: "Which native frameworks do you use?",
        },
        {
          type: "text",
          name: "survey_cloud_platform",
          title: "Which survey cloud platform do you use?",
        },

        // Service-specific feedback
        {
          type: "rating",
          name: "satisfaction",
          title: "How satisfied are you with our shuttle services?",
          rateMin: 1,
          rateMax: 5,
          minRateDescription: "Very Dissatisfied",
          maxRateDescription: "Very Satisfied",
        },
        {
          type: "checkbox",
          name: "services_used",
          title: "Which of our services have you used?",
          isRequired: true,
          choices: ["Ashesi Shuttle", "Bus Rentals", "SchoolBus Pickup"],
        },
        {
          type: "comment",
          name: "feature_requests",
          title:
            "What features or improvements would you like to see in our shuttle service?",
        },
        {
          type: "radiogroup",
          name: "booking_experience",
          title: "How easy was it to book a ride?",
          isRequired: true,
          choices: [
            "Very Easy",
            "Somewhat Easy",
            "Neutral",
            "Somewhat Difficult",
            "Very Difficult",
          ],
        },
      ],
    },
  ],
};

// Survey results
const firstResult = {
  organization_type: "In-house",
  developer_count: "1",
  vertical_market: "Education",
  product_discovering: "GitHub",
  javascript_frameworks: ["jQuery"],
  backend_language: ["Ruby"],
  useproduct: "Yes",
  usecomponents: ["Survey Library (Runner)"],
  supported_devices: ["Desktop", "Tablet", "Mobile"],
  native_mobile_support: 2,
  product_alternative: "Self-developed solution",
  product_recommend: "Yes",
  nps_score: 6,
  product_improvement:
    "The lack of accessibility is a huge disadvantage. That's one reason why I cannot use it in all my projects.",
  favorite_functionality: "",
  native_framework: "",
  survey_cloud_platform: "",
  satisfaction: undefined,
  services_used: [],
  feature_requests: "",
  booking_experience: undefined,
};

const secondResult = {
  organization_type: "Consulting",
  developer_count: "3-5",
  vertical_market: "Government (federal, state, local)",
  product_discovering: "Search engine",
  javascript_frameworks: ["Vue", "jQuery", "other"],
  backend_language: ["Python", "Node.js"],
  useproduct: "Yes",
  usecomponents: ["Survey Library (Runner)"],
  supported_devices: ["Desktop"],
  native_mobile_support: undefined,
  product_alternative: "Develop ourselves",
  product_recommend: "Yes",
  nps_score: 8,
  product_improvement: "",
  favorite_functionality: "",
  native_framework: "",
  survey_cloud_platform: "",
  satisfaction: undefined,
  services_used: [],
  feature_requests: "",
  booking_experience: undefined,
};

export const data = [firstResult, secondResult];
