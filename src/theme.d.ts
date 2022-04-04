import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blob: Palette['primary'];
    swatch: Palette['primary'];
  }
  interface PaletteOptions {
    blob: PaletteOptions['primary'];
    swatch: PaletteOptions['primary'];
  }
}
