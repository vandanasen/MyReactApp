import React from 'react';
import Banner from '../../../../../Components/Global/BannerComponent/Banner';
import SecondaryNavBar from '../../../../Global/NavBar/SecondaryNavBar/SecondaryNavBar';
//This should be taken out once the navbar is set up. React router should handle this.
const breadText = ["Home", "Programs", "Coding Programs", "Program Costs"]
const bannerInfo = {
    bannerTitle: "Coding Programs",
    
};

export default function ProgramCosts() {

    return (
        <div>
            <Banner info={bannerInfo} breadCrumbText={breadText} />
            <SecondaryNavBar/>
            <div className="programCostsContainer" style={{ paddingTop: '50px', position: 'relative', left: '250px', display: 'flex', flexDirection: 'column', width: '45%' }}>
                <h1 style={{ fontSize: '40px' }}>Cost</h1>

                <br /><br />

                <p style={{ fontSize: '24px' }}><b>Note:</b> New students pay an additional $50 registration fee. This is a one time fee
                and is not required on your next package purchase.</p>

                <br /><br />

                <div style={{ display: 'flex', fontSize: '18px', justifyContent: 'space-between', width: '80%' }}>
                    <p><b>5 Week Package <br /> First Time Student </b>$345.00 &nbsp;<br /><b>Returning Student</b> $295.00</p>
                    <p><b>10 Week Package <br /> First Time Student </b>$345.00 &nbsp;<br /><b>Returning Student</b> $495.00</p>
                </div>

                <div style={{ display: 'flex', fontSize: '18px', justifyContent: 'space-between', width: '80%' }}>
                    <p><b>15 Week Package <br />First Time Student </b>$345.00 <br /><b>Returning Student</b> $695.00</p>
                    <p><b>30 Week Package <br />First Time Student </b>$1345.00 <br /><b>Returning Student</b> $1295.00</p>
                </div>

            </div>
            <br /><br /><br /><br />
        </div>
    );
}
