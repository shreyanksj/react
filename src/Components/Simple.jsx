// javascript XML file 

const Simple = (props) => {
    const { message } = props
    const { name, designation } = message
   
    return (
        <div className="container">
            <div className="main">
                <p>{name} is an {designation}</p>
            </div>
        </div>
    )
};

export default Simple;