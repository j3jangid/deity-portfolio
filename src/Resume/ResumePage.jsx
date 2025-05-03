import React from 'react'
import resume from '../Data/jatinJangidResume.pdf'

function ResumePage() {
    return (
        <div style={{height: '90vh'}}>
            <iframe
                src={resume}
                width="100%"
                title="Resume PDF"
                height="100%"
            />
        </div>
    )
}

export default ResumePage