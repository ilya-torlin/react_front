import React, { Component } from 'react';
import '../../../css/ProgrammList.css';

class ProgrammList extends Component{
    render() {
        return (
            // state-opened - class for open
            <div className="tv-program-tile js-tv-program-tile p-2">
                <div className="tv-program-tile__inner-wrap js-tv-program-tile__inner-wrap">
                    <div className="tv-program-tile__header js-tv-program-tile__header">
                        <div className="tv-program-tile__header-image">
                            <img src="//epg.domru.ru/chlogo/1474886439.png"/>
                        </div>
                        <div className="tv-program-tile__header-title js-tv-program-tile__header-title"><a
                            className="tv-program-tile__header-title-name" href="/domru-tv/channel/3841">8 канал</a>
                            <div className="tv-program-tile__header-title-show-name">Восьмое чувство [16+]</div>
                            <div className="tv-program-tile__header-title-show-time">13:00 - 14:00</div>
                        </div>
                    </div>
                    <div className="tv-program-tile__list js-tv-program-tile__list">
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">00:00</dt>
                            <dd className="tv-program-tile__list-item-title">Восьмое чувство [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">01:00</dt>
                            <dd className="tv-program-tile__list-item-title">Интерактивный канал [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">04:15</dt>
                            <dd className="tv-program-tile__list-item-title">Проклятые изумруды [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">05:00</dt>
                            <dd className="tv-program-tile__list-item-title">Удачная ночь [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">06:10</dt>
                            <dd className="tv-program-tile__list-item-title">Мужчины не плачут [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">07:00</dt>
                            <dd className="tv-program-tile__list-item-title">Клуб потребителей [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">08:00</dt>
                            <dd className="tv-program-tile__list-item-title">Интерактивный канал [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">09:05</dt>
                            <dd className="tv-program-tile__list-item-title">Магия счастья [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">10:05</dt>
                            <dd className="tv-program-tile__list-item-title">Крутой вираж [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">11:00</dt>
                            <dd className="tv-program-tile__list-item-title">Лучшие покупки [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item tv-program-tile__list-item_active">
                            <dt className="tv-program-tile__list-item-time">13:00</dt>
                            <dd className="tv-program-tile__list-item-title">Восьмое чувство [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">14:00</dt>
                            <dd className="tv-program-tile__list-item-title">Вся правда о воде [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">15:00</dt>
                            <dd className="tv-program-tile__list-item-title">Восьмое чувство [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">16:00</dt>
                            <dd className="tv-program-tile__list-item-title">Вся правда о воде [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">17:00</dt>
                            <dd className="tv-program-tile__list-item-title">Восьмое чувство [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">18:00</dt>
                            <dd className="tv-program-tile__list-item-title">Удачный день [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">19:05</dt>
                            <dd className="tv-program-tile__list-item-title">Магия счастья [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">20:00</dt>
                            <dd className="tv-program-tile__list-item-title">Удачный день [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">22:00</dt>
                            <dd className="tv-program-tile__list-item-title">8КУРСЕ [16+]</dd>
                        </dl>
                        <dl className="tv-program-tile__list-item js-tv-program-tile__list-item">
                            <dt className="tv-program-tile__list-item-time">22:15</dt>
                            <dd className="tv-program-tile__list-item-title">Азартные игры [16+]</dd>
                        </dl>
                    </div>
                    <div
                        className="tv-program-tile__link-drop tv-program-tile__link-drop_close js-tv-program-tile__link-drop"
                        data-action="close">Свернуть
                    </div>
                    <div className="tv-program-tile__link-wrap"><a className="tv-program-tile__link"
                                                                   href="/domru-tv/channel/3841"><span
                        className="tv-program-tile__link-text">Смотреть всю программу</span></a></div>
                </div>
                <div className="tv-program-tile__link-drop-wrap">
                    <div className="tv-program-tile__link-drop js-tv-program-tile__link-drop"
                         data-action="open">Развернуть
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgrammList;