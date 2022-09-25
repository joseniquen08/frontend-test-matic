type IFeatures = {
  image: string;
  title: string;
  content: string;
}[]

export const features: IFeatures = [
  {
    image: 'first-feature.svg',
    title: 'Online Banking',
    content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    image: 'second-feature.svg',
    title: 'Simple Budgeting',
    content: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    image: 'third-feature.svg',
    title: 'Fast Onboarding',
    content: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    image: 'fourth-feature.svg',
    title: 'Open API',
    content: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];