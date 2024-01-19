import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import styles from "./GameScrollableTabs.module.css";

export default function GameScrollableTabs({
  tabs,
  activeTab,
  handleTabChange,
}) {
  const [value, setValue] = useState(String(activeTab));

  useEffect(() => {
    setValue(String(activeTab));
  }, [activeTab]);

  function handleChange(event, newValue) {
    setValue(newValue);
    handleTabChange(Number(newValue));
  }

  return (
    <TabContext value={value}>
      <Box className={styles["tabs-container"]}>
        <TabList
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs"
          onChange={handleChange}
          className={styles["tab-list"]}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.name}
              value={String(tab.id)}
              sx={{ color: "grey" }}
            />
          ))}
        </TabList>
        {tabs.map((tab) => (
          <TabPanel key={tab.id} value={String(tab.id)}>
            {tab.content}
          </TabPanel>
        ))}
      </Box>
    </TabContext>
  );
}
