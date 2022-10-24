import "styled-components";

type Color = {
  font: string;
  background: string;
  border: string;
};

declare module "styled-components" {
  export interface DefaultTheme extends Color {}
}
