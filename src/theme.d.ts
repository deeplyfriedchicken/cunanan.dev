import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blob: Palette['primary'];
  }
  interface PaletteOptions {
    blob: PaletteOptions['primary'];
  }
}
