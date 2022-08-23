// muiii
import {
  Box,
  Container,
  styled,
  Stack,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  CardHeader,
  Tooltip,
  Button,
} from '@mui/material';
// _____hooks___
// _____styling____

// react-icons
import {
  FaRegIdCard,
  FaFile,
  FaProjectDiagram,
  FaLinkedin,
  FaPinterest,
  FaGoogle,
  FaQuora,
  FaTwitter,
  FaTiktok,
} from 'react-icons/fa';
import { WiMoonAltWaxingCrescent6 } from 'react-icons/wi';
import { BsFacebook } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 10),
}));

const HomeCategory = () => {
  return (
    <RootStyle>
      <Container>
        <Grid Container display="flex" alignItems="start" flexWrap="wrap" gap="25px">
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, minHeight: '210px', background: 'text.primary' }}>
              <CardHeader
                sx={{ background: 'text.primary' }}
                avatar={
                  <Avatar aria-label="recipe">
                    <FaFile />
                  </Avatar>
                }
                title="File links"
              />
              <CardContent>
                <Typography variant="body1" color="text.disabled">
                  Generate dynamic links to files and benefit from tracking, protection, pixels & expiration features.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, minHeight: '210px' }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <FaRegIdCard />
                  </Avatar>
                }
                // action={
                //   <IconButto aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButto>
                // }
                title=" Vcard links"
              />
              <CardContent>
                <Stack direction="row">
                  <Typography variant="body1" color="text.disabled">
                    Generate dynamic vcard links to your contact downloadable card and benefit from tracking,
                    protection, pixels & expiration features.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, minHeight: '210px' }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <FaRegIdCard />
                  </Avatar>
                }
                // action={
                //   <IconButto aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButto>
                // }
                title="Tool"
              />
              <CardContent>
                <Stack direction="row">
                  <Typography variant="body1" color="text.disabled">
                    We are also offering you a set of 35 amount of useful web tools as a bonus.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ minWidth: 345, minHeight: '110px', maxHeight: '140px' }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <TbWorld />
                  </Avatar>
                }
                // action={
                //   <IconButto aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButto>
                // }
                title=" Tracking pixels
                "
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Tooltip title="Linkedin" arrow placement="top-end" sx={{ color: 'blue' }}>
                  <Button
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', padding: 0 }}
                  >
                    <FaLinkedin style={{ color: 'blue', marginRight: 10, width: '100%', fontSize: '20px' }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Tiktok" arrow placement="top-end" sx={{ color: 'blue' }}>
                  <Button
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', padding: 0 }}
                  >
                    <FaTiktok style={{ color: 'blue', marginRight: 10, width: '100%', fontSize: '20px' }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Quora" arrow placement="top-end" sx={{ color: 'blue' }}>
                  <Button
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', padding: 0 }}
                  >
                    <FaQuora style={{ color: 'blue', marginRight: 10, width: '100%', fontSize: '20px' }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Twitter" arrow placement="top-end" sx={{ color: 'blue' }}>
                  <Button
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', padding: 0 }}
                  >
                    <FaTwitter style={{ color: 'blue', marginRight: 10, width: '100%', fontSize: '20px' }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Pinterest" arrow placement="top-end" sx={{ color: 'blue' }}>
                  <Button
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', padding: 0 }}
                  >
                    <FaPinterest style={{ color: 'blue', marginRight: 10, width: '100%', fontSize: '20px' }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Google" arrow placement="top-end" sx={{ color: 'blue' }}>
                  <Button
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', padding: 0 }}
                  >
                    <FaGoogle style={{ color: 'blue', marginRight: 10, width: '100%', fontSize: '20px' }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Linkedin" arrow placement="top-end" sx={{ color: 'blue' }}>
                  <Button
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', padding: 0 }}
                  >
                    <FaLinkedin style={{ color: 'blue', marginRight: 10, width: '100%', fontSize: '20px' }} />
                  </Button>
                </Tooltip>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, minHeight: '100px', maxHeight: '140px' }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <TbWorld />
                  </Avatar>
                }
                // action={
                //   <IconButto aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButto>
                // }
                title=" Custom domains
                "
              />
              <CardContent>
                <Stack direction="row">
                  <Typography variant="body1" color="text.disabled">
                    Connect your own domain or use our predefined ones.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, minHeight: '110px', maxHeight: '140px' }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <FaProjectDiagram />
                  </Avatar>
                }
                // action={
                //   <IconButto aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButto>
                // }
                title="Projects
                "
              />
              <CardContent>
                <Stack direction="row">
                  <Typography variant="body1" color="text.disabled">
                    Easiest way to categorize your managed resources.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
};
export default HomeCategory;
