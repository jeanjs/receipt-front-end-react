import React, { Children, createRef, cloneElement } from 'react';

import { Button } from 'react-materialize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tdRoot: {
        '& div': {
            marginTop: 0,
            marginBottom: 0,
            '& div.select-wrapper': {
                marginTop: -18
            },
            '& div.select-wrapper.select-month, div.select-wrapper.select-year': {
                marginTop: 0
            }
        },
        width: 138
    },
    cellRoot: { 
        '& button': { marginRight: 5 }
    }
});

const EditableCells = ({ fields, submitOnClick, cancelOnClick, children }) => {
    const classes = useStyles();
    const refs = Object.fromEntries(
                    Object.entries(fields).map(([key]) => [key, createRef()])
                );

    const cloneInputElement = child => {
        const { name } = child.props;

        return cloneElement(child, { ref: refs[name], defaultValue: fields[name] });
    }

    return (
        <>
            {Children.map(
                children, 
                child => (
                    <td className={classes.tdRoot}>
                        {cloneInputElement(child)}
                    </td>
                ))}
            <td className={classes.cellRoot}>
                <Button 
                    waves='light' 
                    floating 
                    icon='done' 
                    small 
                    className='deep-purple'
                    onClick={e => submitOnClick(refs, e)} />
                 <Button 
                    waves='light' 
                    floating 
                    icon='clear'
                    small 
                    className='red lighten-1'
                    onClick={cancelOnClick} />
            </td>
        </>
    );
};

export default EditableCells;