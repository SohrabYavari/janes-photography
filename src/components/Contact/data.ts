export interface pricingProps {
  id: number;
  title: string;
  description: string;
  listItem1: string;
  listItem2: string;
  listItem3: string;
  listItem4: string;
  listItem5: string;
  price: string;
}

export const pricingData = [
  {
    id: 1,
    title: "Basic Package",
    description:
      "The Basic Package is perfect for couples looking for essential coverage of their special day.",
    listItem1: "Up to 4 hours of coverage",
    listItem2: "One photographer",
    listItem3: "200-300 edited photos",
    listItem4: "Online gallery for viewing and sharing",
    listItem5: "USB drive with high-resolution images",
    price: "1,000 - 2,000",
  },
  {
    id: 2,
    title: "Standard Package",
    description:
      "The Standard Package offers extended coverage and additional features to capture your wedding day in more detail.",
    listItem1: "Up to 8 hours of coverage",
    listItem2: "One photographer and one assistant",
    listItem3: "400-600 edited photos",
    listItem4: "Online gallery and mobile app for easy viewing and sharing",
    listItem5: "20-page custom photo album",
    price: "2,500 - 3,500",
  },
  {
    id: 3,
    title: "Premium Package",
    description:
      "The Premium Package provides full-day coverage and additional services to ensure every moment is captured.",
    listItem1: "Full-day coverage (up to 12 hours)",
    listItem2: "Two photographers",
    listItem3: "600-800 edited photos",
    listItem4: "Pre-wedding consultation",
    listItem5: "30-page custom photo album",
    price: "4,000 - 6,000",
  },
  {
    id: 4,
    title: "Luxury Package",
    description:
      "The Luxury Package is designed for couples who want the most comprehensive coverage, including extra sessions and custom albums.",
    listItem1: "Full-day coverage plus rehearsal dinner or post-wedding brunch",
    listItem2: "Two photographers and one assistant",
    listItem3: "800-1,000 edited photos",
    listItem4: "Engagement and/or bridal portrait session",
    listItem5: "50-page custom leather-bound photo album",
    price: "6,500 - 10,000+",
  },
  {
    id: 5,
    title: "Custom Package",
    description:
      "Create your own package by selecting the specific services you need, tailored to fit your unique wedding day.",
    listItem1: "Customizable coverage hours",
    listItem2: "Choice of photographers and assistants",
    listItem3: "Engagement and bridal sessions optional",
    listItem4: "Various album and print options available",
    listItem5: "Travel and additional services customizable",
    price: "Varies",
  },
];
