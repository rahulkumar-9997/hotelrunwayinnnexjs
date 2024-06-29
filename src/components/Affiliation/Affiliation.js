import React from 'react'

function Affiliation() {
    return (
        <div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="section-subtitle">Affiliations</div>
                        <div className=' section-title'>Our Hotel’s Affiliations</div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className='col-lg-12' style={{ display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/images/feature/111-removebg-preview.png" className="affilition_img" alt="Imag 1" />
                        <img src="img/images/feature/112-removebg-preview.png" className="affilition_img" alt="Imag 1" />
                        <img src="img/images/feature/113-removebg-preview.png" className="affilition_img" alt="Imag 1" />
                        <img src="img/images/feature/114-removebg-preview.png" className="affilition_img" alt="Imag 1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Affiliation
