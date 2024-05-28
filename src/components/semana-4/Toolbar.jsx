import { Link } from 'react-router-dom';

function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <>
            <div className="container">
                <div onClick={() => {
                    alert('You clicked on the toolbar');
                }}>
                    <Button onClick={() => alert('Playing!')}>
                        Play Movie
                    </Button>
                    <Button onClick={() => alert('Uploading!')}>
                        Upload Image
                    </Button>
                </div>
            </div>
        </>
    );
}