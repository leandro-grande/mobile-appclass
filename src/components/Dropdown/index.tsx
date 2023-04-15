import SelectDropdown, { SelectDropdownProps } from "react-native-select-dropdown"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "styled-components/native"


export const DropDown = ({ ...rest }: SelectDropdownProps) => {
  const theme = useTheme();

  return (
    <SelectDropdown 
      buttonStyle={{
        height: 45, 
        width: '100%', 
        backgroundColor: theme.COLORS["INPUT-BG"], 
        borderRadius: 6, 
      }}
      buttonTextStyle={{ 
        fontSize: 18,
        textAlign: 'left', 
        fontFamily: theme.FONTS.REGULAR, 
        color: theme.COLORS["INPUT-TEXT"],
      }}
      renderDropdownIcon={() => (
        <Feather 
          name="chevron-down" 
          size={24} 
          color={theme.COLORS["INPUT-TEXT"]}  
        /> 
      )}
      dropdownIconPosition='right'
      {...rest}
    />
  )
}