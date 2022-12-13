import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
        return (
            <Table className="d-flex">
                {device.brands.map(brand => 
                    <Card
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    className="p-3"
                    onClick={()=> device.setSelectedBrand(brand)}
                    border={brand.id===device.selectedBrand.id ? "danger" : "light"}
                    >
                        {brand.name}
                    </Card>
                    )}
            </Table>
        )
    }
) 
export default BrandBar;