import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {Box, Button, Modal, Typography, Radio} from "@mui/material";
import {colorsData} from "../../data";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

interface ColorModalProps {
  color: string
  setColor: Dispatch<SetStateAction<string>>
  open: boolean
  handleCloseColorModal(): void
}

const ColorModal = ({color, setColor, open, handleCloseColorModal}: ColorModalProps) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
  }

  const controlProps = (item: string) => ({
    checked: color === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Modal
      open={open}
      onClose={handleCloseColorModal}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{...style, width: 'auto'}}>
        <Typography>Select Color</Typography>
        <div>
          {colorsData.filter(color => color.color === 'red').map(color => (
            <Radio key={color.id} {...controlProps(`${color.hex}`)} sx={{color: `${color.hex}`, '&.Mui-checked': {color: `${color.hex}`}}}/>
          ))}
        </div>
        <div>
          {colorsData.filter(color => color.color === 'purple').map(color => (
          <Radio key={color.id} {...controlProps(`${color.hex}`)} sx={{color: `${color.hex}`, '&.Mui-checked': {color: `${color.hex}`}}}/>
        ))}
        </div>
        <div>
          {colorsData.filter(color => color.color === 'blue').map(color => (
            <Radio key={color.id} {...controlProps(`${color.hex}`)} sx={{color: `${color.hex}`, '&.Mui-checked': {color: `${color.hex}`}}}/>
          ))}
        </div>
        <div>
          {colorsData.filter(color => color.color === 'teal').map(color => (
            <Radio key={color.id} {...controlProps(`${color.hex}`)} sx={{color: `${color.hex}`, '&.Mui-checked': {color: `${color.hex}`}}}/>
          ))}
        </div>
        <div>
          {colorsData.filter(color => color.color === 'yellow').map(color => (
            <Radio key={color.id} {...controlProps(`${color.hex}`)} sx={{color: `${color.hex}`, '&.Mui-checked': {color: `${color.hex}`}}}/>
          ))}
        </div>
        <div>
          {colorsData.filter(color => color.color === 'grey').map(color => (
          <Radio key={color.id} {...controlProps(`${color.hex}`)} sx={{color: `${color.hex}`, '&.Mui-checked': {color: `${color.hex}`}}}/>
        ))}
        </div>
        <Button onClick={handleCloseColorModal}>Save</Button>
      </Box>
    </Modal>
  )
}

export default ColorModal;