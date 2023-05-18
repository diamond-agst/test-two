import React from "react";
import "./styles.scss"
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
    },
  },
};
  
  

const Selector = ({name, setIpOwnerPage, data, item, onChange, onChangeSocial}) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

   function getStyles(name, personName, theme, ) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

    return(
        <div className="inputBlock">
            <p>{name}</p>
            <div style={{height: "fit-content", display: "flex", width: "100%"}}>
            <FormControl className="selectorBlock" sx={item ? { m: 1, width: "30%", mt: 3 } : { m: 1, width: "100%", mt: 3 }}>
                <Select
                displayEmpty
                value={personName} 
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                    return <em>Выбрать</em>;
                    }

                    return selected.join(', ');
                }}
                MenuProps={MenuProps}
                className="selectorItem"
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem disabled value="">
                    <em>Выбрать</em>
                </MenuItem>
                {data.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    onClick={() => {
                        if(setIpOwnerPage){
                            setIpOwnerPage(name)
                            onChange(name)
                        }else if(item){
                            item["name"] = name
                            
                        }else{
                            onChange(name)
                        }
                    }
                    }
                    style={getStyles(name, personName, theme)}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            {item && item["name"] !== "Выбрать" &&
            <div className="socialMediaWeb">
                <input onChange={(e) => {
                    item["web"] = e.target.value
                    onChangeSocial(socialMedia => ({
                        ...socialMedia,
                        ...item
                      }))
                }} style={{width: "100%"}} placeholder="example.com/example"/>
            </div>}
            </div>
            
        </div>
    )
}

export default Selector;