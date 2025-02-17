import HotelDashboard from "./HotelDashboard";

export default {
  title: "Hotel/Dashboard",
  component: HotelDashboard,
  tags: ["autodocs"], // Add this if using Storybook 7+
};

export const Default = {
  render: () => <HotelDashboard />,
};
