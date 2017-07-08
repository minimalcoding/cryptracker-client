import React, { Component } from 'react';
import Radium from 'radium';

const FlexDiv = Radium(props => {
    const styles = {
        base: {
            display: 'flex',
        },
        column: {
            flexDirection: 'column',
        },
        row: {
            flexDirection: 'row',
        },
        expand: {
            flexGrow: 1,
        } 
    };
    return <div style={[
        props.style,
        styles.base,
        styles[props.direction],
        props.expand ? styles.expand : [],
    ]}>{props.children}</div>
});

export const Container = props => <Column {...props} style={{height: '100%'}} direction='column' />
export const Column = props => <FlexDiv {...props} direction='column' />
export const Row = props => <FlexDiv {...props} direction='row' />
