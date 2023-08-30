import { useState } from "react";
import ContactRow from "./contactRow";
import { useEffect } from "react";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({setSelectedContactId}) { 

    const [contacts, setContacts] = useState(dummyContacts)


    useEffect(()=>{
        async function fetchContacts() {
            try {
              const response = await fetch("https://jsonplaceholder.typicode.com/users")
              const data = await response.json();
              setContacts(data) 
            } catch (error) {
              console.error(error);
            }
          }
          fetchContacts()    
    },[])

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone Number</td>
            </tr>
            {contacts.map((contact) => {
          return <ContactRow key={contact.id} setSelectedContactId={setSelectedContactId} contact={contact} />;
        })}
          </tbody>
        </table>
    ); 
}


// create a toggle button
// create a togglebox div
// create a togglecontainer div
// create a toggle use effect element
// want to give togglebox div and toggle button OnClick attributes