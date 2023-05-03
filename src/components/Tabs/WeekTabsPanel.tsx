import React from "react";
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";

import {useActions} from "../../hooks/useActions";

import {ITimeTableItem} from "../../global/interfaces";
import {ITabItem} from "../../global/interfaces/ITabItem";

interface WeekTabProps {
  value: number
  index: number
  subjects: ITimeTableItem[]
  tab: ITabItem
  handleEdit: (id: string) => void
}

const WeekTabsPanel = ({value, index, subjects, tab, handleEdit}: WeekTabProps) => {

  const {deleteSubject} = useActions()

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          {subjects.filter(item => item.day.toLowerCase() === tab.text.toLowerCase()).map(item => (
            <Card key={item.id} sx={{backgroundColor: item.color && item.color}}>
              <CardContent>
                <Typography component='span' variant='h6'>{item.subject}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleEdit(item.id)}>Edit</Button>
                <Button onClick={() => deleteSubject(item)}>Delete</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </div>
  )
}

export default WeekTabsPanel;