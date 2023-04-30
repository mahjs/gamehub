import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Flex flexDirection="column" gap={3} marginLeft={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page is not exist"
            : "An unexpected error happened"}
        </Text>
        <Text color="blue.400">
          <Link to="/">Back to Home</Link>
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
