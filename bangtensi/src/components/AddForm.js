import React, { useState } from 'react';
import { Form } from "react-bootstrap"
import './App.css';


const AddForm = () => {
    const [newKompetensi, setNewKompetensi] = useState({
        kompetensi:"", tanggal:"", jp:"", penyelenggara:""
    });

    const onInputChange = (e) => {
        setNewKompetensi({...newKompetensi,[e.target.name]: e.target.value})
    }

    const {kompetensi, tanggal, jp, penyelenggara} = newKompetensi;

    const handleSubmit = (e) => {
        e.preventDefault();
        newKompetensi(kompetensi, tanggal, jp, penyelenggara);
    }  
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Nama Komptensi :</Form.Label>
                <Form.Control
                    label="Nama Kompetensi :"
                    placeholder="Masukkan nama kompetensi"
                    name="kompetensi"
                    value={kompetensi}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group className='form'>
                <Form.Label>Tanggal :</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Masukkan tanggal pelaksanaan kompetensi"
                    name="tanggal"
                    value={tanggal}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group className='form'>
                <Form.Label>JP :</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Masukkan jumlah JP"
                    name="JP"
                    value={jp}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group className='form'>
                <Form.Label>Penyelenggara :</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Masukkan nama penyelenggara kompetensi"
                    name="penyelenggara"
                    value={penyelenggara}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
        </Form>
  
    </>
  )
}

export default AddForm
