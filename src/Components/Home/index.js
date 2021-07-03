import React from 'react'
import style from './home.module.css'

const Home = () => {
    return (
        <div className={style['container']}>
            <div className={style['wrapper']}>
                <div className={style['tm-home']}>
                    <div className={style['home-content']}>
                        <div className={style['avatar']}>
                            <div className={style['img-avatar']}></div>
                        </div>
                        <div className={style['main-info']}>
                            <h3 className={style['name']}>Adriano Smith</h3>
                            <p className={style['job']}>Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home