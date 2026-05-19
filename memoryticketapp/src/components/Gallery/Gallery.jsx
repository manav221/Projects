import React from 'react'
import styles from './Gallery.module.css'
import quotes from '../../assets/quotes.svg'
import { MapPin, Calendar } from 'lucide-react';

const Gallery = () => {
    return (
        <div className={styles['all-stubs']}>
            <div className={styles['stub']}>
                <div className={styles['stub-details']}>
                    <div className={styles['stub-top']}>
                        <div className={styles['img']}></div>
                        <div className={styles['stub-name']}>Ghibli Park</div>
                        <div className={styles['stub-date-time']}>
                            <span className={styles['stub-location']}>
                                <MapPin size={12.55} />
                                <span className={styles['sdt']}>
                                    Bangalore
                                </span>
                            </span>
                            <span className={styles['stub-time']}>
                                <Calendar size={12} />
                                <span className={styles['sdt']}>18 May 26</span>
                            </span>
                        </div>
                    </div>
                    <div className="stub-bottom">
                        <div className={styles['stub-caption']}>
                            <img src={quotes} alt="" />
                            <div>howl's moving castle! howl's moving castle! </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['stub']}>
                <div className={styles['stub-details']}>
                    <div className={styles['stub-top']}>
                        <div className={styles['img']}></div>
                        <div className={styles['stub-name']}>Ghibli Park</div>
                        <div className={styles['stub-date-time']}>
                            <span className={styles['stub-location']}>
                                <MapPin size={12.55} />
                                <span className={styles['sdt']}>
                                    Bangalore
                                </span>
                            </span>
                            <span className={styles['stub-time']}>
                                <Calendar size={12} />
                                <span className={styles['sdt']}>18 May 26</span>
                            </span>
                        </div>
                    </div>
                    <div className="stub-bottom">
                        <div className={styles['stub-caption']}>
                            <img src={quotes} alt="" />
                            <div>howl's moving castle! howl's moving castle! </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['stub']}>
                <div className={styles['stub-details']}>
                    <div className={styles['stub-top']}>
                        <div className={styles['img']}></div>
                        <div className={styles['stub-name']}>Ghibli Park</div>
                        <div className={styles['stub-date-time']}>
                            <span className={styles['stub-location']}>
                                <MapPin size={12.55} />
                                <span className={styles['sdt']}>
                                    Bangalore
                                </span>
                            </span>
                            <span className={styles['stub-time']}>
                                <Calendar size={12} />
                                <span className={styles['sdt']}>18 May 26</span>
                            </span>
                        </div>
                    </div>
                    <div className="stub-bottom">
                        <div className={styles['stub-caption']}>
                            <img src={quotes} alt="" />
                            <div>howl's moving castle! howl's moving castle! </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['stub']}>
                <div className={styles['stub-details']}>
                    <div className={styles['stub-top']}>
                        <div className={styles['img']}></div>
                        <div className={styles['stub-name']}>Ghibli Park</div>
                        <div className={styles['stub-date-time']}>
                            <span className={styles['stub-location']}>
                                <MapPin size={12.55} />
                                <span className={styles['sdt']}>
                                    Bangalore
                                </span>
                            </span>
                            <span className={styles['stub-time']}>
                                <Calendar size={12} />
                                <span className={styles['sdt']}>18 May 26</span>
                            </span>
                        </div>
                    </div>
                    <div className="stub-bottom">
                        <div className={styles['stub-caption']}>
                            <img src={quotes} alt="" />
                            <div>howl's moving castle! howl's moving castle! </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['stub']}>
                <div className={styles['stub-details']}>
                    <div className={styles['stub-top']}>
                        <div className={styles['img']}></div>
                        <div className={styles['stub-name']}>Ghibli Park</div>
                        <div className={styles['stub-date-time']}>
                            <span className={styles['stub-location']}>
                                <MapPin size={12.55} />
                                <span className={styles['sdt']}>
                                    Bangalore
                                </span>
                            </span>
                            <span className={styles['stub-time']}>
                                <Calendar size={12} />
                                <span className={styles['sdt']}>18 May 26</span>
                            </span>
                        </div>
                    </div>
                    <div className="stub-bottom">
                        <div className={styles['stub-caption']}>
                            <img src={quotes} alt="" />
                            <div>howl's moving castle! howl's moving castle! </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['stub']}>
                <div className={styles['stub-details']}>
                    <div className={styles['stub-top']}>
                        <div className={styles['img']}></div>
                        <div className={styles['stub-name']}>Ghibli Park</div>
                        <div className={styles['stub-date-time']}>
                            <span className={styles['stub-location']}>
                                <MapPin size={12.55} />
                                <span className={styles['sdt']}>
                                    Bangalore
                                </span>
                            </span>
                            <span className={styles['stub-time']}>
                                <Calendar size={12} />
                                <span className={styles['sdt']}>18 May 26</span>
                            </span>
                        </div>
                    </div>
                    <div className="stub-bottom">
                        <div className={styles['stub-caption']}>
                            <img src={quotes} alt="" />
                            <div>howl's moving castle! howl's moving castle! </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery