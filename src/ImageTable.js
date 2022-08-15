import React from 'react';

function ImageTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ImageId</th>
                    <th>Artist</th>
                </tr>
            </thead>
            <tbody>
            {props.images.length > 0 ? (
                    props.images.map((image) => (
                        <tr key={image.id}>
                            <td>{image.id}</td>
                            <td>{image.author}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No images</td>
                    </tr>
                )}              
            </tbody>
        </table>
    );
}
export default ImageTable;
