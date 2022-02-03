import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css';
import 'swiper/css/bundle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

import './index.css'

type dashInfoProps = {
    title:string
    children:JSX.Element[]
}

export function DashboardSection(props:dashInfoProps){
    return(
        <div className="dashboard-info">
            <div className="head">
                <h3>{props.title}</h3>
                <span className="view-more">VER MAIS</span>
            </div>
            <div className="dashboard-main-container">
                <Swiper pagination={{ clickable: true }} spaceBetween={50}>
                    {props.children?.map( card => {
                        return(
                            <SwiperSlide>
                                {card}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}