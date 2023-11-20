export function ContractList() {
    return (
        <>
            <div className="container">
                <table className="table table-hover mt-5">
                    <thead className="table-primary">
                    <tr>
                        <th>#</th>
                        <th>Contract code</th>
                        <th>Customer</th>
                        <th>Facility</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Price</th>
                        <th>Total Payment</th>
                        <th>Deposit</th>
                    </tr>
                    </thead>
                    <tbody className="table-warning">
                    <tr>
                        <td>1</td>
                        <td>CC-0001</td>
                        <td>Nguyễn Khánh Nhật</td>
                        <td>Villa</td>
                        <td>06/11/2023</td>
                        <td>08/11/2023</td>
                        <td>5000000</td>
                        <td>15000000</td>
                        <td>1000000</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}