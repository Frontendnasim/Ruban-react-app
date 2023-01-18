import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="footer">
                    <div className="footer-container flex-cc">
                        <div className="footer-links col-12 col-lg-8 flex-cc justify-content-start">
                            <div className="link-pack flex-cc flex-column">
                                <div className="link-pack-header">
                                    <p>آشنایی با روبان</p>
                                </div>
                                <div className="link-pack-items flex-cc flex-column">
                                    <a href="#"><span>درباره ما</span></a>
                                    <a href="#"><span>تماس با ما</span></a>
                                    <a href="#"><span>سوالات متداول</span></a>
                                    {/* <a href="#"><span>مجله روبان</span></a> */}
                                </div>
                            </div>
                            <div className="link-pack flex-cc flex-column">
                                <div className="link-pack-header">
                                    <p>خدمات مشتریان</p>
                                </div>
                                <div className="link-pack-items flex-cc flex-column">
                                    <a href="#"><span>ورود - ثبت نام</span></a>
                                    <a href="#"><span>راهنمای خرید</span></a>
                                    <a href="#"><span>ارسال به شهرستان</span></a>
                                </div>
                            </div>
                            <div className="link-pack flex-cc flex-column">
                                <div className="link-pack-header">
                                    <p>حقوق و قوانین</p>
                                </div>
                                <div className="link-pack-items flex-cc flex-column">
                                    <a href="#"><span>قوانین و شرایط استفاده</span></a>
                                    <a href="#"><span>حفظ حریم خصوصی</span></a>
                                    <a href="#"><span>تعویض یا ارجاع کالا</span></a>
                                </div>
                            </div>
                            <div className="link-pack flex-cc flex-column">
                                <div className="link-pack-header">
                                    <p>همکاری با روبان</p>
                                </div>
                                <div className="link-pack-items flex-cc flex-column">
                                    <a href="#"><span>درخواست همکاری</span></a>
                                    <a href="#"><span>فرصت های شغلی</span></a>
                                    <a href="#"><span>درخواست کارت هدیه</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-images col-12 col-lg-4 flex-cc">
                            <img src="Etehadieh.png" alt="etehadie" />
                            <img src="samandehi.png" alt="sabt" />
                            <img src="etemad.png" alt="etemad" />
                        </div>
                    </div>

                    <div className="about">
                        <h1>فروشگاه اینترنتی روبان ؛ معرفی ؛ بررسی و خرید آنلاین لوازم آرایشی و بهداشتی اصل</h1>
                        <p>فروشگاه اینترنتی روبان ( شرکت زرتجارت روبان ) به عنوان یک مرجع تخصصی زیبایی ماموریت نهایی برند خود را بر تشویق بانوان برای مراقبت از زیبایی منحصر بفردشان گذاشته است. معرفی و فروش آنلاین لوازم آرایشی و بهداشتی اصل در دسته بندی هایی از جمله انواع لوازم آرایش ( رژلب ؛ رژگونه ؛ کرم پودر ؛ رنگ مو و ریمل ؛ کانسیلر و انواع پاک کننده ها ) ؛ محصولات مراقبتی و زیبایی پوست ( شامپو ؛ کرم ضد آفتاب ؛ کرم آبرسان و مرطوب کننده ؛ کرم ضد چروک ؛ کرم دور چشم ؛ کرم روشن کننده ؛ ضد لک ) ؛ محصولات مراقبتی و زیبایی مو و بدن ( شامپو سر و بدن ؛ ژل بهداشتی ؛ بادی میلک ؛ بادی باتر ؛ کرم دست و صورت ؛ برنزه کننده ؛ اسپری و ژل ضد تعریق ؛ ژل و فوم اصلاح صورت و بدن ؛ تیغ اصلاح و افترشیو ؛ کرم و ژل موبر ) ؛ انواع شامپو ؛ اسپری و ژل مو ؛ کیت رنگ مو و انواع اکسیدان ؛ حجم دهنده مو و انواع عطر و ادکلن ؛ لوازم شخصی برقی ( ماشین اصلاح و ریش تراش ؛ اپیلاتور و سشوار ) ؛ زیورآلات و اکسسوری مردانه و زنانه ( انواع بدلیجات ؛ انگشتر ؛ گردنبند و گوشواره ) ؛ محصولات مادر و کودک ( ضد ترک ؛ پودر بچه ؛ دستمال مرطوب کودک ؛ روغن بدن کودک ) در فروشگاه اینترنتی روبان انجام می گردد. هدف فروشگاه اینترنتی روبان از همان ابتدا در معرفی و فروش آنلاین محصولات آرایشی و بهداشتی اصل بوده است. خرید اینترنتی لوازم آرایش به صورت آنلاین از فروشگاه اینترنتی روبان به راحت ترین شکل قابل انجام می باشد.</p>
                    </div>
                    <span className="credit flex-cc">&#169; 2021 کلیه حقوق این سایت متعلق به شرکت زر تجارت روبان می‌باشد.</span>
                    <div className="info flex-cc">
                        <span className="replication">ساعات پاسخگویی: شنبه تا چهارشنبه ۹ الی ۱۸:۰۰ / پنجشنبه ۹ الی ۱۷:۰۰</span>
                        <span className="contact">
                            <img className="headset" src="icons8-headset-50.png" alt="headset" />
                            <span>تماس با ما   ۴۷۰۸ - ۰۲۱</span>
                        </span>
                        <span className="help">
                            <a href="#">
                                <img src="icons8-user-manual-50.png" alt="manual" />
                                <span>راهنما</span>
                            </a>
                            <a href="#">
                                <img src="icons8-help-50.png" alt="help" />
                                <span>سوالات متداول</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
