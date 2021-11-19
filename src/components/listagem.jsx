import React from 'react'
import { Table } from 'react-bootstrap'
import Card from './card'

const listagem = (props) => {
    
    return (
        <>
            <Card>
            <Table size="sm" striped variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            </Card>
        </>
    )
}

export default listagem
