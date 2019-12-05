import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


export default createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#dce775'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#ff4081',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

// export default function Palette() {
//   return (
//     <ThemeProvider theme={theme}>
//       {/* <Button color="primary">Primary</Button>
//       <Button color="secondary">Secondary</Button> */}
//     </ThemeProvider>
//   );
// }