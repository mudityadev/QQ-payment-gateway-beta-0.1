import React, { useState, useEffect } from 'react';
import DashboardLayout from '../utils/DashboardLayout';
import { getUserFromLocalCookie } from '../../lib/auth';
import { fetcher } from '@/lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';
import Modal from 'react-modal';



const Key = () => {
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleKey, setVisibleKey] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newKeyTitle, setNewKeyTitle] = useState('');
  const [error, setError] = useState(null);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const createKey = async () => {
    setError(null);

    try {
      const currentUser = await getUserFromLocalCookie();
      const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/keys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentUser: currentUser,
          title_key: newKeyTitle,
        }),
      });

      if (!response.success) {
        throw new Error(response.message || 'An error occurred while creating the key.');
      }

      toast.success('Your key is successfully generated.', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });

      // Update the keys list
      setKeys([...keys, response.key]);
    } catch (err) {
      setError(err.message);
    } finally {
      closeModal();
    }
  };


  useEffect(() => {
    const fetchKeys = async () => {
      try {
        setLoading(true);
        const currentUser = await getUserFromLocalCookie();

        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/key/getKey`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currentUser: currentUser,
          }),
        });
        setKeys(response);
      } catch (error) {
        console.error('Error fetching keys:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKeys();
  }, []);

  const toggleVisibility = (keyId) => {
    if (visibleKey === keyId) {
      setVisibleKey(null);
    } else {
      setVisibleKey(keyId);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast(`Copied ${text}!`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };

  return (
    <DashboardLayout title="Key">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Keys</h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4" onClick={openModal}>Add Key</button>
        {loading ? (
          <div className="flex justify-start items-start">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
          </div>
        ) : (
          <table className="w-full bg-white shadow-md rounded mb-4 table-fixed">
            <thead>
              <tr>
                <th className="w-1/6 text-left px-4 py-2">Title</th>
                <th className="w-2/6 text-left px-4 py-2">Publish Key</th>
                <th className="w-2/6 text-left px-4 py-2">Secret Key</th>
                <th className="w-1/12 text-left px-4 py-2">Status</th>
                <th className="w-1/12 text-left px-4 py-2">Delete</th>
              </tr>
            </thead>
           
         
              <tbody>
                {keys.map((key) => (
                  <tr key={key.id}>
                    <td className="border px-4 py-2">{key.title}</td>
                    <td className="border px-4 py-2">
                      <div
                        className={`cursor-pointer w-48 overflow-hidden overflow-ellipsis whitespace-nowrap ${visibleKey === key.id ? '' : 'blur'
                          }`}
                        onClick={() => {
                          toggleVisibility(key.id);
                          copyToClipboard(key.publish_key);
                        }}
                      >
                        {key.publish_key}
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      <div
                        className={`cursor-pointer w-48 overflow-hidden overflow-ellipsis whitespace-nowrap ${visibleKey === key.id ? '' : 'blur'
                          }`}
                        onClick={() => {
                          toggleVisibility(key.id);
                          copyToClipboard(key.secret_key);
                        }}
                      >
                        {key.secret_key}
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      {/* <span className="bg-green-500 text-white py-1 px-2 rounded"></span> */}
                      <BsCheckCircleFill className="mr-2 inline-block" />
                    </td>
                    <td className="border px-4 py-2">
                      <button className="text-red-500 hover:text-red-700">
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

         
          </table>
        )}
      </div>
      <ToastContainer 
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Key Title Modal"
        style={{
          content: {
            width: '400px',
            height: '200px',
            margin: 'auto',
          },
        }}
      >
        <h2 className="text-lg text-black font-bold mb-4">Create Key</h2>
        <label htmlFor="keyTitle" className="block text-black text-sm">Key Title</label>
        <input
          type="text"
          id="keyTitle"
          className="border border-gray-300 p-2 text-black w-full rounded mt-2" // Updated className

          value={newKeyTitle}
          onChange={(e) => setNewKeyTitle(e.target.value)}
        />
        {error && <div className="text-red-600 mt-2">{error}</div>}
        <div className="mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2" onClick={createKey}>Create</button>
          <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={closeModal}>Cancel</button>
        </div>
      </Modal>

    </DashboardLayout>
  );
};

export default Key;