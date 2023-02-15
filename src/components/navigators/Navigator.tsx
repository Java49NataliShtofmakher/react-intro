import { Box, AppBar, Tabs, Tab } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../model/NavigatorProps"
import '../navigators/navigators.css'
export const Navigator: React.FC<NavigatorProps> = ({ className, routes }) => {
    const [tabNumber, setTabNumber] = React.useState(0);
    function changeTabNumber(event:any, newNumber: number){
        setTabNumber(newNumber);
    }
    return <Box sx={{marginTop:'10vh'}}>
        <AppBar sx={{backgroundColor:'lightblue'}}>
            <Tabs value={tabNumber} onChange={changeTabNumber}>
               { getNavItems(routes)}
            </Tabs>
        </AppBar>
        <Outlet></Outlet>
    </Box>
}
function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
    return routes.map((r, index) => <Tab component={Link}
     to={r.path}
      label={r.label}
      key={index}/>)
}
function getActiveProps(isActive: boolean): React.CSSProperties {
    let res: React.CSSProperties = {};
    if (isActive) {
        res = { backgroundColor: "blue", color: "white", fontSize: "1.2em" }
    }
    return res;
}