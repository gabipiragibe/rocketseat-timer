//definição de tipos, só tipagem, somente código typescript
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// Definindo o tipo do tema, a partir do defaultTheme
type ThemeType = typeof defaultTheme;

// Extensão do módulo 'styled-components' para incluir o tipo do tema
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}