// Shorted Links
import { m } from 'framer-motion';
import { MdGroups } from 'react-icons/md';
import { FaUsers, FaCheckCircle } from 'react-icons/fa';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import StarIcon from '@mui/icons-material/Star';
// import GroupsIcon from '@mui/icons-material/Groups';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// react

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(-10, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

const ScreenStyle = styled(Box)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  borderRadius: 8,
  width: '100%',
  height: 600,
  // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  // [theme.breakpoints.up('sm')]: {
  //   maxWidth: 320,
  //   paddingRight: 4,
  //   borderRadius: 12,
  // },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
};

const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 },
};

const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;

  return (
    <MotionViewport disableAnimatedMobile={false}>
      {/* <RootStyle> */}
      <Container>
        <ScreenStyle>
          <Grid container>
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" order="2">
              <img src="https://66biolinks.com/demo/themes/altum/assets/images/index/short-link.png" alt="biolink" />
            </Grid>
            <Grid item xs={10} md={6} paddingTop="45px" paddingLeft="25px">
              {/* <Typography>icons</Typography> */}
              <Stack direction="column" gap="14px">
                <Box
                  sx={{
                    width: '55px',
                    height: '55px',
                    background: '#E6FFFA',
                    borderRadius: '50%',
                    padding: '0px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '30px',
                  }}
                >
                  <FaUsers fontSize="2.5rem" style={{ color: '#38B2AC' }} />
                </Box>
                <Typography variant="h3" marginLeft="14px">
                  Shorted Links
                </Typography>
                <Typography variant="body1" marginLeft="14px">
                  Yes! You can use our service as a shortener as well.
                </Typography>
                <Box>
                  <List>
                    <ListItem>
                      <ListItemIcon style={{ color: '#38B2AC' }}>
                        {' '}
                        <FaCheckCircle />
                      </ListItemIcon>
                      <ListItemText primary="Scheduling & expiration limits" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon style={{ color: '#38B2AC' }}>
                        {' '}
                        <FaCheckCircle />
                      </ListItemIcon>
                      <ListItemText primary="ountry, device & language targeting" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon style={{ color: '#38B2AC' }}>
                        {' '}
                        <FaCheckCircle />
                      </ListItemIcon>
                      <ListItemText primary="A/B Rotation" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon style={{ color: '#38B2AC' }}>
                        {' '}
                        <FaCheckCircle />
                      </ListItemIcon>
                      <ListItemText primary="Password protection, sensitive content warning" />
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </ScreenStyle>
      </Container>
      {/* </RootStyle> */}
    </MotionViewport>
  );
}
