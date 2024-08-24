import React, { useState, useEffect } from 'react';  
import Card1product from './card1product';  
import Card2product from './card2product';  
import Card3product from './card3product';  
import next from '../image/next.png';  
import prev from '../image/prev.png';  
import './slider.css';  

const Slider = () => {  
    const [currentIndex, setCurrentIndex] = useState(0);  
    const [slides, setSlides] = useState([  
        {  
            title: 'Slide 1',  
            content: [  
                <Card1product key="card1" />,  
                <Card1product key="card2" />,  
                <Card1product key="card3" />,  
                <Card1product key="card4" />  
            ]  
        },  
        {  
            title: 'Slide 2',  
            content: [  
                <Card2product key="card5" />,  
                <Card2product key="card6" />,  
                <Card2product key="card7" />,  
                <Card2product key="card8" />  
            ]  
        },  
        {  
            title: 'Slide 3',  
            content: [  
                <Card3product key="card9" />,  
                <Card3product key="card10" />,  
                <Card3product key="card11" />,  
                <Card3product key="card12" />  
            ]  
        },  
        {  
            title: 'Slide 4',  
            content: [] // Có thể thêm content cho slide 4 nếu cần  
        }  
    ]);  

    useEffect(() => {  
        const handleResize = () => {  
            if (window.innerWidth < 1024) {  
                setSlides([  
                    {  
                        title: 'Slide 1',  
                        content: [  
                            <Card1product key="card1" />,  
                            <Card2product key="card2"/>,
                            <Card3product key="card3"/>   
                        ]  
                    },
                    {  
                        title: 'Slide 2',  
                        content: [  
                            
                        ]  
                    },
                    {  
                        title: 'Slide 3',  
                        content: [  
                            
                        ]  
                    },
                    {  
                        title: 'Slide 4',  
                        content: [  
                            
                        ]  
                    },
                      
                ]);  
                setCurrentIndex(0); // Khôi phục chỉ số hiện tại  
            } else {  
                setSlides([  
                    {  
                        title: 'Slide 1',  
                        content: [  
                            <Card1product key="card1" />,  
                            <Card1product key="card2" />,  
                            <Card1product key="card3" />,  
                            <Card1product key="card4" />  
                        ]  
                    },  
                    {  
                        title: 'Slide 2',  
                        content: [  
                            <Card2product key="card5" />,  
                            <Card2product key="card6" />,  
                            <Card2product key="card7" />,  
                            <Card2product key="card8" />  
                        ]  
                    },  
                    {  
                        title: 'Slide 3',  
                        content: [  
                            <Card3product key="card9" />,  
                            <Card3product key="card10" />,  
                            <Card3product key="card11" />,  
                            <Card3product key="card12" />  
                        ]  
                    },  
                    {  
                        title: 'Slide 4',  
                        content: []  
                    }  
                ]);  
                setCurrentIndex(0); // Khôi phục chỉ số hiện tại  
            }  
        };  

        window.addEventListener('resize', handleResize);  
        handleResize(); // Gọi hàm khi component được mount  

        return () => {  
            window.removeEventListener('resize', handleResize);  
        };  
    }, []);  

    const showSlide = (index) => {  
        setCurrentIndex(index);  
    };  

    const nextSlide = () => {  
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);  
    };  

    const prevSlide = () => {  
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);  
    };  

    return (  
        <div className="slider">  
            <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>  
                {slides.map((slide, index) => (  
                    <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>  
                        <div className="card-container">  
                            {slide.content}  
                        </div>  
                    </div>  
                ))}  
            </div>  
            <div className="dots">  
                <button className="slider-button prev" onClick={prevSlide}>  
                   <img src={prev} alt='Previous'/>   
                </button>  
                {slides.map((_, index) => (  
                    <span  
                        className={`dot ${index === currentIndex ? 'active' : ''}`}  
                        onClick={() => showSlide(index)}  
                        key={index}  
                    >  
                        {index + 1}  
                    </span>  
                ))}  
                 <button className="slider-button next" onClick={nextSlide}>  
                    <img src={next} alt='Next'/>  
                </button>   
            </div>   
        </div>  
    );  
};  

export default Slider;