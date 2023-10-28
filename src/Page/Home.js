import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contract } from "./connector";

function Home() {
   const [Id, setId] = useState("");
   const [Title, setTitle] = useState("");
   const [Author, setAuthor] = useState("");
   const [TranId, setTranId] = useState("");
   const [Owner, setOwner] = useState("");
   const [BookId, setBookId] = useState("");
   const [BookDet, setBookDet] = useState("");
   const [Wallet, setWallet] = useState("");



 
   const handleId = (e) => {
      setId(e.target.value)
   } 

   const handleTitle = (e) => {
      setTitle(e.target.value)
   } 

   const handleAuthor = (e) => {
      setAuthor(e.target.value)
   } 

   const handleAddBook = async () => {
      try {
         let tx = await contract.addBook(Id.toString(), Title, Author)
         let wait = await tx.wait()
         alert(wait.transactionHash)
      } catch (error) {
         alert(error)
      }
   }

   const handleTid = (e) => {
      setTranId(e.target.value)
   }

   const handleNewOwner = (e) => {
      setOwner(e.target.value)
   } 

   const handleTransfer = async () => {
      try {
         let tx = await contract.transferOwnership(TranId.toString(), Owner)
         let wait = await tx.wait()
         console.log(wait);
         alert(wait.transactionHash)
      } catch (error) {
         alert(error)   
      }
   }

   const handleBookId = (e) => {
      setBookId(e.target.value)
   }

   const handleBookDetails = async () => {
      try {
         let tx = await contract.getBookDetails(BookId.toString())
         let arr = []
         tx.map(e => arr.push(e))

         setBookDet(arr)
      } catch (error) {
         alert(error)
         console.log(error);
      }
   }

   const handleWallet = async () => {
      if (!window.ethereum) {
         return alert('please install metamask');
      }

      const addr = await window.ethereum.request({
         method: 'eth_requestAccounts',
      });

      setWallet(addr[0])

   }

 return (
  <div>
   <h1 style={{ marginTop: "30px", marginBottom: "80px" }}>Book Details On Blockchain</h1>
       {!Wallet ?

          <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
          :
          <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
       }
   <Container>
    <Row>
     <Col style={{marginRight:"100px"}}>
      <div>

      
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleId} type="number" placeholder="Enter Registration number" value={Id} /> <br />
     
      <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleTitle} type="string" placeholder="Enter Book Title" value={Title} /> <br />
     
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleAuthor} type="string" placeholder="Enter Book Author" value={Author} /><br />
      
       <Button onClick={handleAddBook} style={{ marginTop: "10px" }} variant="primary">Add book</Button>
      </div>
     </Col>
      <Col>
         <div>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleTid} type="number" placeholder="Enter Registration Id" value={TranId} /> <br />

                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleNewOwner} type="string" placeholder="Enter New owner metamask address" value={Owner} /><br />

            <Button onClick={handleTransfer} style={{ marginTop: "10px" }} variant="primary">Transfer book ownership</Button>

         </div>
      </Col>    
   </Row>
   <Row style={{marginTop:"100px"}}>
     <Col >
       <div style={{ margin:"auto" }}>
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleBookId} type="number" placeholder="Enter book Id" value={BookId} /><br /> 

        <Button onClick={handleBookDetails} style={{ marginTop: "10px" }} variant="primary">Get Identity Details</Button> 
      {BookDet ? BookDet?.map(e => {
          return <p>{e.toString()}</p>
       }) : <p></p>}
      </div>
     </Col>
   </Row>
    
    
   </Container>

  </div>
 )
}

export default Home;
