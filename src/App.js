import { Input,FormLabel,Button,HStack,Box,useToast, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import MaskAccountNumber from "./component/Masking";
import { Navbar } from "./component/Navbar";

function App() {
  const [accountNumber, setAccountNumber] = useState("");
  const [flag,setFlag]=useState(false)
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFlag(true)
    setLoading(true);

    toast({
      title: "We are Encrypting Your Account_Number ...Please Wait",
      status: "info",
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleInputChange = (event) => {
    setAccountNumber(event.target.value);
    setFlag(false)
   
  };

  return (
    <div>
      <Navbar/>

      <h1 style={{fontSize:"35px",textAlign:"center",marginTop:"35px"}}>WELCOME</h1>

      <form onSubmit={handleSubmit}>
      <HStack width={"45vw"} m={"auto"} p={"25px"}>
        <FormLabel>
          Account_Number: </FormLabel>
          <Input type="text" value={accountNumber} onChange={handleInputChange} placeholder="Enter 16 digits account number"/>
       
        <Button isDisabled={accountNumber.length<16 || accountNumber.length>16} type="submit">Submit</Button>
        </HStack> </form>
<Box m={"auto"} w={"35vw"} display={"flex"} justifyContent={"center"}>
      {loading?( <Spinner
                      
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />):flag?<Box width={"45vw"} m={"auto"} p={"25px"}>
                            <h1 style={{fontSize:"25px",textAlign:"center"}}>Two Operations that performed on your Account_Number</h1>
                            <br/>
                      <h2 style={{fontSize:"25px",textAlign:"center"}}><b>Operation 1 Result :</b>   <MaskAccountNumber accountNumber={accountNumber} startingSkip={4} endingSkip={4}/></h2>
                      <h2 style={{fontSize:"25px",textAlign:"center"}}><b>Operation 2 Result :</b>   <MaskAccountNumber accountNumber={accountNumber} startingSkip={6} endingSkip={2}/></h2></Box>:""}
      </Box>
    </div>
  );
}

export default App;
