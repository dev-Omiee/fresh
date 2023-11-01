import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormFloatingBasicExample() {

    function runFunction() {

        // Add your fetch function here
        // When you click submit button, this function will be called

        // For Example : Click "Submit" & Check your console.
        console.log("Hello Punit")

    }

    return (
        <div className='spacer-x'>
            <div className='max-w'>
                <div className='pt-30'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Anything Can Be Here..."
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                </div>

                <div className='pt-14'>
                    <Button
                        onClick={runFunction}
                        variant="success" className=''>Submit</Button>{' '}
                </div>
            </div>
        </div>
    );
}

export default FormFloatingBasicExample;