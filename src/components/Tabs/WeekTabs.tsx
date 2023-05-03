import React from "react";
import {Tab, Tabs} from "@mui/material";

import {tabsData} from "../../data";

interface WeekTabsProps {
    value: number,
    handleTabChange(event: React.SyntheticEvent, newValue: number): void
    availableDays: string[]
}

const WeekTabs = ({value, handleTabChange, availableDays}: WeekTabsProps) => {
    return (
      <Tabs
        value={value}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabsData.map(tab => (
          <Tab key={tab.id} label={tab.text} disabled={!availableDays.includes(tab.text.toLowerCase())}/>
        ))}
      </Tabs>
    )
}

export default WeekTabs;