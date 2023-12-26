import * as React from "react"
import {Box, ChakraProvider, Grid, theme,} from "@chakra-ui/react"
import {ColorModeSwitcher} from "./ColorModeSwitcher"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/index"

export const App = () => (<ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end"/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Home}/>
                </Routes>
            </BrowserRouter>
        </Grid>
    </Box>
</ChakraProvider>)
