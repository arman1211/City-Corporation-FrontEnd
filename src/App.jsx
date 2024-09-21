import { Button, useToast } from "@chakra-ui/react";
import "./App.css";

function App() {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            variant: "left-accent",
            isClosable: true,
            position: "top",
          })
        }
      >
        Show Toast
      </Button>
      <h2 className="btn bg-teal-400 p-5">Hello there</h2>
    </>
  );
}

export default App;
