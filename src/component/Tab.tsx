import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Page from "./Page";
import axios from "axios";
import { cleanup } from "@testing-library/react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "20px",
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data2 = [
    {
      name: "Page A",
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 1280,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 9800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 2200,
      amt: 2100,
    },
  ];

  const data3 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2000,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 2800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 4908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2470,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const shipment1 = ["Onion", 159, 6.0, 24, 4.0];
  const shipment2 = ["Cow", 159, 6.0, 24, 4.0];
  const shipment3 = ["Frozen yoghurt", 159, 6.0, 24, 4.0];

  function getData() {
    axios
      .get(
        "https://www.kamis.or.kr/service/price/xml.do?action=periodProductList&p_productclscode=02&p_startday=2018-01-01&p_endday=2018-12-31&p_itemcategorycode=200&p_itemcode=212&p_kindcode=00&p_productrankcode=04&p_countrycode=1101&p_convert_kg_yn=Y&p_cert_key=111&p_cert_id=222&p_returntype=json"
      )
      .then((response) => console.log(response));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="한우" {...a11yProps(0)} />
          <Tab label="양파" {...a11yProps(1)} />
          <Tab label="서비스 준비중" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Page
          data={data}
          forecast={shipment1}
          shipment={shipment1}
          plan={shipment1}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Page
          data={data2}
          forecast={shipment2}
          shipment={shipment2}
          plan={shipment2}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Page
          data={data3}
          forecast={shipment3}
          shipment={shipment3}
          plan={shipment3}
        />
      </TabPanel>
    </div>
  );
}
