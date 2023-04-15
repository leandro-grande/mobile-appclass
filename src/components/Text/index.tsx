import { ReactNode } from "react"
import { Texts } from "./styles"

type TextProps = {
  children: ReactNode;
  color?: string;
  size?: string;
  font?: 'regular' | 'medium' | 'bold';
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  center?: boolean;
}

export const Text = ({ color, size, font = 'regular', mb, ml, mr, mt, center = false, children }: TextProps) => {
  return (
    <Texts
      color={color}
      font={font}
      size={size}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      center={center}
    >
      {children}
    </Texts>
  )
}