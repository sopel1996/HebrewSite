const dropcss = require('dropcss');

let html = `
<html lang="he">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="normolize.css">
    <link rel="stylesheet" href="style.css">
    <title>אורן גלעדי</title>
</head>

<body>
    <header class="header">
        <div class="header_firstLine" style="background-color: #070F22; color: #FAFAFA;">
            <div class="sectionInner">
                <div class="header_firstLine-social">
                    <a href="https://wa.me/79312344294"><img src="img/svg/whatsApp.svg" alt="whatsApp"></a>
                    <a href="https://twitter.com/"><img src="img/svg/twitter.svg" alt="twitter"></a>
                    <a href="https://www.facebook.com/"><img src="img/svg/facebook.svg" alt="facebook"></a>
                </div>
                <div class="header_firstLine-contacts">
                    <div class="header_firstLine-contacts-item">
                        <a href="mailto:oreng@giladilaw.co.il"><span class="text"><bdo
                                    dir="ltr">oreng@giladilaw.co.il</bdo></span></a>
                        <img src="img/svg/mailGray.svg" alt="mail">
                    </div>
                    <div class="header_firstLine-contacts-item">
                        <a href="tel:+97236081452"><span class="text"><bdo dir="ltr">+972-3-6081452</bdo></span></a>
                        <img src="img/svg/faxGray.svg" alt="fax">
                    </div>
                    <div class="header_firstLine-contacts-item">
                        <a href="tel:+97236081451"><span class="text"><bdo dir="ltr">+972-3-6081451</bdo></span></a>
                        <img src="img/svg/phoneGray.svg" alt="phone">
                    </div>
                    <div class="header_firstLine-contacts-item">
                        <address><span class="text"><bdo dir="ltr"> 6702101 , א"ת ,132 ןיגב םחנמ ךרד</bdo></span>
                        </address>
                        <img src="img/svg/locationGray.svg" alt="location">
                    </div>
                </div>
            </div>
        </div>
        <div class="header_secondLine">
            <div class="sectionInner">

                <div class="header_secondLine-contacts-phone">
                    <div class="text">
                        <span><bdo dir="ltr">וישכע ורשקתה</bdo></span>
                        <a href="tel:+97236081454"><bdo dir="ltr">03-6081451</bdo></a>
                    </div>
                    <img src="img/svg/phoneRect.svg" alt="phone">
                </div>
                <nav class="header_secondLine-nav">
                    <a href="#"><bdo dir="ltr">רשק תריצי</bdo></a>
                    <a href="#"><bdo dir="ltr">םירמאמ</bdo></a>
                    <a href="#"><bdo dir="ltr">תרושקתב םימוסרפ</bdo></a>
                    <a href="#"><bdo dir="ltr">תויוחמתהו םיתוריש</bdo></a>
                    <a href="#"><bdo dir="ltr">תודוא</bdo></a>
                    <a href="#"><bdo dir="ltr">תיבה ףד</bdo></a>
                </nav>
                <div class="header_secondLine-logo">
                    <div class=text>
                        <h1 class="title">
                            <bdo dir="ltr">
                                ידעלג ןרוא
                            </bdo>
                        </h1>
                        <h2 class="subTitle _gray">
                            <bdo dir="ltr">
                                ילהנמ טפשמו תורחת יניד
                            </bdo>
                        </h2>
                    </div>
                    <img src="img/svg/logo.svg" alt="Logo">
                </div>
            </div>
        </div>
    </header>
    <main>
        <section class="logo">
            <div class="sectionInner">
                <h3 class="title _white"><bdo dir="ltr">
                        ידיימ יעוצקמ יטפשמ עויס
                    </bdo></h3>
                <h4 class="subtitle _white"><bdo dir="ltr">
                        הריגהה םוחתב ןויסינ תונש 30 לעמ
                    </bdo>
                </h4>
                <form action="#"><button type="submit" class="btn">
                        <img src="img/svg/arrowWhite.svg" alt="whiteArrow">
                        <bdo dir="ltr">
                            <span class="btnText">
                                תודמעומ שיגהל
                            </span>
                        </bdo>
                    </button></form>
            </div>
        </section>
        <section class="fistBlock">
            <div class="sectionInner">
                <div class="firsBlock_card">
                    <img src="img/svg/teamIcon.svg" alt="">
                    <div class="text">
                        <h3 class="title"><bdo dir="ltr">
                                םיזרכמ יניד
                            </bdo></h3>
                        <h4 class="subTitle _gray"><bdo dir="ltr">
                                קולהע צופעט למרקוח איבן איף ברומץ כלרשט מיחוצים. קלאצ ...קולורס מונפרד אדנדום
                            </bdo></h4>
                    </div>
                    <hr>
                    <a href="#" class="more">
                        <img src="img/svg/arrowIcon.svg" alt="arrow">
                        <span class="learnMore">
                            <bdo dir="ltr">
                                דוע ארק
                            </bdo>
                        </span>
                    </a>


                </div>

                <div class="firsBlock_card">
                    <img src="img/svg/solutionIcon.svg" alt="">
                    <div class="text">
                        <h3 class="title"><bdo dir="ltr">
                                תורבח גוזימ
                            </bdo></h3>
                        <h4 class="subTitle _gray"><bdo dir="ltr">
                                קולהע צופעט למרקוח איבן איף ברומץ כלרשט מיחוצים. קלאצ ...קולורס מונפרד אדנדום
                            </bdo></h4>
                    </div>
                    <hr>
                    <a href="#" class="more">
                        <img src="img/svg/arrowIcon.svg" alt="arrow">
                        <span class="learnMore">
                            <bdo dir="ltr">
                                דוע ארק
                            </bdo></span>
                    </a>
                </div>

                <div class="firsBlock_card">
                    <img src="img/svg/communicateIcon.svg" alt="">
                    <div class="text">
                        <h3 class="title"><bdo dir="ltr">
                                לופונומ
                            </bdo></h3>
                        <h4 class="subTitle _gray"><bdo dir="ltr">
                                קולהע צופעט למרקוח איבן איף ברומץ כלרשט מיחוצים. קלאצ ...קולורס מונפרד אדנדום
                            </bdo></h4>
                    </div>
                    <hr>
                    <a href="#" class="more">
                        <img src="img/svg/arrowIcon.svg" alt="arrow">
                        <span class="learnMore">
                            <bdo dir="ltr">
                                דוע ארק
                            </bdo></span>
                    </a>
                </div>
                <div class="firsBlock_card">
                    <img src="img/svg/alertIcon.svg" alt="">
                    <div class="text">
                        <h3 class="title"><bdo dir="ltr">
                                לבוכ םכסה
                            </bdo></h3>
                        <h4 class="subTitle _gray"><bdo dir="ltr">
                                קולהע צופעט למרקוח איבן איף ברומץ כלרשט מיחוצים. קלאצ ...קולורס מונפרד אדנדום
                            </bdo></h4>
                    </div>
                    <hr>
                    <a href="#" class="more">
                        <img src="img/svg/arrowIcon.svg" alt="arrow">
                        <span class="learnMore">
                            <bdo dir="ltr">
                                דוע ארק
                            </bdo></span>
                    </a>
                </div>

            </div>
        </section>
        <section class="secondBlock">
            <div class="sectionInner">
                <img src="img/png/menPhoto.png" alt="men" class="men">
                <div class="aboutCompany">
                    <h3 class="title">
                        <bdo dir="ltr">
                            ידעלג ןרוא
                        </bdo>
                    </h3>
                    <h4 class="subTitle">
                        <bdo dir="ltr">
                            .ד"ועכ םינש 25 לעמ לש ןויסינ לעב וניה ידעלג ןרוא ד"וע
                        </bdo>
                    </h4>
                    <div class="list">
                        <div class="firstCollumn">

                            <div class="listItem">
                                <img src="img/svg/check.svg" alt="check">
                                <bdo dir="ltr">
                                    הריגהה םוחתב ןויסינ תונש 30 לעמ
                                </bdo>
                            </div>
                            <div class="listItem">
                                <img src="img/svg/check.svg" alt="check">
                                <bdo dir="ltr">
                                    הריגהה םוחתב ןויסינ תונש 30 לעמ
                                </bdo>
                            </div>
                        </div>
                        <div class="secondColumn">

                            <div class="listItem">
                                <img src="img/svg/check.svg" alt="check">
                                <bdo dir="ltr">
                                    הריגהה םוחתב ןויסינ תונש 30 לעמ
                                </bdo>
                            </div>
                            <div class="listItem">
                                <img src="img/svg/check.svg" alt="check">
                                <bdo dir="ltr">
                                    הריגהה םוחתב ןויסינ תונש 30 לעמ
                                </bdo>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <p class="firstParagraph">
                            <bdo dir="ltr">
                                קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולורס מונפרד אדנדום סילקוף,
                                מרגשי ומרגשח. עמחליף צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. להאמית
                                קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר
                            </bdo>
                        </p>
                        <p class="secondParagraph">
                            <bdo dir="ltr">
                                סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קונסקטורר אדיפיסינג אלית לורם איפסום
                                דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאהדס איאקוליס וולופטה
                                דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
                            </bdo>
                        </p>
                    </div>
                    <form action="#"><button type="submit" class="btn _blue">
                            <img src="img/svg/arrowWhite.svg" alt="whiteArrow">
                            <bdo dir="ltr">
                                <span class="btnText">
                                    דוע ארק
                                </span>
                            </bdo>
                        </button></form>
                </div>
            </div>
        </section>
        <section class="thirdBlock">
            <div class="sectionInner">
                <h3 class="title">
                    <bdo dir="ltr">
                        תונותיעב םימוסרפ
                    </bdo>
                </h3>
                <h4 class="subTitle">
                    <bdo dir="ltr">
                        לארשיב תיקסעה תונותיעב הנש 20 הזמ טלוב ונדרשמ
                    </bdo>
                </h4>
                <div class="companiesLogo">
                    <div class="companyLogo">
                        <img src="img/png/theMarker.png" alt="theMarker">
                        <hr>
                        <div class="underline">
                            <div class="date">12.12.2020</div>
                            <div class="text">
                                <bdo dir="ltr">
                                    דוע ארק
                                </bdo>
                            </div>
                        </div>
                    </div>
                    <div class="companyLogo">
                        <img src="img/png/yNet.png" alt="yNet">
                        <hr>
                        <div class="underline">
                            <div class="date">12.12.2020</div>
                            <div class="text">
                                <bdo dir="ltr">
                                    דוע ארק
                                </bdo>
                            </div>
                        </div>
                    </div>
                    <div class="companyLogo">
                        <img src="img/png/company.png" alt="company">
                        <hr>
                        <div class="underline">
                            <div class="date">12.12.2020</div>
                            <div class="text">
                                <bdo dir="ltr">
                                    דוע ארק
                                </bdo>
                            </div>
                        </div>
                    </div>
                    <div class="companyLogo">
                        <img src="img/png/company2.png" alt="company2">
                        <hr>
                        <div class="underline">
                            <div class="date">12.12.2020</div>
                            <div class="text">
                                <bdo dir="ltr">
                                    דוע ארק
                                </bdo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="fourthBlock">
            <div class="sectionInner">
                <div class="information">

                    <h3 class="title">
                        <bdo dir="ltr">
                            ידעלג ןרוא
                        </bdo>
                    </h3>
                    <h4 class="subTitle _gray">
                        <bdo dir="ltr">
                            מא, מנכם למטכין נשואי מנורךגולר מונפרר ברורק. להאמית קרהשק סכעיט דז צמלח לביקו ננבי, צמוקו
                            בלוקריה שיצמה מרגשי ומרגשח. עמחליף צש בליא, מנסוטו קלאצי קולורס מונפרד אדנדום סילקוף, למרקוח
                            איבן איף, ברומץ כלרשט מיחוצים. קולהע צופעט
                        </bdo>
                    </h4>


                </div>
                <div class="contacts">
                    <h3 class="title">
                        <bdo dir="ltr">
                            רשק תריצי
                        </bdo>
                    </h3>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    לוגעה לדגמה ,ילאירזע זכרמ
                                </bdo>
                            </div>
                            <address class="secondLine">
                                <bdo dir="ltr">
                                    132 ןיגב םחנמ ךרד ,17 המוק
                                </bdo>
                            </address>
                        </div>
                        <img src="img/svg/locationRect.svg" alt="location">
                    </div>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    ליימיא תבותכ
                                </bdo>
                            </div>
                            <div class="secondLine">
                                <bdo dir="ltr">
                                    <a href="mailto:oreng@giladilaw.co.il">oreng@giladilaw.co.il</a>
                                </bdo>
                            </div>
                        </div>
                        <img src="img/svg/mailRect.svg" alt="mail">
                    </div>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    ןופלט
                                </bdo>
                            </div>
                            <div class="secondLine">
                                <bdo dir="ltr">
                                    <a href="tel:+972-3-6081451">+972-3-6081451</a>
                                </bdo>
                            </div>
                        </div>
                        <img src="img/svg/phoneRect.svg" alt="phone">
                    </div>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    סקפ
                                </bdo>
                            </div>
                            <div class="secondLine">
                                <bdo dir="ltr">
                                    +972-3-6081452
                                </bdo>
                            </div>
                        </div>
                        <img src="img/svg/faxRect.svg" alt="fax">
                    </div>
                </div>

                <form action="#" class="form">
                    <h3 class="title">
                        <bdo dir="ltr">
                            רשק תריצי
                        </bdo>
                    </h3>
                    <div class="firstLine">
                        <div class="FIOConteiner">
                            <label for="FIO">
                                <bdo dir="ltr">
                                    אלמ םש
                                    <!-- <bdo dir="rtl">
                                   שם מלא -->
                                </bdo>
                            </label>
                            <input type="text" id="FIO" dir="auto">
                        </div>
                        <div class="PHONEConteiner">
                            <label for="phone">
                                <bdo dir="ltr">ןופלט</bdo>
                            </label>
                            <input type="text" id="phone" dir="auto">
                        </div>
                    </div>
                    <label for="comment" class="commentLabel">
                        <bdo dir="ltr">הודעה</bdo>
                    </label>
                    <textarea name="commentsArea" id="comment" cols="30" rows="10" class="commentsArea"
                        dir="auto"></textarea>
                    <button class="btn">
                        <img src="img/svg/arrowWhite.svg" alt="whiteArrow">
                        <bdo dir="ltr">
                            <span class="btnText">
                                י/חלש
                            </span>
                        </bdo>
                    </button>
                </form>
            </div>
        </section>
        <Section class="fifthBlock">
            <div class="sectionInner">
                <h3 class="title">
                    <bdo dir="ltr">
                        םינורחא םירמאמ
                    </bdo>
                </h3>
                <div class="news">
                    <div class="smallNews">
                        <div class="smallNewsList">
                            <div class="newsItem">
                                <img src="img/png/items.png" alt="">
                                <div class="text">
                                    <h4 class="title">
                                        <bdo dir="ltr">
                                            יללכ רמאמ תרתוכ תורבח גוזימ לע אמגודל
                                        </bdo>
                                    </h4>
                                    <h5 class="subTitle">
                                        <bdo dir="ltr">
                                            דולור סיט אמט, קונסקטורר לורם איפסום אדיפיסינג
                                        </bdo>
                                    </h5>
                                </div>
                            </div>
                            <div class="newsItem">
                                <img src="img/png/items.png" alt="">
                                <div class="text">
                                    <h4 class="title">
                                        <bdo dir="ltr">
                                            יללכ רמאמ תרתוכ תורבח גוזימ לע אמגודל
                                        </bdo>
                                    </h4>
                                    <h5 class="subTitle">
                                        <bdo dir="ltr">
                                            דולור סיט אמט, קונסקטורר לורם איפסום אדיפיסינג
                                        </bdo>
                                    </h5>
                                </div>
                            </div>
                            <div class="newsItem">
                                <img src="img/png/items.png" alt="">
                                <div class="text">
                                    <h4 class="title">
                                        <bdo dir="ltr">
                                            יללכ רמאמ תרתוכ תורבח גוזימ לע אמגודל
                                        </bdo>
                                    </h4>
                                    <h5 class="subTitle">
                                        <bdo dir="ltr">
                                            דולור סיט אמט, קונסקטורר לורם איפסום אדיפיסינג
                                        </bdo>
                                    </h5>
                                </div>
                            </div>
                            <div class="newsItem">
                                <img src="img/png/items.png" alt="">
                                <div class="text">
                                    <h4 class="title">
                                        <bdo dir="ltr">
                                            יללכ רמאמ תרתוכ תורבח גוזימ לע אמגודל
                                        </bdo>
                                    </h4>
                                    <h5 class="subTitle">
                                        <bdo dir="ltr">
                                            דולור סיט אמט, קונסקטורר לורם איפסום אדיפיסינג
                                        </bdo>
                                    </h5>
                                </div>
                            </div>

                        </div>
                        <a href="#" class="more">
                            <img src="img/svg/arrowWhite.svg" alt="arrow">
                            <span class="learnMore">
                                <bdo dir="ltr">
                                    םיפסונ םירמאמ
                                </bdo>
                            </span>
                        </a>
                        <hr>
                    </div>
                    <div class="bigNews">
                        <img src="img/png/items.png" alt="" class="bigNewsImg">
                        <div class="text">
                            <h4 class="title">
                                <bdo dir="ltr">
                                    גוזימ לע יללכ רמאמ תרתוכ אמגודל תורבח
                                </bdo>
                            </h4>
                            <div class="date _gray">
                                <bdo dir="ltr">
                                    12.12.2020
                                </bdo>
                            </div>
                            <h5 class="subTitle _gray">
                                <bdo dir="ltr">
                                    קולהע צופעט למרקוח איבן איף ברומץ כלרשט מיחוצים. קלאצ ...קולורס מונפרד אדנדום
                                </bdo>
                            </h5>
                        </div>
                        <hr>
                        <a href="#" class="more">
                            <img src="img/svg/arrowIcon.svg" alt="arrow">
                            <span class="learnMore">
                                <bdo dir="ltr">
                                    דוע ארק
                                </bdo>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    </main>
    <footer class="footer">
        <div class="sectionInner">
            <div class="mainFooter">

                <div class="time">
                    <h4 class="title">
                        <bdo dir="ltr">
                            וישכע ורשקתה
                        </bdo>
                    </h4>
                    <hr>
                    <div class="timeText">
                        <div class="text">
                            18:30-08:30 'ה-'א
                        </div>
                        <img src="img/svg/timeGray.svg" alt="">
                    </div>
                </div>

                <div class="category">
                    <h4 class="title">
                        <bdo dir="ltr">
                            תוחמתה ימוחת
                        </bdo>
                    </h4>
                    <hr>
                    <ul class="footerList">
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">לבוכ םכסה</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">לופונומ</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">תורבח גוזימ</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">םיזרכמ יניד</bdo></a></li>
                    </ul>
                </div>

                <div class="footerMenu">
                    <h4 class="title">
                        <bdo dir="ltr">
                            תוחמתה ימוחת
                        </bdo>
                    </h4>
                    <hr>
                    <ul class="footerList">
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">תיבה ףד</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">תודוא</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">תויוחמתהו םיתוריש</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">תרושקתב םימוסרפ</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">םירמאמ</bdo></a></li>
                        <li class="footerListItem"><a href="#"><bdo dir="ltr">רשק תריצי</bdo></a></li>
                    </ul>
                </div>

                <div class="contacts">

                    <div class="contact">
                        <div class="text">
                            <h4 class="title">
                                <bdo dir="ltr">
                                    ידעלג ןרוא
                                </bdo>
                            </h4>
                        </div>
                        <img src="img/svg/logoGray.svg" alt="Logo">
                    </div>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    לוגעה לדגמה ,ילאירזע זכרמ
                                </bdo>
                            </div>
                            <address class="secondLine">
                                <bdo dir="ltr">
                                    132 ןיגב םחנמ ךרד ,17 המוק
                                </bdo>
                            </address>
                        </div>
                        <img src="img/svg/locationRectGray.svg" alt="location">
                    </div>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    ליימיא תבותכ
                                </bdo>
                            </div>
                            <div class="secondLine">
                                <bdo dir="ltr">
                                    <a href="mailto:oreng@giladilaw.co.il">oreng@giladilaw.co.il</a>
                                </bdo>
                            </div>
                        </div>
                        <img src="img/svg/mailRectGray.svg" alt="mail">
                    </div>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    ןופלט
                                </bdo>
                            </div>
                            <div class="secondLine">
                                <bdo dir="ltr">
                                    <a href="tel:+972-3-6081451">+972-3-6081451</a>
                                </bdo>
                            </div>
                        </div>
                        <img src="img/svg/phoneRectGray.svg" alt="phone">
                    </div>
                    <div class="contact">
                        <div class="text">
                            <div class="firstLine">
                                <bdo dir="ltr">
                                    סקפ
                                </bdo>
                            </div>
                            <div class="secondLine">
                                <bdo dir="ltr">
                                    +972-3-6081452
                                </bdo>
                            </div>
                        </div>
                        <img src="img/svg/faxRectGray.svg" alt="fax">
                    </div>
                </div>






            </div>
            <div class="lastLineFooter">
                <div class="design">
                    <img src="img/svg/realMedia.svg" alt="">
                    <bdo dir="ltr" class="text">
                        ןיד יכרועל םירתא תיינב
                    </bdo>
                </div>
                <div class="messangers">
                    <a href="https://wa.me/79312344294"><img src="img/svg/whatsApp2.svg" alt="whatsApp"></a>
                    <a href="https://twitter.com/"><img src="img/svg/twitter2.svg" alt="twitter"></a>
                    <a href="https://www.facebook.com/"><img src="img/svg/facebook2.svg" alt="facebook"></a>
                </div>
                <div class="copyright">
                    <bdo dir="ltr">
                        ןיד יכרוע דרשמ ידעלג ןרואל תורומש תויוכזה לכ 2021 &copy;
                    </bdo>
                </div>
            </div>

        </div>
    </footer>
</body>

</html>
`;

