// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
  HomeQrCode,
  HomeBuiltInAnalytics,
  HomeReview,
  HomeCategory,
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <HomeHero />

      <ContentStyle>
        <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />
        <HomeQrCode />
        <HomeBuiltInAnalytics />
        <HomeReview />

        {/* <HomeCleanInterfaces /> */}
        <HomeCategory />

        <HomePricingPlans />

        {/* <HomeLookingFor /> */}

        {/* <HomeAdvertisement /> */}
      </ContentStyle>
    </Page>
  );
}
