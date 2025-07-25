/* eslint-disable react/prop-types */
import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase"
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import useDisclosure from "../hooks/useDisclosure";
import { toast } from "react-toastify";
const ContactCard = ( {contact} ) => {

  const {isOpen, onClose, onOpen} = useDisclosure();

  const deleteContact = async(id) => {
    try {
      await deleteDoc(doc(db, "contacts",id));
      toast.success("Contact Deleted Successfully");
      
    } catch (error) {
      console.log(error);
      
      
    }
  }
  return (
    <>
      <div key={contact.id} className="flex bg-amber-200 justify-between items-center rounded-lg p-2">
            <div className="flex gap-1">
            <HiOutlineUserCircle className="text-4xl text-orange-500"/>
            <div className="">
              <h2 className="font-medium">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
            </div>
            </div>
            <div className="flex text-3xl">
              <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
              <IoMdTrash onClick={() => deleteContact(contact.id)} 
              className="text-orange-500 cursor-pointer"/>
            </div>

          </div>
          <AddAndUpdateContact 
          contact={contact}
           isUpdate
            isOpen={isOpen} 
            onClose={onClose}
            />
    </>
  );
};

export default ContactCard