let css = `
    /* TODO: прописать всем IMG размеры 
*/
@font-face {
 font-family: "almoni";
 src: url("fonts/almoni-dl-aaa-light.otf") format("openType");
 font-weight: 300;
 font-display: swap;
}
@font-face {
 font-family: "almoni";
 src: url("fonts/almoni-dl-aaa-regular.otf") format("openType");
 font-weight: 500;
 font-display: swap;
}
@font-face {
 font-family: "almoni";
 src: url("fonts/almoni-dl-aaa-bold.otf") format("openType");
 font-weight: 700;
 font-display: swap;
}
@font-face {
 font-family: "almoni";
 src: url("fonts/almoni-dl-aaa-black.otf") format("openType");
 font-weight: 900;
 font-display: swap;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    outline: none;
    text-decoration: none;
}
h1,h2,h3,h4,h5,h6{margin:0;}
._gray{
    color: #888888;
}
._white{
    color: #fff;
}
.btn{
    cursor: pointer;
    font-size: 160%;
}
body{
    font-size: 10px;
    font-family: "almoni";
    font-weight: 500
}
.sectionInner{
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    height:100%;
    padding: 0 20px;
}
.header{
    width: 100%;
    margin-bottom: 5px;
    height: 13vh;
}
.header_firstLine{
    height: 30%;
    width: 100%;
    font-size: 160%;
}
.header_firstLine .sectionInner{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: 300;
}
.header_firstLine-social{
    order: 1;
}
.header_firstLine-social img{
    margin: 0  15px;
}
.header_firstLine-contacts-item address{
    display: inline;
    font-style: normal;
}
.header_firstLine-contacts-item img{
    margin-right: 20px;
    margin-left: 10px;
    float: right;
}
.header_firstLine-contacts{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    order: 2;
}
.header_firstLine-contacts a{
    color: #FAFAFA;
    text-decoration: none;
}

.header_secondLine{
    height: 70%;
    font-size: 160%;
}
.header_secondLine .sectionInner{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.header_secondLine-contacts-phone{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.header_secondLine-contacts-phone .text{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    margin-right: 15px;
}
.header_secondLine-contacts-phone .text a{
    font-weight: 900;
    text-decoration: none;
    color: #070F22;
    font-size: 150%;
}
.header_secondLine-contacts-phone .text span{
    color: #0F2350;
    font-size: 100%;
}

.header_secondLine-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 50%;
    color: #070F22; 
}
.header_secondLine-nav a{
    color: #070F22;
}
.header_secondLine-logo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #0F2350;
}
.header_secondLine-logo .text{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    margin-right: 15px;
}
.header_secondLine-logo .title{
    font-weight: 900;
    font-size: 250%;
}
.header_secondLine-logo .subTitle{
    font-weight: 500;
    font-size: 100%;
}

.logo{
    width: 100%;
    height: 60vh;
    background: #0F2350 url("img/png/city.png") 50% 10% no-repeat;
    background-size: cover;
    position: relative;
}
.logo::before {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(69, 84, 105, 0.35); 
  }
.logo .sectionInner{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index:10;
}
.logo .sectionInner .title{
    font-weight: 700;
    font-size: 640%;
    margin-bottom: 15px;
}
.logo .sectionInner .subtitle{
    font-weight: 500;
    font-size: 360%;
    margin-bottom: 25px;
}

.logo .sectionInner .btn{
    width: 200px;
    height: 40px;
    border: none;
    background-color: #0F2350;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.fistBlock{
    position: absolute;
    width: 100%;
    top: 60vh;
}
.fistBlock .sectionInner{
    position: relative;
    z-index: 20;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.fistBlock .sectionInner .firsBlock_card{
    width: 13vw;
    height: 32vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #0F2350;
    padding: 0 20px;
    box-shadow: 0 4px 5px 2px rgba(184, 183, 183, 0.678);
    
}
.fistBlock .sectionInner .firsBlock_card hr{
    width: 100%;
    color: #ECECEC;
}

.fistBlock .sectionInner .firsBlock_card .text {
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}
.fistBlock .sectionInner .firsBlock_card .text .title{
    font-weight: 700;
    font-size: 240%;
    text-align: right;
    margin-bottom: 5px;
}
.fistBlock .sectionInner .firsBlock_card .text .subTitle{
    font-weight: 500;
    font-size: 180%;
    text-align: right;
    line-height: 1.3;
}
.fistBlock .sectionInner .firsBlock_card .more{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #CE2C15;
    font-size: 160%;
}


.secondBlock{
    width: 100%;
    height: 85vh;
    background: #ECECEC url("img/png/bgPrev.png") no-repeat;
    background-size: cover;
    position: relative;
    color: #070F22;
}
.secondBlock::before {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(236, 236, 236, 0.76); 
  }
.secondBlock .sectionInner{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    z-index:10;
}
.secondBlock .sectionInner .men{
    width: 25vw;
    height: auto;
}
.secondBlock .sectionInner .aboutCompany{
    margin-top: 20px;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}
.secondBlock .sectionInner .aboutCompany .title{
    font-weight: 900;
    font-size: 480%;
    color: #0F2350;

}
.secondBlock .sectionInner .aboutCompany .subTitle{
    font-weight: 700;
    font-size: 280%;
    color: #0F2350;
}
.secondBlock .sectionInner .aboutCompany .list{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 15%;
    font-size: 160%;

}
.secondBlock .sectionInner .aboutCompany .listItem{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    margin: 10px 0;   
}
.secondBlock .sectionInner .aboutCompany .listItem img{
    order: 2;
    margin: 0 10px;
}
.secondBlock .sectionInner .aboutCompany .text{
    font-weight: 500;
    font-size: 200%;
    line-height: 1.0;
    width: 80%;
    text-align: right;
}
.secondBlock .sectionInner .aboutCompany .text .firstParagraph{
    margin-top: 10px;
}
.secondBlock .sectionInner .aboutCompany .text .firstParagraph,
.secondBlock .sectionInner .aboutCompany .text .secondParagraph{
    margin-bottom: 35px;
}
.secondBlock .sectionInner .aboutCompany .btn{
    width: 170px;
    height: 40px;
    border: none;
    background-color: #CE2C15;
    color: #FAFAFA;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.thirdBlock{
    margin-top: 10px;
    height: 30vh;
}
.thirdBlock .sectionInner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.thirdBlock .sectionInner .title{
    font-weight: 900;
    font-size: 480%;
    color: #0F2350;
    margin-bottom: 20px;
}
.thirdBlock .sectionInner .subTitle{
    font-weight: 700;
    font-size: 280%;
    color: #0F2350;
}
.thirdBlock .sectionInner .companiesLogo{
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.thirdBlock .sectionInner .companiesLogo .companyLogo{
    padding: 0 15px;
    width: 10vw;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px 2px rgba(184, 183, 183, 0.678);
}
.thirdBlock .sectionInner .companiesLogo .companyLogo img{
    margin-bottom: 10px;
}
.thirdBlock .sectionInner .companiesLogo .companyLogo hr{
    width: 100%;
}
.thirdBlock .sectionInner .companiesLogo .companyLogo .underline{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #0F2350;
    padding: 7px 0;
    font-size: 160%;
}
.thirdBlock .sectionInner .companiesLogo .companyLogo .underline .text{
    font-weight: 700;
}

.fourthBlock{
    width: 100%;
    height: 40vh;
    margin-top: 40px;
}
.fourthBlock .sectionInner{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.fourthBlock .sectionInner .information{
    order:3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 33%;
    height: 100%;

}
.fourthBlock .sectionInner .information .title{
    font-weight: 900;
    font-size: 480%;
    color: #0F2350;
    margin-bottom: 20px;
}
.fourthBlock .sectionInner .information .subTitle{
    text-align: end;
    font-weight: 500;
    font-size: 260%;
    color: #0F2350;

} 
.fourthBlock .sectionInner .contacts{
    order:2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 25%;
}
.fourthBlock .sectionInner .contacts .title{
    font-weight: 900;
    font-size: 480%;
    color: #0F2350;
    margin-bottom: 20px;
}
.fourthBlock .sectionInner .contacts .contact{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 20px;
    text-align: end;
    font-size: 160%;
}
.fourthBlock .sectionInner .contacts .contact>img{
    margin-left: 20px;
}
.fourthBlock .sectionInner .contacts .contact .firstLine{
    font-weight: 700;
    font-size: 110%;

}
.fourthBlock .sectionInner .contacts .contact .secondLine{
    color: #070F22;
    font-weight: 500;
    font-style: normal;
    font-size: 110%;
}
.fourthBlock .sectionInner .contacts .contact a{
    color: #070F22;
}
.fourthBlock .sectionInner .form{
    order:1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 33%;
}
.fourthBlock .sectionInner .form .title{
    font-weight: 900;
    font-size: 480%;
    color: #0F2350;
    margin-bottom: 20px;
    width: 100%;
    text-align: end;
}
.fourthBlock .sectionInner .form .firstLine{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.fourthBlock .sectionInner .form .firstLine div{
    text-align: end;
    width: 100%;
}
.fourthBlock .sectionInner .form .firstLine div label{
    font-weight: 700;
    font-size: 160%;
}
.fourthBlock .sectionInner .form .firstLine div input,
.fourthBlock .sectionInner .form .commentsArea{
    width: 100%;
    padding: 5px;
    font-size: 160%;
    text-align: right;
}
.fourthBlock .sectionInner .form .firstLine div input::placeholder,
.fourthBlock .sectionInner .form .commentsArea::placeholder,
.fourthBlock .sectionInner .form .firstLine div input:placeholder-shown,
.fourthBlock .sectionInner .form .commentsArea:placeholder-shown{
    direction: rtl;
}
.fourthBlock .sectionInner .form .firstLine div input{
    margin: 20px 0;
    line-height: 1;
}
.fourthBlock .sectionInner .form .commentsArea{
    line-height: 1;
    resize: none;
}
.fourthBlock .sectionInner .form .btn{
    width: 100%;
    margin: 20px 0;
    height: 100px;
    border: none;
    background-color: #CE2C15;
    color: #FAFAFA;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.fourthBlock .sectionInner .form .btn .btnText{
    font-weight: 500;
    font-size: 100%;   
}

.FIOConteiner{
    order: 2;
    margin-left: 10px;
}
.PHONEConteiner{
    order:1;
    margin-right: 10px;
}
.commentLabel{
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 160%;     
}
.fifthBlock{
    background-color: #0F2350;
    width: 100%;
    height: 70vh;
}
.fifthBlock .sectionInner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.fifthBlock .sectionInner .title{
    font-weight: 900;
    font-size: 480%;
    color: #FAFAFA;
}
.fifthBlock .sectionInner .news{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.fifthBlock .sectionInner .news .smallNews{
    width: 100%;
}
.fifthBlock .sectionInner .news .smallNews .newsItem img{
    width: 7vw;
    height: 17vh;
}
.fifthBlock .sectionInner .news .smallNews .smallNewsList{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

}
.fifthBlock .sectionInner .news .smallNews .smallNewsList .newsItem{
    background-color: #fafafa;
    max-width: 20vw;
    max-height: 35vh;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}
.fifthBlock .sectionInner .news .smallNews .smallNewsList .newsItem .text {
    order: 1;
    text-align: end;
    margin-right: 20px;
}
.fifthBlock .sectionInner .news .smallNews .smallNewsList .newsItem .text .title {
    color: #0F2350;
    font-size: 240%;
}
.fifthBlock .sectionInner .news .smallNews .smallNewsList .newsItem .text .subTitle {
    font-weight: 500;
    font-size: 180%;
    color: #0F2350;
}
.fifthBlock .sectionInner .news .smallNews .smallNewsList .newsItem img {
    object-fit:cover;
    order: 2;
}
.fifthBlock .sectionInner .news .smallNews .more{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 160%;
    color: #fafafa;
    margin: 0 20px 20px 20px;
}
.fifthBlock .sectionInner .news .smallNews hr{
    margin: 0 20px;
}
.fifthBlock .sectionInner .news .bigNews{
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background-color: #fafafa;
    text-align: end;
}
.fifthBlock .sectionInner .news .bigNews .bigNewsImg{
    width: 20vw;
    height: 20vh;
    object-fit: cover;
}
 .fifthBlock .sectionInner .news .bigNews .text{
    padding: 0 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
 }
 .fifthBlock .sectionInner .news .bigNews .text .title{
    color: #0F2350;
    font-size: 320%;
    margin-bottom: 10px;
}
.fifthBlock .sectionInner .news .bigNews .text .subTitle {
    font-weight: 500;
    font-size: 200%;
    color: #0F2350;
    text-align: end;
    margin-top: 10px;
}

.fifthBlock .sectionInner .news .bigNews hr{
    width: 80%;
    color: #ECECEC;
    align-self: center;
}
.fifthBlock .sectionInner .news .bigNews .more{
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #CE2C15;
    margin-bottom: 10px;
    font-size: 160%;
}
.footer{
    background-color: #070F22;
    width: 100%;
    height: 53vh;
    color: #CFCFCF;
}
.footer .sectionInner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}
.footer .sectionInner .mainFooter{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.footer .sectionInner .mainFooter .footerList{
    list-style: none;
    font-size: 200%;
    text-align: end;  
}
.footer .sectionInner .mainFooter .footerList .footerListItem:first-child{
    margin-top: 0;
}
.footer .sectionInner .mainFooter .footerList .footerListItem{
    margin-top: 15px;
}
.footer .sectionInner .mainFooter .footerList .footerListItem a{
    text-decoration: none;
    color: #CFCFCF;
}
.footer .sectionInner .mainFooter .title{
    font-size: 240%;
    font-weight: 700;
    
}
.footer .sectionInner .mainFooter hr{ 
    width: 100%;
    border: none; /* Убираем границу для браузера Firefox */
    color: #cfcfcf88; /* Цвет линии для остальных браузеров */
    background-color: #cfcfcf88; /* Цвет линии для браузера Firefox и Opera */
    height: 2px; /* Толщина линии */
    margin: 10px 0;
}
.footer .sectionInner .mainFooter .contacts{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 25%;
    color: #ECECEC;
}
.footer .sectionInner .mainFooter .contacts .title{
    font-weight: 900;
    font-size: 480%;
    color: #0F2350;
    margin-bottom: 20px;
}
.footer .sectionInner .mainFooter .contacts .contact .firstLine{
    font-size: 220%;
    margin-bottom: 5px;
}
.footer .sectionInner .mainFooter .contacts .contact .secondLine{
    font-size: 160%;
}
.footer .sectionInner .mainFooter .contacts .contact .secondLine,
.footer .sectionInner .mainFooter .contacts .contact a{
    color: #ffffff7e;
    font-style: normal;
}
.footer .sectionInner .mainFooter .contacts .contact{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 20px;
    text-align: end;
}
.footer .sectionInner .mainFooter .contacts .contact>img{
    margin-left: 20px;
}
.footer .sectionInner .mainFooter .contacts .contact .text .title{
    font-weight: 900;
    font-size: 400%;
    color: #ececec;
}

.footer .sectionInner .mainFooter .time{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 20%;
}
.footer .sectionInner .mainFooter .time .timeText{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
} 
.footer .sectionInner .mainFooter .time .timeText .text{
    font-size: 180%;
}
.footer .sectionInner .mainFooter .time .timeText img{
    margin-left: 10px;
}
.footer .sectionInner .mainFooter .category{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 20%;
}
.footer .sectionInner .mainFooter .footerMenu{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 20%;
}
.footer .sectionInner .lastLineFooter{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.footer .sectionInner .lastLineFooter .design {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.footer .sectionInner .lastLineFooter .design .text{
    border: none;
    border-left: 1px solid #CFCFCF;
    color: #CFCFCF;
    font-weight: 300;
    font-size: 150%;
    line-height: 2;
    margin-left: 10px;
    padding-left: 10px;
}
.footer .sectionInner .lastLineFooter .messangers img{
    margin-right: 10px;
}
.footer .sectionInner .lastLineFooter .copyright{
    font-weight: 300;
    font-size: 150%;
}


@media (min-width: 768px){
    body{
        font-size: 8px;
    }
    .fistBlock .sectionInner .firsBlock_card{
        width: 22%;
    }
    .secondBlock .sectionInner .men {
        width: 50%;
    }
    .thirdBlock .sectionInner .companiesLogo .companyLogo {
        width: 20%;
    }
    .fourthBlock .sectionInner .form .btn {
        height: 40px;
    }
    .fifthBlock .sectionInner .news .smallNews .smallNewsList .newsItem {
        max-width: 45%;
    }
    .fifthBlock .sectionInner .news .smallNews .newsItem img {
        width: 40%;
    }
    .fifthBlock .sectionInner .news .bigNews .bigNewsImg {
        width: 28vw;
    }
}
@media (min-width: 992px){
    body{
        font-size: 10px;
    }
    .secondBlock .sectionInner .men {
        width: 40%;
    }
    .fifthBlock .sectionInner .news .smallNews .newsItem img {
        width: 30%;
    }
    .fourthBlock .sectionInner .form .btn {
        height: 100px;
    }
}
@media (min-width: 1200px){
    .sectionInner{
        margin: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .thirdBlock .sectionInner .companiesLogo .companyLogo {
        width: 15%;
    }
    .fifthBlock .sectionInner .news .smallNews .newsItem img {
        width: 50%;
    }
    .fifthBlock .sectionInner .news .bigNews .bigNewsImg {
        width: 28vw;
    }
    .secondBlock .sectionInner .men {
        width: 35%;
    }
}
@media (min-width: 1400px){
    .fifthBlock .sectionInner .news .bigNews .bigNewsImg {
        width: 25vw;
    }
    .secondBlock .sectionInner .men {
        width: 35%;
    }    
}
@media (min-width: 1920px){
    .fifthBlock .sectionInner .news .bigNews .bigNewsImg {
        width: 18vw;
    }
    .secondBlock .sectionInner .men {
        width: 60%;
    }
}
`;

const whitelist = /#foo|\.bar/;

let dropped = new Set();

let cleaned = dropcss({
    html,
    css,
    shouldDrop: (sel) => {
        if (whitelist.test(sel))
            return false;
        else {
            dropped.add(sel);
            return true;
        }
    },
});

console.log(cleaned.css);

console.log(dropped);