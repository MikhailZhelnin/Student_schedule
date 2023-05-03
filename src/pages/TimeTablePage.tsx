import React, {useState} from "react";
import {Box, IconButton} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import WeekTabs from "../components/Tabs/WeekTabs";
import WeekTabsPanel from "../components/Tabs/WeekTabsPanel";
import TimeTableModal from "../components/Modals/TimeTableModal/TimeTableModal";

import {useTypedSelector} from "../hooks/usetypedSelector";
import {tabsData} from "../data";

import {ITimeTableItem} from "../global/interfaces";

export const TimeTablePage = () => {

  const {subjects} = useTypedSelector(state => state.timeTable);
  const availableDays = [...new Set(subjects.map(item => item.day.toLowerCase()))];

  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState<ITimeTableItem>();
  const [value, setValue] = useState(0);

  const handleModalToggle = () => {
    if (isEditing) {
      setIsEditing(false);
      setOpenModal(false);
    }
    if (!isEditing) {
      setOpenModal(!openModal);
    }
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleEdit = (id: string) => {
    const editedItem = subjects.filter(item => item.id === id)[0];
    setEditedItem(editedItem);
    setIsEditing(true);
  }

  return (
    <Box sx={{marginTop: '80px'}}>
      <WeekTabs value={value} handleTabChange={handleTabChange} availableDays={availableDays}/>
      {tabsData.map((tab, index) => (
        <WeekTabsPanel key={index} value={value} index={tab.id} subjects={subjects} tab={tab} handleEdit={handleEdit}/>
      ))}
      <IconButton
        onClick={() => setOpenModal(!openModal)}
        aria-label='add'
        sx={{position: 'fixed', right: '10px', bottom: '10px'}}
      >
        <AddCircleIcon sx={{height: '50px', width: '50px', color: 'black'}}/>
      </IconButton>
      <TimeTableModal
        editedItem={editedItem}
        openModal={openModal}
        isEditing={isEditing}
        handleModalToggle={handleModalToggle}
      />
    </Box>
  )
}