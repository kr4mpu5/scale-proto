import React, { useEffect, useState } from 'react';

function AddImageForm(props) {
    const initialFormState = { iId: null, id: '', author: '' };
    const [image, setImage] = useState(initialFormState);

    const getImageDetails = async () => {
        let pageNum = Math.floor(Math.random() * 25);
        const url =
            'https://picsum.photos/v2/list?page=' + pageNum + '&limit=1';
        const res = await fetch(url);
        const image = await res.json();
        setImage(image[0]);
    };

    useEffect(() => {
        getImageDetails();
    }, []);

    const handleInputChange = (event) => {
        console.log(event);
        const { image, value } = event.target;
        setImage({ ...image, [image]: value });
    };

    return (
        <>
            <img
                src={'https://picsum.photos/id/' + image.id + '/200?grayscale'}
                key={image.iId}
                alt={image.id}
            />

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!image.id || !image.author) return;

                    props.addImage(image);
                    setImage(initialFormState);
                    getImageDetails();
                }}
            >
                <label>Image ID</label>
                <input
                    type='text'
                    name='id'
                    value={image.id}
                    onChange={handleInputChange}
                />
                <label>Artist</label>
                <input
                    type='text'
                    name='author'
                    value={image.author}
                    onChange={handleInputChange}
                />
                <button>Add image</button>
            </form>
        </>
    );
}

export default AddImageForm;
