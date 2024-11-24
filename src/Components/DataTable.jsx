const DataTable = (props) => {
    const { data } = props
    return(
        <table border={10}>
            <thead>
                <th>Name</th>
                <th>Designation</th>
            </thead>
            <tbody>
                {data.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.designation}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};


export default DataTable