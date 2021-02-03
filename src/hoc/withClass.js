import React from 'react'

const widthClass = (WrappedComponent , className) => {
    return  props => (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
}

export default widthClass;