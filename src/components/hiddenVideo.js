import React from 'react'

const hiddenVideo = () => {
    
    return (
        <div className="modal fade" id="modal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-body mb-0 p-0">

                        <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/_jiOL2zY3-A"
                            allowFullScreen></iframe>
                        </div>

                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default hiddenVideo
