import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    svgs: {
      arrow: string;
      blob: string;
    };
    swatch: Palette['primary'];
  }
  interface PaletteOptions {
    svgs: {
      arrow: string;
      blob: string;
    };
    swatch: PaletteOptions['primary'];
  }
}
