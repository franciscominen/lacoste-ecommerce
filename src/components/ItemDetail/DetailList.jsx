import React from 'react'
import ItemDetail from '../ItemDetail/index'

const DetailList = ({details}) => {
    return (
        <>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {details.map((detail) => {
                    return <ItemDetail key={detail.id} detail={detail} />
                })} 
            </div>
        </>
    )
}

export default DetailList;