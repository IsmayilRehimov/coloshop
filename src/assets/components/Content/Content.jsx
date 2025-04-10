import React, { useEffect, useState } from 'react' 
import styles from './Content.module.css'
import Card from './Card/Card'
import axios from 'axios'


const Content = () => {

    const [data, setData] = useState([]) 

    useEffect(() => {
        const getData = () => {
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
              setData(res.data)
            })
          }
          getData();
      }, []);

  

  return (
    <div className={styles.container}>
        <div className={styles.bigPic1}>
            <p>Spring / Summer Collection 2017</p>
            <h1>Get up to 30% Off <br />New Arrivals</h1>
            <button>SHOP NOW</button>
        </div>

        <div className={styles.midPics}>
            <div className={styles.midPic}>
                <h2>WOMEN'S</h2>
            </div>
            <div className={styles.midPic}>
                <h2>WOMEN'S</h2>
            </div>
            <div className={styles.midPic}>
                <h2>WOMEN'S</h2>
            </div>
        </div>

        <div className={styles.midText}>
            <h1>New Arrivals</h1>
        </div>

        <div className={styles.midButtons}>
            <button>All</button>
            <button>Women's</button>
            <button>Accessories</button>
            <button>Men's</button>
        </div>
        
        <div className={styles.datas1}>
            {data && data.map(item => <Card key={item.id} item={item}/>)}
        </div>

        <div className={styles.bigPic2}>
            <div className={styles.bigPic2Div}>
            <h1>Deal Of The Week</h1>
            <div className={styles.timer}>
                <div className={styles.timerDiv}>
                    <h1>2</h1>
                    <p>Day</p>
                </div>
                <div className={styles.timerDiv}>
                    <h1>21</h1>
                    <p>Hours</p>
                </div>
                <div className={styles.timerDiv}>
                    <h1>51</h1>
                    <p>Mins</p>
                </div>
                <div className={styles.timerDiv}>
                    <h1>46</h1>
                    <p>Sec</p>
                </div>
            </div>
            <button>SHOP NOW</button>
            </div>
        </div>

        <div className={styles.midText}>
            <h1>Best Sellers</h1>
        </div>

        <div className={styles.datas2}>
            {data && data.map(item => <Card key={item.id} item={item}/>)}
        </div>

        <div className={styles.cargo}>
            <div className={styles.cargoDiv}>
                <i class="bi bi-truck"></i>
                <div className="cargoText">
                    <h4>FREE SHIPPING</h4>
                    <p>Suffered Alteration in Some Form</p>
                </div>
            </div>
            <div className={styles.cargoDiv}>
                <i class="bi bi-cash"></i>
                <div className="cargoText">
                    <h4>CACH ON DELIVERY</h4>
                    <p>The Internet Tend To Repeat</p>
                </div>
            </div>
            <div className={styles.cargoDiv}>
                <i class="bi bi-arrow-repeat"></i>
                <div className="cargoText">
                    <h4>45 DAYS RETURN</h4>
                    <p>Making it Look Like Readable</p>
                </div>
            </div>
            <div className={styles.cargoDiv}>
                <i class="bi bi-clock"></i>
                <div className="cargoText">
                    <h4>OPENING ALL WEEK</h4>
                    <p>8AM - 09PM</p>
                </div>
            </div>
        </div>

        <div className={styles.midText}>
            <h1>Latest Blogs</h1>
        </div>

        <div className={styles.midPics}>
            <div className={styles.basicPic}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
            </div>
            <div className={styles.basicPic}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
            </div>
            <div className={styles.basicPic}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
            </div>
        </div>

        <div className={styles.newsletter}>
            <div className={styles.newsletterText}>
                <h2>Newsletter</h2>
                <p>Subscribe to our newsletter and get 20% off your first purchase</p>
            </div>
            <div className={styles.newsletterRight}>
                <input type="text" placeholder='Your email'/>
                <button>SUBSCRIBE</button>
            </div>
        </div>

        <div className={styles.footer1}>
            <div className={styles.footer1Left}>
                <p>Blog</p>
                <p>FAQs</p>
                <p>Contact Us</p>
            </div>
            <div className={styles.footer1Right}>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-skype"></i>
                <i class="bi bi-pinterest"></i>
            </div>
        </div>
        <div className={styles.footer2}>
            <p>©2018 All Rights Reserverd. This template is made with  by Colorlib</p>
        </div>

    </div>
  )
}

export default Content
