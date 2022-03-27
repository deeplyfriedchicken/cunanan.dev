import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ukiyodigital/">
        Ukiyo Digital
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default Copyright;
