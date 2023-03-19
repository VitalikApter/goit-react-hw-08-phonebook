import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data.message);
        }
    },
    {
        condition: (contact, { getState }) => {
            const { contacts } = getState();
            const checkName = contacts.items.find(
                item => item.name.toLowerCase() === contact.name.toLowerCase()
            );
            if (checkName) {
                alert(`${contact.name} has already added in contacts`);
                return false;
            }
        },
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data.message);
        }
    }
);