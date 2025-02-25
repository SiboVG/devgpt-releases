import React from "react";
import { Box } from "@chakra-ui/react";
const SyncLoader = require('react-spinners/SyncLoader');

const Loader = () => {
  return (
    <Box p={5} pt={10}>
      <SyncLoader color="#3e68ff" />
    </Box>
  );
};

export default Loader;
