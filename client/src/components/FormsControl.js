import React from 'react'

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
    return (
        <div>
        <div>
            <textarea {...input} {...props}/>
        </div>
            { hasError && <span> <strong>Attention! </strong>{meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span> <strong>Attention! </strong>{meta.error}</span> }
        </div>
    )
}