import React from 'react';
import { Route} from 'react-router-dom';
import Items from './Items';

export default function Func(){
    return (
            <div>
                <Route path="/items/:id" component={Items}/>
            </div>
    )
}