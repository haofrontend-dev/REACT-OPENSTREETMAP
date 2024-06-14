/* eslint-disable no-unused-vars */
// * LIB
import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

// * IMPOR
import MainWrapper from "./components/MainWraper";
import PageWrapper from "./components/PageWrapper";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Header from "./components/layout/header/Header";
function App() {
    const [isSidebarOpen, setSidebarOpen] = React.useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
    return (
        <React.Fragment>
            <MainWrapper>
                {/* ------------------------------------------- */}
                {/* Sidebar */}
                {/* ------------------------------------------- */}
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    isMobileSidebarOpen={isMobileSidebarOpen}
                    onSidebarClose={() => setMobileSidebarOpen(false)}
                />
                {/* ------------------------------------------- */}
                {/* Main Wrapper */}
                {/* ------------------------------------------- */}
                <PageWrapper>
                    {/* ------------------------------------------- */}
                    {/* Header */}
                    {/* ------------------------------------------- */}
                    <Header
                        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
                    />
                    {/* ------------------------------------------- */}
                    {/* ------------------------------------------- */}
                    {/* PageContent */}
                    {/* ------------------------------------------- */}
                    <Container
                        sx={{
                            paddingTop: "20px",
                            maxWidth: "2000px",
                        }}
                        maxWidth={false}
                    >
                        {/* ------------------------------------------- */}
                        {/* Page Route */}
                        {/* ------------------------------------------- */}
                        <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
                            <Outlet />
                        </Box>
                        {/* ------------------------------------------- */}
                        {/* End Page */}
                        {/* ------------------------------------------- */}
                    </Container>
                </PageWrapper>
            </MainWrapper>
        </React.Fragment>
    );
}

export default App;
