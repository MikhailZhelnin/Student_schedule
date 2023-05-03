import React, {useEffect, useState} from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Modal,
  Typography,
  Button,
  styled, BoxProps, Select, MenuItem
} from "@mui/material";
import {MobileTimePicker} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";

import {useActions} from "../../../hooks/useActions";

import {ITimeTableItem} from "../../../global/interfaces";
import ColorModal from "../ColorModal";

interface ComponentProps {
  openModal: boolean
  handleModalToggle(): void
  isEditing: boolean
  editedItem: ITimeTableItem | undefined
}

const CustomBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '450px',
  width: '100%',
  backgroundColor: 'white',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    height: '100vh',
    maxWidth: '100%',
    borderRadius: '0',
    overflowY: 'scroll'
  }
}));

const styles = {
  title: {
    marginBottom: '10px',
    textAlign: 'center',
  },
  listItem: {
    display: 'flex',
  },
  listItemField: {
    width: '60%'
  }
}

const Component = ({openModal, handleModalToggle, isEditing, editedItem}: ComponentProps) => {

  const {addSubject, editSubject} = useActions()

  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [room, setRoom] = useState('0');
  const [day, setDay] = useState('Monday');
  const [timeFrom, setTimeFrom] = useState<Dayjs | null>( null);
  const [timeTo, setTimeTo] = useState<Dayjs | null>(null);
  const [color, setColor] = useState('');
  const [openColorModal, setOpenColorModal] = useState(false);

  const checkMinusValidity = (e: any) => {
    if(e < 0){
      return e = 0;
    } else {
      return e
    }
  }

  const handleSave = () => {
    if (subject !== '' && teacher !== '' && room !== '0' && room !== '' && timeFrom !== null && timeTo !== null) {
      if (!isEditing) {
        addSubject({
          id: new Date().getTime().toString(),
          subject: subject,
          teacher: teacher,
          room: room,
          day: day,
          time: {
            from: timeFrom,
            to: timeTo,
          },
          color: color,
        })
      } else {
        editSubject({
          id: editedItem!.id,
          subject: subject,
          teacher: teacher,
          room: room,
          day: day,
          time: {
            from: timeFrom,
            to: timeTo,
          },
          color: color,
        })
      }
      handleModalToggle();
      setSubject('');
      setTeacher('');
      setRoom('0');
      setDay('Monday');
      setTimeFrom(null);
      setTimeTo(null);
      setColor('');
    } else {
      return false
    }
  }

  useEffect(() => {
    if (isEditing) {
      setSubject(editedItem!.subject);
      setTeacher(editedItem!.teacher);
      setRoom(editedItem!.room);
      setDay(editedItem!.day);
      setTimeFrom(editedItem!.time.from);
      setTimeTo(editedItem!.time.to);
      setColor(editedItem!.color);
    } else {
      setSubject('');
      setTeacher('');
      setRoom('0');
      setDay('Monday');
      setTimeFrom(null);
      setTimeTo(null);
      setColor('');
    }
  }, [isEditing])

  return (
    <Modal
      open={openModal || isEditing}
      onClose={handleModalToggle}
      aria-labelledby="Time table modal"
      aria-describedby="Time table modal"
    >
      <CustomBox>
        <Typography variant='h5' sx={styles.title}>Add subject</Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <ListItemText>Subject: </ListItemText>
            <TextField
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              variant='outlined'
              sx={styles.listItemField}
            />
          </ListItem>
          <ListItem sx={styles.listItem}>
            <ListItemText>Teacher: </ListItemText>
            <TextField
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
              variant='outlined'
              sx={styles.listItemField}
            />
          </ListItem>
          <ListItem sx={styles.listItem}>
            <ListItemText>Room: </ListItemText>
            <TextField
              value={room}
              onChange={(e) => setRoom(checkMinusValidity(e.target.value))}
              type='number'
              variant='outlined'
              sx={styles.listItemField}
            />
          </ListItem>
          <ListItem sx={styles.listItem}>
            <ListItemText>Day: </ListItemText>
            <Select autoWidth value={day} sx={styles.listItemField} onChange={(e) => setDay(e.target.value)}>
              <MenuItem value={'Monday'}>Monday</MenuItem>
              <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
              <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
              <MenuItem value={'Thursday'}>Thursday</MenuItem>
              <MenuItem value={'Friday'}>Friday</MenuItem>
              <MenuItem value={'Saturday'}>Saturday</MenuItem>
              <MenuItem value={'Sunday'}>Sunday</MenuItem>
            </Select>
          </ListItem>
          <ListItem sx={styles.listItem}>
            <ListItemText>From: </ListItemText>
            <MobileTimePicker
              views={['hours', 'minutes']}
              value={timeFrom}
              onChange={(newValue) => setTimeFrom(newValue)}
              sx={styles.listItemField}
            />
          </ListItem>
          <ListItem sx={styles.listItem}>
            <ListItemText>To: </ListItemText>
            <MobileTimePicker
              views={['hours', 'minutes']}
              value={timeTo}
              onChange={(newValue) => setTimeTo(newValue)}
              sx={styles.listItemField}
            />
          </ListItem>
        </List>
        <Button sx={{backgroundColor: color && color, color: 'black'}} onClick={() => setOpenColorModal(!openColorModal)}>Select Color</Button>
        <ColorModal color={color} setColor={setColor} open={openColorModal} handleCloseColorModal={() => setOpenColorModal(!openColorModal)}/>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <Button onClick={handleModalToggle}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </CustomBox>
    </Modal>
  )
}

export default Component;