import React from 'react'

import Logo from "../../Assets/Images/Anaam.png"
// styles
import "./AboutUs.scss"
import { Container } from '@mui/material'

const AboutUs = () => {
    return (
        <div className='AboutUsWrapper'>
            <div className='title'>
                <Container>
                    <h5>
                        من نحن
                    </h5>
                </Container>
            </div>
            <Container>
                <div className='firstContent'>
                    <div className='imgContainer'>
                        <img width={300} src={Logo} alt='logo'/>
                    </div>
                    <div className='textWrapper'>
                        <p>
                        إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوصهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                        </p>
                    </div>
                </div>
                <div className='lastContent'>
                    <div className='Lasttitle'>
                        <p>
                            اهدافنا
                        </p>
                    </div>
                    <div className='aboutUsSteps'>
                        <ul>
                            <li>
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                            </li>
                            <li>
                            يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                            </li>
                            <li>
                            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs